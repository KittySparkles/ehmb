import {
  Button as RButton,
  MenuTrigger,
  Popover,
  Menu,
  MenuItem,
  Section,
  Header,
} from "react-aria-components"
import { useLocation } from "react-router-dom"

import { ShiftBy } from "../ShiftBy"
import { boxStyles } from "../Box"
import { MASTERIES } from "../../schema/data"

import Styles from "./styles.module.css"

export const NavigationMenu = () => {
  const { pathname, search } = useLocation()

  return (
    <MenuTrigger>
      <RButton aria-label="Menu" className={Styles.button}>
        <ShiftBy Component="span" y={-1.5}>
          ☰
        </ShiftBy>{" "}
        Menu
      </RButton>
      <Popover className={Styles.popover} placement="bottom end">
        <Menu className={[Styles.menu, boxStyles].join(" ")}>
          <Section className={Styles.section}>
            <Header className={Styles.header}>Masteries</Header>
            {MASTERIES.map((mastery) => (
              <MenuItem
                className={[
                  Styles.item,
                  mastery.slug === pathname.slice(1) && Styles.itemActive,
                ]
                  .filter(Boolean)
                  .join(" ")}
                key={mastery.id}
                href={`/${mastery.slug}${search}`}
              >
                {mastery.name}
              </MenuItem>
            ))}
          </Section>

          <Section className={Styles.section}>
            <Header className={Styles.header}>Pages</Header>
            <MenuItem
              className={[
                Styles.item,
                pathname === "/bookmarks" && Styles.itemActive,
              ]
                .filter(Boolean)
                .join(" ")}
              href="/bookmarks"
            >
              Bookmarks
            </MenuItem>
            <MenuItem
              className={[Styles.item, pathname === "/faq" && Styles.itemActive]
                .filter(Boolean)
                .join(" ")}
              href="/faq"
            >
              FAQ
            </MenuItem>
          </Section>
        </Menu>
      </Popover>
    </MenuTrigger>
  )
}
