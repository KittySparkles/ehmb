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

export const resolveDescription = (skill: Skill, rank: number) => {
  const re = REGEX[skill.max]

  if (!re) {
    return skill.description
  }

  const variables = skill.description.match(re) || []

  const values = Array.from({ length: skill.max }, (_, index) =>
    variables.reduce(
      (result, variable) =>
        result.replace(variable, unfoldValue(variable)[index]),
      skill.description
    )
  )

  return values[rank - 1]
}
