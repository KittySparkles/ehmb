import {
  Button as RButton,
  MenuTrigger,
  Popover,
  Menu,
  MenuItem,
} from "react-aria-components"
import { useLocation } from "react-router-dom"

import { SUPPORTED_LOCALES } from "../../contexts/Localization/config"
import { ShiftBy } from "../ShiftBy"
import { boxStyles } from "../Box"

import Styles from "./styles.module.css"

export const LocalizationMenu = () => {
  const { pathname, search } = useLocation()

  return (
    <MenuTrigger>
      <RButton aria-label="Menu" className={Styles.button}>
        <ShiftBy Component="span" y={-1.5}>
          🌐
        </ShiftBy>{" "}
        <span className={Styles.label}>Language</span>
      </RButton>
      <Popover className={Styles.popover} placement="bottom end">
        <Menu className={[Styles.menu, boxStyles].join(" ")}>
          {SUPPORTED_LOCALES.map((locale) => (
            <MenuItem
              className={[
                Styles.item,
                search.includes(`locale=${locale.locale}`),
              ]
                .filter(Boolean)
                .join(" ")}
              key={locale.locale}
              href={`${pathname}?locale=${locale.locale}`}
            >
              {locale.name}
            </MenuItem>
          ))}
        </Menu>
      </Popover>
    </MenuTrigger>
  )
}
