import type { Locale } from "../contexts/Localization/config"

const REGEX = [
  null,
  null,
  /([^*\s/]*)\/([^*\s]*|$)/g,
  /([^*\s/]*)\/([^/]*)\/([^*\s]*|$)/g,
  /([^*\s/]*)\/([^/]*)\/([^/]*)\/([^*\s]*|$)/g,
  /([^*\s/]*)\/([^/]*)\/([^/]*)\/([^/]*)\/([^*\s]*|$)/g,
]

const unfoldValue = (string = "") => String(string).split("/")

export const resolveDescription = (
  description: string,
  locale: Locale,
  max: number,
  rank: number
) => {
  const re = REGEX[max]

  if (!re) {
    return description
  }

  const variables = description.match(re) || []

  const values = Array.from({ length: max }, (_, index) =>
    variables.reduce(
      (result, variable) =>
        result.replace(variable, unfoldValue(variable)[index]),
      description
    )
  )

  let value = values[rank - 1]
  if (!value) return value

  // This is a bit of an ugly language-specific trick to include the “s” unit
  // (used for durations) into a highlighted bit. Doing it here instead of
  // higher up has the nice effect of making the diff much nicer by adding the
  // unit to both the deletion and the insertion.
  if (locale === "en") value = value.replace(/(\d)\*s/g, "$1s*")
  if (locale === "ko") value = value.replace(/(\d)\*초/g, "$1초*")
  if (locale === "ru") value = value.replace(/(\d)\*с/g, "$1с*")

  return value
}
