import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { App } from "./components/App/index.tsx"
import { BuildProvider } from "./contexts/Build/Provider.tsx"

import "./index.css"
import "@fontsource/londrina-solid"

// biome-ignore lint/style/noNonNullAssertion: safe
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BuildProvider>
      <App />
    </BuildProvider>
  </StrictMode>
)
