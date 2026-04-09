import { App } from "./App.tsx"
import { createRoot } from "react-dom/client"
import { StrictMode } from "react"
import { ThemeProvider } from "@/store/theme/theme-provider.tsx"
import "./index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
)
