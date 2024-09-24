import type { MasteryType, Build } from "../types"
import { MASTERIES } from "../schema/data"

export const hashData = (masteryType: MasteryType, data: Build) =>
  `${masteryType}${data.map((s) => s.current).join("")}`

export const dehashData = (
  hash: string
): { type: MasteryType; build: Build } => {
  const type = hash.slice(0, 2) as MasteryType
  const mastery = MASTERIES.find((mastery) => mastery.id === type)

  if (!mastery) {
    throw new Error(`Could not find mastery for type ${type}`)
  }

  const values = Array.from(hash.slice(2) ?? "").map(Number)
  const build = mastery.schema.map((skill) => ({
    ...skill,
    current: values.shift() ?? 0,
  })) as Build

  return { type, build }
}
