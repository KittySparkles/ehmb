import { describe, it, expect } from "vitest"
import { microMarkdown } from "./microMarkdown"
import React, { type ReactElement } from "react"

describe("microMarkdown", () => {
  it("returns plain text as a single chunk", () => {
    const result = microMarkdown("plain text")
    expect(Array.isArray(result)).toBe(true)
    expect(result[0]).toBe("plain text")
  })

  it("renders bold as <strong>", () => {
    const result = microMarkdown("This is *bold* text")
    const strong = result.find(
      (el) => React.isValidElement(el) && el.type === "strong"
    )
    expect(strong).toBeTruthy()
    expect((strong as ReactElement).props.children[0]).toBe("bold")
  })

  it("renders deletion as <del>", () => {
    const result = microMarkdown("This is ~gone~ text")
    const del = result.find(
      (el) => React.isValidElement(el) && el.type === "del"
    )
    expect(del).toBeTruthy()
    expect((del as ReactElement).props.children[0]).toBe("gone")
  })

  it("renders insertion as <ins>", () => {
    const result = microMarkdown("This is +new+ text")
    const ins = result.find(
      (el) => React.isValidElement(el) && el.type === "ins"
    )
    expect(ins).toBeTruthy()
    expect((ins as ReactElement).props.children).toBe("new")
  })

  it("replaces hyphens with non-breaking hyphens", () => {
    const result = microMarkdown("10-20")
    expect(result[0]).toContain("‑") // U+2011
  })

  it("returns input unchanged if not a string", () => {
    expect(microMarkdown(null as unknown as string)).toBe(null)
    expect(microMarkdown(undefined as unknown as string)).toBe(undefined)
    expect(microMarkdown(123 as unknown as string)).toBe(123)
  })
})
