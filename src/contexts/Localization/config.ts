export const DEFAULT_LOCALE: Locale = "en"
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

export const SUPPORTED_LOCALES = [
  { locale: "en", name: "English" },
  { locale: "fr", name: "Français" },
  { locale: "de", name: "Deutsch" },
  { locale: "it", name: "Italiano" },
  { locale: "ja", name: "日本語" },
  { locale: "ko", name: "한국어" },
  { locale: "pl", name: "Polski" },
  { locale: "pt-BR", name: "Português" },
  { locale: "ru", name: "Русский" },
  { locale: "tr", name: "Türkçe" },
  { locale: "vi", name: "Tiếng Việt" },
  { locale: "zh-CN", name: "汉语" },
] as const

export type Locale = (typeof SUPPORTED_LOCALES)[number]["locale"]
export type CrowdinItem = Record<Locale, string> & {
  Key: string
  Context?: string
}
export type LocalizationItem = {
  key: string
  translations: Record<Locale, string>
}
