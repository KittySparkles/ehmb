import type { ComponentProps, FC, PropsWithChildren } from "react"

import Styles from "./styles.module.css"

export const Title: FC<
  PropsWithChildren &
    ComponentProps<"h1"> & {
      Component: "h1" | "h2" | "h3" | "span"
      size?: number
    }
> = ({ children, className, Component, size, ...rest }) => {
  return (
    <Component
      {...rest}
      style={{ fontSize: size ? `${size}%` : undefined }}
      className={[Styles.title, className].filter(Boolean).join(" ")}
    >
      {children}
    </Component>
  )
}
