import type { ComponentProps, FC, PropsWithChildren } from "react"

import Styles from "./styles.module.css"

export const Container: FC<PropsWithChildren & ComponentProps<"div">> = ({
  children,
  className,
}) => {
  return (
    <div className={[Styles.page, className].filter(Boolean).join(" ")}>
      {children}
    </div>
  )
}
