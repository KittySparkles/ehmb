import type { ReactNode } from "react"
import {
  type Locale,
  type LocalizationItem,
  TRANSLATIONS_PATTERNS,
} from "../contexts/Localization/config"
import translations from "../contexts/Localization/translations.json"

export function prepareTranslations() {
  const dictionary = (translations as LocalizationItem[]).reduce<
    Record<string, LocalizationItem["translations"]>
  >((acc, item) => {
    acc[item.key] = item.translations
    return acc
  }, {})
  return dictionary
}

const DICTIONARY = prepareTranslations()
const PLURAL_CATEGORIES = ["zero", "one", "two", "few", "many", "other"]
const PLURAL_REGEX = /\{(\d+)(:plural:([^{}]+))?\}/g

export function translate(key: string, locale: Locale) {
  if (!TRANSLATIONS_PATTERNS.some((pattern) => pattern.test(key))) {
    console.warn(
      `Attempted to translate key “${key}” but no translation pattern matches it, which means it is not included in the translations file. Define it in the translation patterns and rebuild the site to be able to use it.`
    )
  }

  return DICTIONARY[key]?.[locale] ?? ""
}

export function formatUnity(
  template: string,
  locale: string,
  ...args: ReactNode[]
): ReactNode[] {
  const pluralRules = new Intl.PluralRules(locale)
  const result: ReactNode[] = []

  let lastIndex = 0

  for (const match of template.matchAll(PLURAL_REGEX)) {
    const [placeholder, indexStr, pluralPart, formsStr] = match
    const index = Number.parseInt(indexStr, 10)
    const value = args[index]
    const before = template.slice(lastIndex, match.index)
    if (before) result.push(before)

    if (pluralPart && typeof value === "number") {
      const forms = formsStr.split("|")
      const category = pluralRules.select(value)
      const catIndex = PLURAL_CATEGORIES.indexOf(category)
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
