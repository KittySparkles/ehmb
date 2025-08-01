import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import {
  createBrowserRouter,
  Navigate,
  type NavigateOptions,
  RouterProvider,
} from "react-router-dom"

import { dehashData, legacy_dehashData } from "./helpers/hash.ts"
import { mapSchema } from "./helpers/mapSchema.ts"
import { App } from "./components/App/index.tsx"
import { FAQPage } from "./components/FAQ/index.tsx"
import { BookmarksPage } from "./components/Bookmarks/index.tsx"
import { ThornvyrSimulator } from "./components/ThornvyrSimulator/index.tsx"
import { MASTERIES } from "./schema/data.ts"

import "./index.css"
import "@fontsource/londrina-solid"

declare module "react-aria-components" {
  interface RouterConfig {
    routerOptions: NavigateOptions
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={`/${MASTERIES[0].slug}`} />,
  },
  {
    path: "/faq",
    element: <FAQPage />,
  },
  {
    path: "/bookmarks",
    element: <BookmarksPage />,
  },
  ...MASTERIES.map((mastery) => ({
    path: `/${mastery.slug}/:hash?`,
    element: <App masteryType={mastery.id} />,
    loader: ({ params }: { params: { hash?: string } }) => {
      try {
        if (params.hash && /^\w{2}\d+$/.test(params.hash)) {
          return { build: legacy_dehashData(params.hash ?? "").build }
        }

        return { build: dehashData(params.hash ?? "").build }
      } catch {
        return { build: mapSchema(mastery.schema) }
      }
    },
  })),
  {
    path: "/thornvyr",
    element: <ThornvyrSimulator />,
  },
])

// biome-ignore lint/style/noNonNullAssertion: safe
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
