import type { FC } from "react"

import type { Skill } from "../../types"
import { useLocalization } from "../../contexts/Localization/Provider"
import { useMastery } from "../../contexts/Mastery/Provider"
import { useBuild } from "../../contexts/Build/Provider"
import { useSkill } from "../../hooks/useSkill"
import { diffDescription } from "../../helpers/diffDescription"
import { Title } from "../Title"
import { Controls } from "../Controls"

import Styles from "./styles.module.css"

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

  return diffDescription(skill, description, {
    Del: ({ children }) => <del className={Styles.del}>{children}</del>,
    Ins: ({ children }) => <ins className={Styles.ins}>{children}</ins>,
  })
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
        {t("talent_rank")} {skill.current} / {skill.max}
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
