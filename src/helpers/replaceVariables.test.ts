import { describe, it, expect } from "vitest"
import { replaceVariables } from "./replaceVariables"
import type { Variables } from "../types"

describe("replaceVariables", () => {
  const t = (key: string) => (key === "Stat_Armor" ? "Armor" : key)

  it("replaces raw variables with highlighting", () => {
    const variables: Variables = {
      foo: { type: "raw", value: "42", highlight: true },
    }
    const desc = "Value: {{foo}}!"
    expect(replaceVariables(t, variables, desc)).toBe("Value: *42*!")
  })

  it("replaces translation variables with translation", () => {
    const variables: Variables = {
      statName0: { type: "translation", value: "Stat_Armor", highlight: true },
    }
    const desc = "Stat: {{statName0}}"
    expect(replaceVariables(t, variables, desc)).toBe("Stat: *Armor*")
  })

  it("does not highlight if highlight is false", () => {
    const variables: Variables = {
      foo: { type: "raw", value: "42", highlight: false },
    }
    const desc = "Value: {{foo}}!"
    expect(replaceVariables(t, variables, desc)).toBe("Value: 42!")
  })
})
