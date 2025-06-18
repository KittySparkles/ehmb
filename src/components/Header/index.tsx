import { Title } from "../Title"

import Styles from "./styles.module.css"
import { NavigationMenu } from "../NavigationMenu"
import { LocalizationMenu } from "../LocalizationMenu"

export const Header = () => {
  return (
    <>
      <header className={Styles.header}>
        <div className={Styles.left}>
          <img
            className={Styles.logo}
            src="/eh_icon.png"
            alt="Eternal Hero app icon"
          />
          <Title Component="h1" className={Styles.title} size={150}>
            <span className={Styles.highlight}>E</span>
            <span className={Styles.extra}>ternal</span>{" "}
            <span className={Styles.highlight}>H</span>
            <span className={Styles.extra}>ero</span>{" "}
            <span className={Styles.highlight}>M</span>
            <span className={Styles.extra}>astery</span>{" "}
            <span className={Styles.highlight}>B</span>
            <span className={Styles.extra}>uilder</span>
          </Title>
        </div>
        <div className={Styles.right}>
          <LocalizationMenu />
          <NavigationMenu />
        </div>
      </header>
    </>
  )
}
