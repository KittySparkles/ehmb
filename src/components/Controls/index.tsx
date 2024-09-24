import type { ComponentProps, FC, PropsWithChildren } from "react"

import { useSkill } from "../../hooks/useSkill"
import { Button } from "../Button"
import type { Skill } from "../../types"
import { ShiftBy } from "../ShiftBy"

import Styles from "./styles.module.css"

export const Controls: FC<
  PropsWithChildren<ComponentProps<"div"> & { skill: Skill }>
> = ({ skill, className, children }) => {
  const { increment, canIncrement, decrement, canDecrement } = useSkill(skill)

  return (
    <div className={[Styles.controls, className].filter(Boolean).join(" ")}>
      <Button
        className={Styles.button}
        aria-label="Decrement"
        onPress={decrement}
        isDisabled={canDecrement.permission === "DENIED"}
      >
        <ShiftBy Component="span" y={-1}>
          -
        </ShiftBy>
      </Button>
      {children}
      <Button
        className={Styles.button}
        aria-label="Increment"
        onPress={increment}
        isDisabled={canIncrement.permission === "DENIED"}
      >
        <ShiftBy Component="span" y={-1}>
          +
        </ShiftBy>
      </Button>
    </div>
  )
}
