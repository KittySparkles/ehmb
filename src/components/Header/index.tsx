import { useNavigate } from "react-router-dom"

import { MASTERIES } from "../../schema/data"
import { useMastery } from "../../contexts/Mastery/Provider"
import { Select, SelectOption } from "../Select"
import { Title } from "../Title"

import Styles from "./styles.module.css"

export const Header = () => {
  const mastery = useMastery()
  const navigate = useNavigate()

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
          <Select
            label="Mastery"
            selectedKey={mastery.slug}
            onSelectionChange={(selected) => navigate(`/${selected}`)}
            items={MASTERIES.map((mastery) => ({
              ...mastery,
              id: mastery.slug,
            }))}
          >
            {(item) => <SelectOption>{item.name}</SelectOption>}
          </Select>
        </div>
      </header>
    </>
  )
}
