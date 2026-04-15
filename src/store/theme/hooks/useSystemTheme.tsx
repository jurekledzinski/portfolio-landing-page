import { COLOR_SCHEME_QUERY, getSystemTheme } from "../utils"
import { useEffect, useState } from "react"

export const useSystemTheme = () => {
  const [systemTheme, setSystemTheme] = useState(getSystemTheme)

  useEffect(() => {
    const media = window.matchMedia(COLOR_SCHEME_QUERY)

    const handler = () => setSystemTheme(getSystemTheme())

    media.addEventListener("change", handler)
    return () => media.removeEventListener("change", handler)
  }, [])

  return systemTheme
}
