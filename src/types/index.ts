import type { MASTERIES } from "../schema/data"

export type RawSkill = {
  id: number
  description: string
  max: number
  position: [number, number]
  requires?: number
}
export type Skill = RawSkill & { current: number }
export type Build = Skill[]
export type Mastery = (typeof MASTERIES)[number]
export type MasteryType = Mastery["id"]
