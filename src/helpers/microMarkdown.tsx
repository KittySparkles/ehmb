import { replaceInString } from "./replaceInString"

export const microMarkdown = (string: string) => {
  if (typeof string !== "string") {
    return string
  }

  // Assume hyphens are used to author numeric ranges or negative values, and
  // therefore prevent line-breaks from happening before/after the hyphen by
  // using a non-breaking hyphen.
  // See: https://unicode-table.com/en/2011/
  const chunks = [string.replace(/-/g, "‑")]

  const chunksWithHighlights = replaceInString(
    chunks,
    /\*([^*]+)\*/g,
    (match, index) => <strong key={match + index}>{match}</strong>
  )
  const chunksWithDeletions = replaceInString(
    chunksWithHighlights,
    /\~([^~]+)\~/g,
    (match, index) => <del key={match + index}>{match}</del>
  )
  const chunksWithInsertions = replaceInString(
    chunksWithDeletions,
    /\+([^+]+)\+/g,
    (match, index) => <ins key={match + index}>{match}</ins>
  )

  return chunksWithInsertions
}
