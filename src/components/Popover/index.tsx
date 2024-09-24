import type { FC, PropsWithChildren, ReactNode } from "react"
import {
  type PopoverProps,
  Popover as RPopover,
  Dialog,
  DialogTrigger,
} from "react-aria-components"

import { Box } from "../Box"

import "./styles.css"

export const Popover: FC<
  PropsWithChildren<PopoverProps & { control: ReactNode }>
> = ({ children, control, ...props }) => {
  return (
    <DialogTrigger>
      {control}
      <RPopover {...props} offset={0}>
        <Dialog>
          <Box>{children}</Box>
        </Dialog>
      </RPopover>
    </DialogTrigger>
  )
}
