import type { FC } from "react"
import { Button as RButton } from "react-aria-components"

import type { Skill } from "../../types"
import { Popover } from "../Popover"
import { useSkill } from "../../hooks/useSkill"
import { SkillInfo } from "../SkillInfo"
import { Title } from "../Title"
import { Controls } from "../Controls"

import Styles from "./styles.module.css"
import { TALENTS } from "../../schema/data"

export const Tile: FC<{ skill?: Skill; position: Skill["position"] }> = ({
  skill,
  position,
}) => {
  const { dependencyOf, dependsOn, state } = useSkill(skill, position)

  if (!skill) {
    return (
      <td
        className={Styles.tile}
        data-type={state.type}
        data-status={state.status}
      >
        <div className={Styles.inner} />
      </td>
    )
  }

  return (
    <td
      className={Styles.tile}
      data-requires={!!dependsOn}
      data-required={!!dependencyOf}
      data-type={state.type}
      data-status={state.status}
    >
      <div className={Styles.inner}>
        <p className={Styles.name}>
          {skill.description && (
            <Popover
              control={
                <RButton className={Styles.toggle}>
                  <Title Component="span">
                    {TALENTS.get(`Talent_${skill.id}_Name`)?.en ?? skill.id}
                  </Title>
                  <span className={Styles.help}>ⓘ</span>
                </RButton>
              }
            >
              <SkillInfo skill={skill} />
            </Popover>
          )}
        </p>
        <Controls skill={skill} className={Styles.controls}>
          <span className={Styles.rank}>
            {skill.current} <span className={Styles.max}>/ {skill.max}</span>
          </span>
        </Controls>
      </div>
    </td>
  )
}
