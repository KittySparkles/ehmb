import { describe, it, expect } from "vitest"
import { replaceColorTokens } from "./replaceColorTokens"

describe("replaceColorTokens", () => {
  it("replaces <color=...> and </color> with stars", () => {
    const input = "This is <color=green>highlighted</color> text."
    expect(replaceColorTokens(input)).toBe("This is *highlighted* text.")
  })
})
