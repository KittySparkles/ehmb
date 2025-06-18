export const DEFAULT_LOCALE: Locale = "ko"
export const TRANSLATIONS_PATTERNS = [
  /^Stat_/,
  /^Talent_/,
  /^Bow_Name$/,
  /^DoubleBlade_Name$/,
  /^DualPistol_Name$/,
  /^MagicStaff_Name$/,
  /^Rifle_Name$/,
  /^Scythe_Name$/,
  /^SwordAndShield_Name$/,
  /^StoneOrb_Name$/,
  /^TwoHanded_Name$/,
  /^talent_required$/,
  /^talent_overall_point_required$/,
  /^level_x$/,
  /^all_masteries$/,
  /^talent_rank$/,
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
