import { describe, it, expect } from "vitest"
import { enhanceHighlighting } from "./enhanceHighlighting"

describe("enhanceHighlighting", () => {
  it("moves 's' inside stars for en locale", () => {
    expect(enhanceHighlighting("*2*s", "en")).toBe("*2s*")
  })

  it("moves 'm' inside stars for fr locale", () => {
    expect(enhanceHighlighting("*5*m", "fr")).toBe("*5m*")
  })

  it("moves '초' inside stars for ko locale", () => {
    expect(enhanceHighlighting("*3*초", "ko")).toBe("*3초*")
  })

  it("returns value unchanged if no match", () => {
    expect(enhanceHighlighting("no highlight", "en")).toBe("no highlight")
  })
})
