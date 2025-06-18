import type { JSX } from "react"

type Renderable = string | number | JSX.Element

export function formatUnity(
  template: string,
  ...args: Renderable[]
): Renderable[] {
  const regex = /\{(\d+)(:plural:([^|{}]+)\|([^{}]+))?\}/g
  const result: Renderable[] = []
  let lastIndex = 0

  for (const match of template.matchAll(regex)) {
    const [placeholder, indexStr, pluralPart, singular, plural] = match
    const index = Number.parseInt(indexStr, 10)
    const value = args[index]
    const before = template.slice(lastIndex, match.index)
    if (before) result.push(before)

    if (pluralPart) {
      const n =
        typeof value === "number"
          ? value
          : Number.parseFloat(value?.toString() || "0")
      result.push(n === 1 ? singular : plural)
    } else {
      result.push(value)
    }

    lastIndex = (match.index ?? 0) + placeholder.length
  }

  const tail = template.slice(lastIndex)
  if (tail) result.push(tail)

  return result
}
