import type { FC } from "react"

import { BuildProvider } from "../../contexts/Build/Provider"
import { MasteryProvider } from "../../contexts/Mastery/Provider"
import { Header } from "../Header"
import { Grid } from "../Grid"
import { Container } from "../Container"
import { FAQ } from "../FAQ"
import { Footer } from "../Footer"
import type { MasteryType } from "../../types"
import { BookmarksProvider } from "../../contexts/Bookmarks/Provider"
import { Bookmarks } from "../Bookmarks"

export const App: FC<{ masteryType: MasteryType }> = ({ masteryType }) => (
  <BookmarksProvider>
    <MasteryProvider masteryType={masteryType}>
      <BuildProvider>
        <Header />
        <Container>
          <Grid />
          <Bookmarks />
          <FAQ />
        </Container>
        <Footer />
      </BuildProvider>
    </MasteryProvider>
  </BookmarksProvider>
)
