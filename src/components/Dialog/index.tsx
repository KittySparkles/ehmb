import type {
  ComponentProps,
  FC,
  PropsWithChildren,
  ReactNode,
  RefObject,
} from "react"

import { Box } from "../Box"
import { Title } from "../Title"
import { Button } from "../Button"

import Styles from "./styles.module.css"
import { ShiftBy } from "../ShiftBy"

export type DialogProps = PropsWithChildren<
  ComponentProps<"dialog"> & {
    title: ReactNode
    actions: ReactNode[]
    dialogRef: RefObject<HTMLDialogElement>
  }
>

export const Dialog: FC<DialogProps> = ({
  children,
  title,
  actions,
  dialogRef,
}) => {
  return (
    <Box Component="dialog" ref={dialogRef} className={Styles.dialog}>
      <div className={Styles.header}>
        <Title Component="h2" size={175}>
          {title}
        </Title>
        <Button
          onPress={() => dialogRef.current?.close()}
          className={Styles.close}
        >
          <ShiftBy y={-2} Component="span">
            &times;
          </ShiftBy>
        </Button>
      </div>
      <div className={Styles.content}>{children}</div>
      <div className={Styles.actions}>{actions}</div>
    </Box>
  )
}
