import { diffWords } from "diff"
import type { Locale } from "../contexts/Localization/config"
import type { Skill } from "../types"
import { microMarkdown } from "./microMarkdown"
import { enhanceHighlighting } from "./enhanceHighlighting"
import { unpackValue } from "./unpackValue"

export function diffDescription(
  skill: Skill,
  description: string,
  locale: Locale
) {
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
    intlSegmenter: new Intl.Segmenter(locale, { granularity: "word" }),
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
