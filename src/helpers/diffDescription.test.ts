import { describe, it, expect, vi } from "vitest"
import { diffDescription } from "./diffDescription"
import { replaceVariables } from "./replaceVariables"
import type { Skill } from "../types"

vi.mock("../helpers/microMarkdown", () => ({
  microMarkdown: (input: string) => input,
}))

const t = (key: string) => {
  const translations: Record<string, string> = {
    Talent_30_Desc: "Increase Armor by {{armorValue0}}.",
    Stat_Armor: "Armor",
  }
  return translations[key] || ""
}

describe("diffDescription", () => {
  const baseSkill = {
    id: 30,
    max: 5,
    current: 0,
    variables: {
      armorValue0: { type: "raw", value: "3/4/5/6/7", highlight: true },
    },
    position: [0, 0],
  } as Skill

  const description = replaceVariables(
    t,
    baseSkill.variables,
    t(`Talent_${baseSkill.id}_Desc`)
  )

  it("returns next if skill.current === 0", () => {
    const skill = { ...baseSkill, current: 0 }
    expect(diffDescription(skill, description, "en")).toContain("*3*")
  })

  it("returns current if skill.current === skill.max", () => {
    const skill = { ...baseSkill, current: 5 }
    expect(diffDescription(skill, description, "en")).toContain("*7*")
  })

  it("returns diffed string for other cases", () => {
    const skill = { ...baseSkill, current: 1 }
    expect(diffDescription(skill, description, "en")).toContain("~3~")
    expect(diffDescription(skill, description, "en")).toContain("+4+")
  })
})
