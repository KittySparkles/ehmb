import { useBuild } from "../../contexts/Build/Provider"
import { useMastery } from "../../contexts/Mastery/Provider"
import type { Skill } from "../../types"
import { Tile } from "../Tile"
import { Title } from "../Title"
import { BuildMenu } from "../BuildMenu"

import Styles from "./styles.module.css"
import { useLocalization } from "../../contexts/Localization/Provider"

export const Grid = () => {
  const mastery = useMastery()
  const { level, build } = useBuild()
  const { t } = useLocalization()
  const masteryName = t(mastery.key)

  return (
    <>
      <div className={Styles.header}>
        <Title Component="h2" size={200} className={Styles.name}>
          {masteryName}
        </Title>
        <p className={Styles.level}>
          Level:{" "}
          <span style={{ color: `rgb(${360 - level * 6}, ${level * 6}, 0)` }}>
            {level}
          </span>
        </p>
        <BuildMenu />
      </div>
      <table className={Styles.table}>
        <tbody>
          {range(8).map((_, ri) => (
            <tr
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={`row-${ri}`}
              className={Styles.row}
            >
              {range(4).map((_, ci) => {
                const skill = build.find(findByPosition(ri, ci))

                return (
                  <Tile
                    key={skill?.id ?? ci}
                    skill={skill}
                    position={[ri, ci]}
                  />
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

function range(n: number) {
  return [...Array(n).keys()]
}

function findByPosition(ri: number, ci: number) {
  return ({ position }: Skill) => position[0] === ri && position[1] === ci
}
