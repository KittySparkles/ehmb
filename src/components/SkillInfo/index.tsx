import type { FC } from "react"
import { diffWords } from "diff"

import type { Skill } from "../../types"
import { resolveDescription } from "../../helpers/resolveDescription"
import { microMarkdown } from "../../helpers/microMarkdown"
import { useLocalization } from "../../contexts/Localization/Provider"
import { useMastery } from "../../contexts/Mastery/Provider"
import { useBuild } from "../../contexts/Build/Provider"
import { useSkill } from "../../hooks/useSkill"
import { Title } from "../Title"
import { Controls } from "../Controls"

import Styles from "./styles.module.css"

const useDiffedDescription = (skill: Skill, description: string) => {
  const current = resolveDescription(description, skill.max, skill.current)
  const next = resolveDescription(description, skill.max, skill.current + 1)

  if (skill.current === skill.max) return microMarkdown(current)
  if (skill.current === 0) return microMarkdown(next)

  const diff = diffWords(current, next, {
    // @ts-expect-error
    intlSegmenter: new Intl.Segmenter("en", { granularity: "word" }),
  })

  if (diff.length === 1) return microMarkdown(current)

  return diff.map((chunk, index, array) => {
    // Find the next chunk that is neither an addition nor a deletion; in other
    // words the next part of the sentence that’s unchanged.
    // instead.
    const nextNormalChunkIndex = array.findIndex(
      (node, i) => i > index && !node.added && !node.removed
    )

    // If it begins with a % sign or the letter s (for “second”) or m (for
    // “meter”) followed by a space or a star (i.e. `%*`, `% `, `s*`, `s `, `m*`
    // or `m `), it’s considered a unit and should be removed from its current
    // place and attached to both the deletion and the insertion.
    const nextUnitMatch =
      array[nextNormalChunkIndex]?.value.match(/^([%sm])[\s*]/)

    // Not too sure why, but there was a case where the diffing library brought
    // the unit as part of the deleted/inserted value already, so we want to
    // make sure it’s not already present before inserting it, in order not to
    // incorrectly duplicate it.
    const unit =
      nextUnitMatch && !chunk.value.endsWith(nextUnitMatch[1])
        ? nextUnitMatch[1]
        : ""

    if (chunk.removed) {
      return (
        <del className={Styles.del}>
          {chunk.value}
          {unit}
        </del>
      )
    }

    if (chunk.added) {
      // Once we reach the insertion part, we can safe remove the unit from the
      // next normal chunk now that it was added to both the deletion (previous
      // pass in the loop) and the insertion (this pass).
      if (nextUnitMatch) {
        array[nextNormalChunkIndex].value = array[
          nextNormalChunkIndex
        ].value.replace(/^[%sm]/, "")
      }

      return (
        <>
          {" → "}
          <ins className={Styles.ins}>
            {chunk.value}
            {unit}
          </ins>
        </>
      )
    }

    // Finally, remove the trailing stars that were broken during the diffing
    // process.
    const value = chunk.value.replace(/^\*/, "").replace(/\*$/, "")

    return microMarkdown(value)
  })
}

const useLocalizedDescription = (skill: Skill) => {
  const { t } = useLocalization()
  const key = `Talent_${skill.id}_Desc`
  const translation = t(key)
  if (!translation) throw new Error(`Could not find description for ${key}`)

  // Replace the coloration variables with stars since this is what our system
  // uses for highlight (could potentially stop doing that and use the colora-
  // tion variables directly)
  let description = translation
    .replace(/<color=[^>]+>/g, "*")
    .replace(/<\/color>/g, "*")

  // For every variable that is defined for the given skill, replace it inside
  // the description
  for (const variableName in skill.variables) {
    const variable = skill.variables[variableName]
    const regex = new RegExp(`{{${variableName}}}`, "g")
    const highlight = (value: string) => `*${value}*`

    // If the type is `raw`, simply inject the given value in place of the
    // variable; replaced values are typically automatically highlighted within
    // the game, but in some cases the highlight is done in the translation in
    // which case we shouldn’t do it twice
    if (variable.type === "raw") {
      description = description.replace(
        regex,
        variable.highlight !== false
          ? highlight(variable.value)
          : variable.value
      )
    }

    // If the type is `translation`, replace the variable with the translation
    // of the given value
    else if (variable.type === "translation") {
      const next = t(variable.value)

      if (!next) {
        throw new Error(`Cannot find translation for key “${variable.value}”`)
      }

      description = description.replace(
        regex,
        variable.highlight !== false ? highlight(next) : next
      )
    }
  }

  // This moves some symbol units (like `%`, `s` or `m` in English, or `с` in
  // Russian) inside of the highlights in instances where they are not
  // (e.g. `*20*%` -> `*20%*`) — this won’t work in all languages though, and
  // some may have non-highlighted units
  description = description.replace(/\*([smс%])/g, "$1*")

  return useDiffedDescription(skill, description)
}

export const SkillInfo: FC<{ skill: Skill }> = ({ skill }) => {
  const { level } = useBuild()
  const mastery = useMastery()
  const { dependsOn, canIncrement } = useSkill(skill)
  const description = useLocalizedDescription(skill)
  const { t, tf } = useLocalization()

  return (
    <>
      <Title Component="h2" size={120}>
        {t(`Talent_${skill.id}_Name`) ?? skill.id}
      </Title>

      <p className={Styles.rank}>
        Rank {skill.current} / {skill.max}
      </p>

      <div className={Styles.description}>{description}</div>

      {canIncrement.permission === "DENIED" ? (
        canIncrement.reason === "MISSING_REQUIREMENT" && dependsOn ? (
          <p className={Styles.dependsOn}>
            {tf(
              "talent_required",
              dependsOn.max - dependsOn.current,
              t(`Talent_${dependsOn.id}_Name`)
            )}
          </p>
        ) : canIncrement.reason === "NOT_ENOUGH_SPENT" ? (
          <p className={Styles.dependsOn}>
            {tf(
              "talent_overall_point_required",
              skill.position[0] * 5 - level,
              t(mastery.key)
            )}
          </p>
        ) : null
      ) : null}

      <Controls skill={skill} className={Styles.controls} />
    </>
  )
}
