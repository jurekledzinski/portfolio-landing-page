import { App } from "./App.tsx"
import { createRoot } from "react-dom/client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { StrictMode } from "react"
import { ThemeProvider } from "@store"
import { Toaster } from "react-hot-toast"
import "./index.css"

const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Toaster
          position="top-left"
          toastOptions={{
            duration: 2000,
            style: {
              borderRadius: 2,
            },
          }}
        />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
)
