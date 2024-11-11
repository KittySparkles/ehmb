import type { FC } from "react"
import { RouterProvider } from "react-aria-components"
import { useHref, useNavigate } from "react-router-dom"

import { BuildProvider } from "../../contexts/Build/Provider"
import { MasteryProvider } from "../../contexts/Mastery/Provider"
import { Header } from "../Header"
import { Grid } from "../Grid"
import { Container } from "../Container"
import { Footer } from "../Footer"
import { RecommendedBuilds } from "../RecommendedBuilds"
import type { MasteryType } from "../../types"
import { BookmarksProvider } from "../../contexts/Bookmarks/Provider"

export const App: FC<{ masteryType: MasteryType }> = ({ masteryType }) => {
  const navigate = useNavigate()

  return (
    <RouterProvider navigate={navigate} useHref={useHref}>
      <BookmarksProvider>
        <MasteryProvider masteryType={masteryType}>
          <BuildProvider>
            <Header />
            <Container>
              <Grid />
              <RecommendedBuilds />
            </Container>
            <Footer />
          </BuildProvider>
        </MasteryProvider>
      </BookmarksProvider>
    </RouterProvider>
  )
}
