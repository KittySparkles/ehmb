import type { ReactNode } from "react"

const regex = /\{(\d+)(:plural:([^{}]+))?\}/g
const CATEGORIES = ["zero", "one", "two", "few", "many", "other"]

export function formatUnity(
  template: string,
  locale: string,
  ...args: ReactNode[]
): ReactNode[] {
  const pluralRules = new Intl.PluralRules(locale)
  const result: ReactNode[] = []

  let lastIndex = 0

  for (const match of template.matchAll(regex)) {
    const [placeholder, indexStr, pluralPart, formsStr] = match
    const index = Number.parseInt(indexStr, 10)
    const value = args[index]
    const before = template.slice(lastIndex, match.index)
    if (before) result.push(before)

    if (pluralPart && typeof value === "number") {
      const forms = formsStr.split("|")
      const category = pluralRules.select(value)
      const catIndex = CATEGORIES.indexOf(category)
      const form = forms[catIndex] ?? forms[forms.length - 1] // fallback to last
      result.push(form.replace("{}", value.toString()))
    } else {
      result.push(value)
    }

    lastIndex = (match.index ?? 0) + placeholder.length
  }

  const tail = template.slice(lastIndex)
  if (tail) result.push(tail)

  return result
}
