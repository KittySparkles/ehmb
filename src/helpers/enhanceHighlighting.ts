import type { Locale } from "../contexts/Localization/config"

// This is a bit of an ugly language-specific trick to include the duration unit
// into a highlighted bit. It transforms something like `*1*s` into `*1s*`. It
// needs to happen post-unpacking, otherwise it changes something like `*1/2*s`
// into `*1/2s*`, which causes the unit to only be displayed for the last value.
export function enhanceHighlighting(value: string, locale: Locale) {
  if (!value) return value

  // Distances & durations
  if (locale === "en") value = value.replace(/(\d)\*([ms])/g, "$1$2*")
  if (locale === "ru") value = value.replace(/(\d)\*([см])/g, "$1$2*")

  // Distances
  if (locale === "it") value = value.replace(/(\d)\*m/g, "$1m*")
  if (locale === "pl") value = value.replace(/(\d)\*m/g, "$1m*")
  if (locale === "fr") value = value.replace(/(\d)\*m/g, "$1m*")
  if (locale === "de") value = value.replace(/(\d)\*m/g, "$1m*")
  if (locale === "pt-BR") value = value.replace(/(\d)\*m/g, "$1m*")

  // Durations
  if (locale === "ko") value = value.replace(/(\d)\*초/g, "$1초*")
  if (locale === "zh-CN") value = value.replace(/(\d)\*米/g, "$1米*")

  return value
}
