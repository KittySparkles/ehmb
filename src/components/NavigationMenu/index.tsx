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

import { useLocalization } from "../../contexts/Localization/Provider"
import { ShiftBy } from "../ShiftBy"
import { boxStyles } from "../Box"
import { MASTERIES } from "../../schema/data"

import Styles from "./styles.module.css"

export const NavigationMenu = () => {
  const { pathname, search } = useLocation()
  const { t } = useLocalization()

  return (
    <MenuTrigger>
      <RButton aria-label="Menu" className={Styles.button}>
        <ShiftBy Component="span" y={-1.5}>
          <span className={Styles.icon}>☰</span>
        </ShiftBy>{" "}
        <span className={Styles.label}>Menu</span>
      </RButton>
      <Popover className={Styles.popover} placement="bottom end">
        <Menu className={[Styles.menu, boxStyles].join(" ")}>
          <Section className={Styles.section}>
            <Header className={Styles.header}>{t("all_masteries")}</Header>
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
                {t(mastery.key)}
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
