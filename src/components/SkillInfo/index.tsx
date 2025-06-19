import type { FC } from "react"

import type { Skill } from "../../types"
import { useLocalization } from "../../contexts/Localization/Provider"
import { useMastery } from "../../contexts/Mastery/Provider"
import { useBuild } from "../../contexts/Build/Provider"
import { useSkillDescription } from "../../hooks/useSkillDescription"
import { useSkill } from "../../hooks/useSkill"
import { Title } from "../Title"
import { Controls } from "../Controls"

import Styles from "./styles.module.css"

export const SkillInfo: FC<{ skill: Skill }> = ({ skill }) => {
  const { level } = useBuild()
  const mastery = useMastery()
  const { dependsOn, canIncrement } = useSkill(skill)
  const description = useSkillDescription(skill)
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
