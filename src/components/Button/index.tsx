import type { FC } from "react"
import { Button as RButton, type ButtonProps } from "react-aria-components"

import Styles from "./styles.module.css"

export const buttonStyles = Styles.button
export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <RButton
      {...props}
      className={[Styles.button, props.className].filter(Boolean).join(" ")}
    >
      {children}
    </RButton>
  )
}
