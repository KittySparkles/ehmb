import {
  type TranslateFunction,
  useLocalization,
} from "../contexts/Localization/Provider"
import type { Skill } from "../types"
import { diffWords } from "diff"
import { microMarkdown } from "../helpers/microMarkdown"
import { unpackValue } from "../helpers/unpackValue"
import type { Locale } from "../contexts/Localization/config"

// There is _a lot_ going on with the skill descriptions. It needs to go through
// several iterations:
// 1. The skill object itself doesn’t have the description. It only has an `id`,
//    which is used to retrieve the skill name and the description in the trans-
//    lation file, as well as an object of variables which indicate what to
//    insert in place of a variable within the description (more on that later).
//    For instance, the skill with `id: 10` would have the key
//    `Talent_10_Desc` as a description. It comes like this from Crowdin:
//    > Every <color=green>{{attackCount0}}th</color> attack unleashes a steel
//    > storm, dealing {{effectDamage0}} damage to nearby enemies every
//    > {{effectEveryX0}}s for {{effectDuration0}}s (+ <color=green>
//    > {{effectCount0}}%</color> more damage when fighting a single enemy).
// 2. The `<color=green>` and `</color>` pairs are replaced with stars. There is
//    no particular good reason for that, it’s inherited from before Crowdin and
//    such HTML-like syntax. This _could_ be changed to handle them more like
//    JSX and skip the conversion to stars.
// 3. Then, for every variable indicated in the `variables` property of the
//    skill object, the variable token (wrapped with double-braces inside the
//    description) is replaced with the appropriate content. There are 2 types
//    of variables: either “raw” in which case the variable token is replaced as
//    is, or “translation” in which case the variable token is replace with the
//    translation of another term (for instance to mention the name of a stat).
//    Note: by default, variables are automatically highlighted. This saves us
//    from having too many `<color>` tags in the translations, since any value
//    that varies from level to level is meaningful enough that it deserves to
//    be highlighted.
// 4. Then, we solve some edge cases related to that last point, where we would
//    automatically highlight a replaced variable (which is done by wrapping it
//    with  stars), but the translator has _also_ wrapped that variable token
//    with a `<color=green>` and `</color>` pair. This would leave double stars
//    on each side of the value, of which only one set would be used for high-
//    lighting, leaving stars in the resulting content.
// 5. Then, we solve an edge case related to some Shield skills specifically.
//    They contain some weird variable tokens containing pseudo-formulas that
//    get resolved within the game itself. E.g. {{{{effectDamage0}}}} * ARMOR}}
//    At that point, they exist in our intermediate description as something
//    like {{X}} * ARMOR}}, which is irrelevant anyway since it’s a damage for-
//    mula, which we do not display because we display damage values as just X.
// 6. In order to make the diff visual output better (see below), we apply some
//    locale-specific mutations to the string to insert units (like `s` in Eng-
//    lish, `초` in Korean or `с` in Russian) _inside_ highlighting stars. Basi-
//    take a construct like `*1*s` and turn it into `*1s*` so that the unit is
//    highlighted alongside the value. This is not necessary for percentages
//    because the `%` symbol is typically not part of the translation string and
//    instead added directly within the game (or in our case, with the variables
//    replacements).
// -- At that point, we have a localized description, with no more variable
//    tokens as they were replaced with their content, with no more HTML-like
//    tags as they were replaced with stars, and with hopefully no uncovered
//    edge-cases — as a string. We can now take care of the _diff_.
// 7. Description diffing is used to show both the current version and the next
//    version of a skill. E.g.: Increase Armor by 5 -> 10
//    This is done with the `diff` package. Basically, we run a diff (àla git)
//    between the description for the current level, and for the next level, and
//    the `diff` package returns an array of _change objects_, which contain
//    whether a bit of text was deleted or inserted. At this point, we replace
//    deletions with a `<del>` React node, and insertions with an `<ins>` React
//    node (which have their own styles), and placed an arrow → between the two.
//    See: https://www.npmjs.com/package/diff
// 8. At that point, we should have an array of React nodes that can be safely
//    rendered as a description (hopefully).
export const useSkillDescription = (skill: Skill) => {
  const { t, locale } = useLocalization()
  const key = `Talent_${skill.id}_Desc`
  const translation = t(key)
  if (!translation) throw new Error(`Could not find description for “${key}”`)
  // Replace the coloration variables with stars since this is what our system
  // uses for highlight
  let description = replaceColorTokens(translation)

  // Replace the variable tokens with their variable content.
  description = replaceVariables(t, skill.variables, description)

  // Replace weird edge cases where we ended up with double highlighting (for
  // instance, in the Chinese translation, some highlighting tokens were added
  // where they’re not needed)
  description = description.replace(/\*\*/g, "*")

  // Fix some weird edge cases for Shield specifically (talents 176, 177, 180,
  // 181, 185, and 189); these formulaes are resolved within the game directly,
  // so they should just be ignored in the builder
  description = description.replace(/{{X}} \* ([A-Z_]+)}}/g, "*X*")

  return diffDescription(skill, description, locale)
}

function replaceColorTokens(value: string) {
  return value.replace(/<color=[^>]+>/g, "*").replace(/<\/color>/g, "*")
}

function replaceVariables(
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

// This is a bit of an ugly language-specific trick to include the duration unit
// into a highlighted bit. It transforms something like `*1*s` into `*1s*`. It
// needs to happen post-unpacking, otherwise it changes something like `*1/2*s`
// into `*1/2s*`, which causes the unit to only be displayed for the last value.
function enhanceHighlighting(value: string, locale: Locale) {
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

function diffDescription(skill: Skill, description: string, locale: Locale) {
  const current = enhanceHighlighting(
    unpackValue(description, skill.max, skill.current),
    locale
  )
  const next = enhanceHighlighting(
    unpackValue(description, skill.max, skill.current + 1),
    locale
  )

  if (skill.current === skill.max) return microMarkdown(current)
  if (skill.current === 0) return microMarkdown(next)

  const diff = diffWords(current, next, {
    // @ts-expect-error
    intlSegmenter: new Intl.Segmenter("en", { granularity: "word" }),
  })

  const diffed = diff
    .map((chunk) => {
      if (chunk.removed) return `~${chunk.value}~`
      if (chunk.added) return ` → +${chunk.value}+`
      return chunk.value
    })
    .join("")

  return microMarkdown(diffed)
}
