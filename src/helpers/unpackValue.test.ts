import { describe, it, expect } from "vitest"
import { unpackValue } from "./unpackValue"

describe("unpackValue", () => {
  it("returns the correct value for 2 options", () => {
    expect(unpackValue("Increase X by 1/2", 2, 1)).toBe("Increase X by 1")
    expect(unpackValue("Increase X by 1/2", 2, 2)).toBe("Increase X by 2")
  })

  it("returns the correct value for 3 options", () => {
    expect(unpackValue("Increase X by 1/2/3", 3, 1)).toBe("Increase X by 1")
    expect(unpackValue("Increase X by 1/2/3", 3, 2)).toBe("Increase X by 2")
    expect(unpackValue("Increase X by 1/2/3", 3, 3)).toBe("Increase X by 3")
  })

  it("returns the correct value for 4 options", () => {
    expect(unpackValue("Increase X by 1/2/3/4", 4, 1)).toBe("Increase X by 1")
    expect(unpackValue("Increase X by 1/2/3/4", 4, 3)).toBe("Increase X by 3")
    expect(unpackValue("Increase X by 1/2/3/4", 4, 4)).toBe("Increase X by 4")
  })

  it("returns the correct value for 5 options", () => {
    expect(unpackValue("Increase X by 1/2/3/4/5", 5, 5)).toBe("Increase X by 5")
  })

  it("returns the input unchanged if max is not 2-5", () => {
    expect(unpackValue("Increase X by 1/2/3", 1, 1)).toBe("Increase X by 1/2/3")
    expect(unpackValue("Increase X by 1/2/3", 0, 1)).toBe("Increase X by 1/2/3")
    expect(unpackValue("Increase X by 1/2/3", 6, 1)).toBe("Increase X by 1/2/3")
  })

  it("returns the input unchanged for a value without slashes", () => {
    expect(unpackValue("Increase X by Y", 1, 1)).toBe("Increase X by Y")
    expect(unpackValue("Increase X by Y", 0, 1)).toBe("Increase X by Y")
    expect(unpackValue("Increase X by Y", 6, 1)).toBe("Increase X by Y")
  })
})
