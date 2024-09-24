import { useMemo } from "react"

import { useBuild } from "../../contexts/Build/Provider"
import { MASTERIES } from "../../schema/data"
import { Header } from "../Header"
import { Grid } from "../Grid"
import { Container } from "../Container"
import { FAQ } from "../FAQ"
import { Footer } from "../Footer"

export const App = () => {
  const { level, masteryType } = useBuild()

  const mastery = useMemo(
    () => MASTERIES.find((mastery) => mastery.id === masteryType),
    [masteryType]
  )

  if (!mastery) {
    throw new Error(`Could not find mastery for type ${masteryType}`)
  }

  return (
    <>
      <Header />
      <Container>
        <Grid name={mastery.name} level={level} />
        <FAQ />
      </Container>
      <Footer />
    </>
  )
}
