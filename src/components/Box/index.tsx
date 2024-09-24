import {
  forwardRef,
  type ComponentProps,
  type ElementType,
  type PropsWithChildren,
} from "react"

import Styles from "./styles.module.css"

export type BoxProps = PropsWithChildren<
  ComponentProps<"div"> & { Component?: ElementType }
>

export const boxStyles = Styles.box
export const Box = forwardRef<HTMLElement, BoxProps>(
  ({ children, className, Component = "div" }, ref) => {
    return (
      <Component
        ref={ref}
        className={[Styles.box, className].filter(Boolean).join(" ")}
      >
        {children}
      </Component>
    )
  }
)
