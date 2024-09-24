import type { FC, ReactNode } from "react"
import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select as RSelect,
  SelectValue,
  type ListBoxItemProps,
  type SelectProps,
} from "react-aria-components"

import { boxStyles } from "../Box"

import Styles from "./styles.module.css"

interface Props<T extends object> extends Omit<SelectProps<T>, "children"> {
  label?: string
  items?: Iterable<T>
  children: ReactNode | ((item: T) => ReactNode)
}

export function Select<T extends object>({
  label,
  items,
  children,
  ...props
}: Props<T>) {
  return (
    <RSelect {...props} className={Styles.select}>
      <Label className={Styles.label}>{label}</Label>
      <Button className={Styles.toggle}>
        <SelectValue className={Styles.value} />
        <span className={Styles.arrow} aria-hidden="true">
          ▼
        </span>
      </Button>
      <Popover className={[Styles.popover, boxStyles].join(" ")}>
        <ListBox items={items} className={Styles.listBox}>
          {children}
        </ListBox>
      </Popover>
    </RSelect>
  )
}

export const SelectOption: FC<ListBoxItemProps> = (props) => (
  <ListBoxItem {...props} className={Styles.listItem} />
)
