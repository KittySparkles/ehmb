import path from "node:path"
import { createWriteStream } from "node:fs"
import { writeFile } from "node:fs/promises"
import https from "node:https"
import dotenv from "dotenv"
import decompress from "decompress"
import csvtojson from "csvtojson"
import type Client from "@crowdin/crowdin-api-client"
import { default as Crowdin } from "@crowdin/crowdin-api-client"
import {
  SUPPORTED_LOCALES,
  type CrowdinItem,
  type Locale,
  type LocalizationItem,
  TRANSLATIONS_PATTERNS,
} from "./config"

import ora from "ora"

const spinner = ora("Fetching translations…").start()

dotenv.config()

// @ts-expect-error
const client: Client = new Crowdin.default({
  token: process.env.CROWDIN_TOKEN ?? "",
})

const PROJECT_ID = 797774
const zipPath = path.join(process.cwd(), "crowdin-translations.zip")
const csvPaths = [
  path.join(process.cwd(), "./dist/unity-plugin/Talent.csv"),
  path.join(process.cwd(), "./dist/unity-plugin/Generic.csv"),
]
const jsonPath = path.join(
  process.cwd(),
  "./src/contexts/Localization/translations.json"
)

async function main() {
  spinner.text = `Building project with ID ${PROJECT_ID}`
  const {
    data: { id: buildId },
  } = await client.translationsApi.buildProject(PROJECT_ID)

  let status = "inProgress"
  while (status === "inProgress") {
    spinner.text = `Waiting for build ${buildId} to complete`
    const { data } = await client.translationsApi.checkBuildStatus(
      PROJECT_ID,
      buildId
    )
    status = data.status
    if (status === "failed") throw new Error("Crowdin build failed")
    if (status !== "finished") await new Promise((res) => setTimeout(res, 1000))
  }

  spinner.text = `Retrieving download URL for build with ID ${buildId}`
  const {
    data: { url },
  } = await client.translationsApi.downloadTranslations(PROJECT_ID, buildId)

  // 4. Stream to file using https and fs
  spinner.text = `Downloading ZIP file from ${url}`
  await new Promise<void>((resolve, reject) => {
    const file = createWriteStream(zipPath)
    https
      .get(url, (response) => {
        if (response.statusCode !== 200)
          return reject(
            new Error(`Download failed with status ${response.statusCode}`)
          )
        response.pipe(file)
        file.on("finish", () => file.close(() => resolve()))
      })
      .on("error", reject)
  })

  spinner.text = `Extracting ZIP file from ${zipPath}`
  await decompress(zipPath, "dist")

  spinner.text = "Converting CSV files to JSON"
  const jsons: CrowdinItem[][] = await Promise.all(
    csvPaths.map((path) => {
      return csvtojson().fromFile(path)
    })
  )
  spinner.text = "Reformatting JSON for further use"
  const json = jsons
    .reduce((acc, array) => acc.concat(array), [])
    .filter((object) => {
      return TRANSLATIONS_PATTERNS.some((pattern) => pattern.test(object.Key))
    })
    .map((object) => {
      const item: LocalizationItem = {
        key: object.Key,
        translations: {} as Record<Locale, string>,
      }
      for (const locale in object) {
        if (
          SUPPORTED_LOCALES.map(({ locale }) => locale).includes(
            locale as Locale
          )
        )
          item.translations[locale as Locale] = object[locale as Locale]
      }
      return item
    })

  spinner.text = `Wring JSON file at ${jsonPath}`
  await writeFile(jsonPath, JSON.stringify(json, null, 2), "utf8")

  spinner.succeed("All done!")
}

main()
