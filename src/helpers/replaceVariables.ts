import type { TranslateFunction } from "../contexts/Localization/Provider"
import type { Skill } from "../types"

export function replaceVariables(
  t: TranslateFunction,
  variables: Skill["variables"],
  description: string
) {
  // For every variable that is defined for the given skill, replace it inside
  // the description
  for (const variableName in variables) {
    const { type, value, highlight } = variables[variableName]
    const regex = new RegExp(`{{${variableName}}}`, "g")
    const inject = (value: string) =>
      description.replace(regex, highlight !== false ? `*${value}*` : value)

    // If the type is `raw`, simply inject the given value in place of the
    // variable; replaced values are typically automatically highlighted within
    // the game, but in some cases the highlight is done in the translation in
    // which case we shouldn’t do it twice
    if (type === "raw") description = inject(value)
    // If the type is `translation`, replace the variable with the translation
    // of the given value
    else if (type === "translation") description = inject(t(value))
  }

  return description
}
