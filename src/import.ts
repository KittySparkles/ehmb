import path from "node:path"
import { createWriteStream } from "node:fs"
import { writeFile } from "node:fs/promises"
import https from "node:https"
import dotenv from "dotenv"
import decompress from "decompress"
import csv from "csvtojson"
import type Client from "@crowdin/crowdin-api-client"
import { default as Crowdin } from "@crowdin/crowdin-api-client"

dotenv.config()

// @ts-expect-error
const client: Client = new Crowdin.default({
  token: process.env.CROWDIN_TOKEN ?? "",
})

const PROJECT_ID = 797774
const zipPath = path.join(process.cwd(), "crowdin-translations.zip")
const csvPath = path.join(process.cwd(), "./dist/unity-plugin/Talent.csv")
const jsonPath = path.join(process.cwd(), "./dist/talents.json")

async function main() {
  console.log(`Starting to build project with ID ${PROJECT_ID}`)
  const {
    data: { id: buildId },
  } = await client.translationsApi.buildProject(PROJECT_ID)

  let status = "inProgress"
  while (status === "inProgress") {
    console.log(`Checking whether build with ID ${buildId} is finished`)
    const { data } = await client.translationsApi.checkBuildStatus(
      PROJECT_ID,
      buildId
    )
    status = data.status
    if (status === "failed") throw new Error("Crowdin build failed")
    if (status !== "finished") await new Promise((res) => setTimeout(res, 1000))
  }

  console.log(`Retrieving download URL for build with ID ${buildId}`)
  const {
    data: { url },
  } = await client.translationsApi.downloadTranslations(PROJECT_ID, buildId)

  // 4. Stream to file using https and fs
  console.log(`Downloading ZIP file from ${url}`)
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

  console.log(`Extracting ZIP file from ${zipPath}`)
  await decompress(zipPath, "dist")

  console.log(`Converting CSV file to JSON from ${csvPath}`)
  const json = await csv().fromFile(csvPath)

  console.log(`Wring JSON file at ${jsonPath}`)
  await writeFile(jsonPath, JSON.stringify(json, null, 2), "utf8")

  console.log("All done!")
}

main()
