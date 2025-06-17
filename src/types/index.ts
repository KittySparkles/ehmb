import type { MASTERIES } from "../schema/data"

export type VariableType =
  | { type: "translation"; value: string; highlight?: boolean }
  | { type: "raw"; value: string; highlight?: boolean }
export type Variables = Record<string, VariableType>

export type RawSkill =
  | {
      id: number
      max: number
      position: [number, number]
      requires?: number
      variables: Variables
    }
  | {
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
