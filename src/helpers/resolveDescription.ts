import type { Skill } from "../types"

const REGEX = [
  null,
  null,
  /([^*\s/]*)\/([^*\s,%sm]*|$)/g,
  /([^*\s/]*)\/([^/]*)\/([^*\s,%sm]*|$)/g,
  /([^*\s/]*)\/([^/]*)\/([^/]*)\/([^*\s,%sm]*|$)/g,
  /([^*\s/]*)\/([^/]*)\/([^/]*)\/([^/]*)\/([^*\s,%sm]*|$)/g,
]

const unfoldValue = (string = "") => String(string).split("/")

export const resolveDescription = (
  description: string,
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

  return values[rank - 1]
}
