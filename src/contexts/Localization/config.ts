import { MASTERIES } from "../../schema/data"

export const DEFAULT_LOCALE: Locale = "ko"
export const TRANSLATIONS_PATTERNS = [
  /^Stat_/,
  /^Talent_/,
  ...MASTERIES.map((mastery) => new RegExp(`^${mastery.key}$`)),
  /^talent_required$/,
  /^talent_overall_point_required$/,
  /^level_x$/,
]
export const ALLOWED_LOCALES = [
  "en",
  "fr",
  "de",
  "it",
  "ja",
  "ko",
  "pl",
  "ru",
  "tr",
  "zh-CN",
  "vi",
  "pt-BR",
] as const

export type Locale = (typeof ALLOWED_LOCALES)[number]
export type CrowdinItem = Record<Locale, string> & {
  Key: string
  Context?: string
}
export type LocalizationItem = {
  key: string
  translations: Record<Locale, string>
}
