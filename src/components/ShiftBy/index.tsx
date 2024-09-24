import type { FC, PropsWithChildren } from "react"

export const ShiftBy: FC<
  PropsWithChildren<{ x?: number; y?: number; Component: "span" | "div" }>
> = ({ x = 0, y = 0, Component = "div", children }) => {
  return (
    <Component
      style={{
        transform: `translate(${x}px, ${y}px)`,
        display: Component === "span" ? "inline-block" : undefined,
      }}
    >
      {children}
    </Component>
  )
}
