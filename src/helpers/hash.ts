import type { MasteryType, Build } from "../types"
import { MASTERIES } from "../schema/data"
import { mapSchema } from "./mapSchema"

export const legacy_dehashData = (
  hash: string
): { type: MasteryType; build: Build; level: number } => {
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
  const level = build.reduce((acc, key) => acc + key.current, 0)

  return { type, build, level }
}

const TABLE = `
abcd
efgh
ijkl
mnop
qrst
uvwx
yzAB
CDEF
`
  .trim()
  .split("\n")

export const hashData = (masteryType: MasteryType, data: Build) => {
  return (
    masteryType +
    data
      // Discard skills that are not learnt at all to avoid serializing zeroes,
      // which can be safely implied
      .filter(({ current }) => current > 0)
      // Discard skills that are a dependency of another skill that was learnt,
      // as they are implied to be maxed out
      .filter(({ id }) => {
        const dependencyOf = data.find((skill) => skill.requires === id)
        if (dependencyOf && dependencyOf.current > 0) return false
        return true
      })
      .map(({ position, current }) => {
        const row = TABLE[position[0]]
        const char = row[position[1]]
        return `${char}${current}`
      })
      .join("")
  )
}

function getPositionForChar(char: string) {
  const row = TABLE.findIndex((row) => row.includes(char))
  const col = TABLE[row].indexOf(char)

  return [row, col]
}

export const dehashData = (hash: string) => {
  const type = hash.slice(0, 2) as MasteryType
  const mastery = MASTERIES.find((mastery) => mastery.id === type)

  if (!mastery) {
    throw new Error(`Could not find mastery for type ${type}`)
  }

  const values = (hash.slice(2) ?? "").match(/(\w\d)/g) ?? []
  const build = mapSchema(mastery.schema)
  const findSkillById = (id?: number) => build.find((skill) => skill.id === id)

  values.forEach((value) => {
    const char = value[0]
    const [row, col] = getPositionForChar(char)
    const skill = build.find(
      ({ position }) => position[0] === row && position[1] === col
    )

    if (!skill) {
      throw new Error(`Could not find skill for char ${char}`)
    }

    // Assign the current value to the skill
    skill.current = +value[1]

    let curr = skill
    let prev = null

    // If the skill depends on another skill, mark that other skill as maxed out
    // and keep doing that for the whole skill chain
    // biome-ignore lint/suspicious/noAssignInExpressions: necessary
    while ((prev = findSkillById(curr.requires))) {
      prev.current = prev.max
      curr = prev
    }
  })

  const level = build.reduce((acc, key) => acc + key.current, 0)

  return { type, build, level }
}
