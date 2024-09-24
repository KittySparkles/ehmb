import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import {
  createBrowserRouter,
  Navigate,
  type NavigateOptions,
  RouterProvider,
} from "react-router-dom"

import { dehashData } from "./helpers/hash.ts"
import { mapSchema } from "./helpers/mapSchema.ts"
import { App } from "./components/App/index.tsx"
import { FAQPage } from "./components/FAQ/index.tsx"
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
  ...MASTERIES.map((mastery) => ({
    path: `/${mastery.slug}/:hash?`,
    element: <App masteryType={mastery.id} />,
    loader: ({ params }: { params: { hash?: string } }) => {
      try {
        return { build: dehashData(params.hash ?? "").build }
      } catch {
        return { build: mapSchema(mastery.schema) }
      }
    },
  })),
])

// biome-ignore lint/style/noNonNullAssertion: safe
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
