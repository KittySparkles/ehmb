import type { FC } from "react"
import { diffWords } from "diff"

import type { Skill } from "../../types"
import { resolveDescription } from "../../helpers/resolveDescription"
import { microMarkdown } from "../../helpers/microMarkdown"
import { useBuild } from "../../contexts/Build/Provider"
import { useSkill } from "../../hooks/useSkill"
import { Title } from "../Title"
import { Controls } from "../Controls"

import Styles from "./styles.module.css"
import { TRANSLATIONS } from "../../schema/data"

const useDiffedDescription = (skill: Skill) => {
  if (!("description" in skill)) return ""
  const current = resolveDescription(skill, skill.current)
  const next = resolveDescription(skill, skill.current + 1)

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
  const diffedDescription = useDiffedDescription(skill)
  if (!("variables" in skill)) return diffedDescription

  let description = (TRANSLATIONS.get(`Talent_${skill.id}_Desc`)?.en ?? "")
    .replace(/<color=green>/g, "*")
    .replace(/<\/color>/g, "*")

  for (const variableName in skill.variables) {
    const variable = skill.variables[variableName]
    if (variable.type === "raw")
      description = description.replace(
        `{{${variableName}}}`,
        variable.highlight !== false ? `*${variable.value}*` : variable.value
      )
    else if (variable.type === "translation") {
      const next = TRANSLATIONS.get(variable.value)?.en
      if (next)
        description = description.replace(
          `{{${variableName}}}`,
          variable.highlight !== false ? `*${next}*` : next
        )
    }
  }

  description = description.replace(/\*([%sm])/g, "$1*")
  console.log(description)

  return useDiffedDescription({ ...skill, description })
}

export const SkillInfo: FC<{ skill: Skill }> = ({ skill }) => {
  const { level } = useBuild()
  const { dependsOn, canIncrement } = useSkill(skill)
  const description = useLocalizedDescription(skill)

  return (
    <>
      <Title Component="h2" size={120}>
        {TRANSLATIONS.get(`Talent_${skill.id}_Name`)?.en ?? skill.id}
      </Title>

      <p className={Styles.rank}>
        Rank {skill.current} / {skill.max}
      </p>

      <div className={Styles.description}>{description}</div>

      {canIncrement.permission === "DENIED" ? (
        canIncrement.reason === "MISSING_REQUIREMENT" && dependsOn ? (
          <p className={Styles.dependsOn}>
            Requires {dependsOn.max - dependsOn.current} more point
            {dependsOn.max - dependsOn.current !== 1 ? "s" : ""} in the “
            {TRANSLATIONS.get(`Talent_${dependsOn.id}_Name`)?.en ??
              dependsOn.id}
            ” talent.
          </p>
        ) : canIncrement.reason === "NOT_ENOUGH_SPENT" ? (
          <p className={Styles.dependsOn}>
            Requires {skill.position[0] * 5 - level} more point
            {skill.position[0] * 5 - level !== 1 ? "s" : ""} in the mastery
            tree.
          </p>
        ) : null
      ) : null}

      <Controls skill={skill} className={Styles.controls} />
    </>
  )
}
