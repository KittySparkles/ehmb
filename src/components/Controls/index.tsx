import type { ComponentProps, FC, PropsWithChildren } from "react"

import { useSkill } from "../../hooks/useSkill"
import { Button } from "../Button"
import type { Skill } from "../../types"
import { ShiftBy } from "../ShiftBy"

import Styles from "./styles.module.css"
import useLongPress from "../../hooks/useLongPress"

export const Controls: FC<
  PropsWithChildren<ComponentProps<"div"> & { skill: Skill }>
> = ({ skill, className, children }) => {
  const {
    increment,
    incrementToMax,
    canIncrement,
    decrement,
    decrementToMin,
    canDecrement,
  } = useSkill(skill)
  const incrementProps = useLongPress({
    onShortPress: increment,
    onLongPress: incrementToMax,
  })
  const decrementProps = useLongPress({
    onShortPress: decrement,
    onLongPress: decrementToMin,
  })
  return (
    <div className={[Styles.controls, className].filter(Boolean).join(" ")}>
      <Button
        className={Styles.button}
        aria-label="Decrement"
        onPressStart={decrementProps.onPressStart}
        onPressEnd={decrementProps.onPressEnd}
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
        onPressStart={incrementProps.onPressStart}
        onPressEnd={incrementProps.onPressEnd}
        isDisabled={canIncrement.permission === "DENIED"}
      >
        <ShiftBy Component="span" y={-1}>
          +
        </ShiftBy>
      </Button>
    </div>
  )
}
