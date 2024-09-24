import { replaceInString } from "./replaceInString"

export const microMarkdown = (string: string) => {
  if (typeof string !== "string") {
    return string
  }

  // Assume hyphens are used to author numeric ranges, and therefore prevent
  // line-breaks from happening before/after the hyphen by using a non-breaking
  // hyphen.
  // See: https://unicode-table.com/en/2011/
  const string_ = string.replace(/-/g, "‑")

  return replaceInString(string_, /\*([^*]+)\*/g, (match, index) => (
    <strong key={match + index}>{match}</strong>
  ))
}
