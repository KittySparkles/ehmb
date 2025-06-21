import { describe, it, expect, vi } from "vitest"
import { resolveSkillDescription } from "./resolveSkillDescription"
import type { Skill } from "../types"
import type { Locale } from "../contexts/Localization/config"

vi.mock("../helpers/microMarkdown", () => ({
  microMarkdown: (input: string) => input,
}))

const t = (key: string) => {
  const translations: Record<string, string> = {
    Talent_10_Desc:
      "Every <color=green>{{attackCount0}}rd</color> attack deals {{effectDamage0}} damage.",
    Talent_20_Desc:
      "Gain a shield for {{shieldDuration0}}s absorbing {{shieldValue0}} damage.",
    Talent_30_Desc: "Increase Armor by {{armorValue0}}.",
    Talent_40_Desc: "Deal {{damage0}} damage every {{interval0}}s.",
    Talent_50_Desc: "Increase stat: {{statName0}} by {{statValue0}}.",
    Stat_Armor: "Armor",
  }
  return translations[key] || ""
}

const baseSkill = {
  id: 10,
  current: 0,
  max: 5,
  variables: {
    attackCount0: { type: "raw", value: "3", highlight: true },
    effectDamage0: { type: "raw", value: "100", highlight: true },
  },
  position: [0, 0],
} as Skill

describe("resolveSkillDescription", () => {
  it("throws if translation is missing", () => {
    const skill = { ...baseSkill, id: 999 }
    expect(() => resolveSkillDescription(t, "en" as Locale, skill)).toThrow(
      /Could not find description/
    )
  })

  it("handles translation variable type", () => {
    const skill = {
      id: 50,
      current: 1,
      max: 5,
      variables: {
        statName0: {
          type: "translation",
          value: "Stat_Armor",
          highlight: true,
        },
        statValue0: { type: "raw", value: "10", highlight: true },
      },
      position: [0, 0],
    } as Skill
    const desc = resolveSkillDescription(t, "en" as Locale, skill)
    expect(desc).toContain("*Armor*")
    expect(desc).toContain("*10*")
  })

  it("handles highlight edge cases (double stars)", () => {
    const t2 = (_: string) =>
      "Gain <color=green>{{shieldValue0}}</color> shield for {{shieldDuration0}}s."
    const skill = {
      id: 20,
      current: 1,
      max: 5,
      variables: {
        shieldValue0: { type: "raw", value: "200", highlight: true },
        shieldDuration0: { type: "raw", value: "5", highlight: true },
      },
      position: [0, 0],
    } as Skill
    const desc = resolveSkillDescription(t2, "en" as Locale, skill)
    expect(desc).not.toContain("**")
    expect(desc).toContain("*200*")
  })

  it("handles edge case for shield formula", () => {
    const t3 = (_: string) => "Shield formula: {{X}} * ARMOR}}"
    const skill = {
      id: 180,
      current: 1,
      max: 5,
      variables: {},
    } as Skill
    const desc = resolveSkillDescription(t3, "en" as Locale, skill)
    expect(desc).toContain("*X*")
  })

  it("applies locale-specific highlighting", () => {
    const t4 = (_: string) => "Deal {{damage0}} damage every {{interval0}}s."
    const skill = {
      id: 40,
      current: 1,
      max: 5,
      variables: {
        damage0: { type: "raw", value: "50", highlight: true },
        interval0: { type: "raw", value: "2", highlight: true },
      },
      position: [0, 0],
    } as Skill
    const desc = resolveSkillDescription(t4, "en" as Locale, skill)
    expect(desc).toContain("*2s*")
  })
})
