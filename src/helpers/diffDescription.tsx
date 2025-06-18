import { diffWords } from "diff"
import type { ComponentType, PropsWithChildren } from "react"
import type { Skill } from "../types"
import { microMarkdown } from "./microMarkdown"
import { resolveDescription } from "./resolveDescription"

export const diffDescription = (
  skill: Skill,
  description: string,
  {
    Del,
    Ins,
  }: {
    Del: ComponentType<PropsWithChildren>
    Ins: ComponentType<PropsWithChildren>
  }
) => {
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
    const nextNormalChunkIndex = array.findIndex(
      (node, i) => i > index && !node.added && !node.removed
    )

    // If it begins with a % sign or the letter s (for “second”) or m (for
    // “meter”) followed by a space or a star (i.e. `%*`, `% `, `s*`, `s `, `m*`
    // or `m `), it’s considered a unit and should be removed from its current
    // place and attached to both the deletion and the insertion.
    const nextUnitMatch =
      array[nextNormalChunkIndex]?.value.match(/^([%smс])[\s*]/)

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
        <Del>
          {chunk.value}
          {unit}
        </Del>
      )
    }

    if (chunk.added) {
      // Once we reach the insertion part, we can safe remove the unit from the
      // next normal chunk now that it was added to both the deletion (previous
      // pass in the loop) and the insertion (this pass).
      if (nextUnitMatch) {
        array[nextNormalChunkIndex].value = array[
          nextNormalChunkIndex
        ].value.replace(/^[%smс]/, "")
      }

      return (
        <>
          {" → "}
          <Ins>
            {" "}
            {chunk.value}
            {unit}
          </Ins>
        </>
      )
    }

    // Finally, remove the trailing stars that were broken during the diffing
    // process.
    const value = chunk.value.replace(/^\*/, "").replace(/\*$/, "")

    return microMarkdown(value)
  })
}
