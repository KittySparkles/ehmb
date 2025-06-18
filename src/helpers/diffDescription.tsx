import { diffWords } from "diff"
import type { ComponentType, PropsWithChildren } from "react"
import type { Skill } from "../types"
import { microMarkdown } from "./microMarkdown"
import { resolveDescription } from "./resolveDescription"
import type { Locale } from "../contexts/Localization/config"

export const diffDescription = (
  skill: Skill,
  description: string,
  locale: Locale,
  {
    Del,
    Ins,
  }: {
    Del: ComponentType<PropsWithChildren>
    Ins: ComponentType<PropsWithChildren>
  }
) => {
  const current = resolveDescription(
    description,
    locale,
    skill.max,
    skill.current
  )
  const next = resolveDescription(
    description,
    locale,
    skill.max,
    skill.current + 1
  )

  if (skill.current === skill.max) return microMarkdown(current)
  if (skill.current === 0) return microMarkdown(next)

  const diff = diffWords(current, next, {
    // @ts-expect-error
    intlSegmenter: new Intl.Segmenter("en", { granularity: "word" }),
  })

  if (diff.length === 1) return microMarkdown(current)

  return diff.map((chunk, index, array) => {
    if (chunk.removed) {
      return <Del>{chunk.value}</Del>
    }

    if (chunk.added) {
      return (
        <>
          {" → "}
          <Ins> {chunk.value}</Ins>
        </>
      )
    }

    // Finally, remove the trailing stars that were broken during the diffing
    // process. Unfortunately, we have to account a trailing % sign as well. For
    // instance, if the chunk is `%*.` We check the index to make sure we are
    // not removing a starting star or an ending star (both of which would be
    // intentional)
    let value = chunk.value
    if (index > 0) value = value.replace(/^(%?)\*/, "$1")
    if (index < array.length - 1) value = value.replace(/\*(%?)$/, "$1")

    return microMarkdown(value)
  })
}
