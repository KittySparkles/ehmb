import type { FC } from "react"
import { RouterProvider } from "react-aria-components"
import { useHref, useNavigate } from "react-router-dom"

import { BuildProvider } from "../../contexts/Build/Provider"
import { MasteryProvider } from "../../contexts/Mastery/Provider"
import { BookmarksProvider } from "../../contexts/Bookmarks/Provider"
import { LocalizationProvider } from "../../contexts/Localization/Provider"
import { Header } from "../Header"
import { Grid } from "../Grid"
import { Container } from "../Container"
import { Footer } from "../Footer"
import { RecommendedBuilds } from "../RecommendedBuilds"
import type { MasteryType } from "../../types"

export const App: FC<{ masteryType: MasteryType }> = ({ masteryType }) => {
  const navigate = useNavigate()

  return (
    <RouterProvider navigate={navigate} useHref={useHref}>
      <LocalizationProvider>
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
      </LocalizationProvider>
    </RouterProvider>
  )
}
