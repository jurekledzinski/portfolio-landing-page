import { useCallback, useEffect } from "react"
import type { Theme } from "../types"
import type { useApplyThemeProps } from "./types"
import {
  COLOR_SCHEME_QUERY,
  disableTransitionsTemporarily,
  getSystemTheme,
} from "../utils"

export const useApplyTheme = ({
  disableTransitionOnChange,
  theme,
}: useApplyThemeProps) => {
  const applyTheme = useCallback(
    (nextTheme: Theme) => {
      const root = document.documentElement
      const resolvedTheme =
        nextTheme === "system" ? getSystemTheme() : nextTheme
      const restoreTransitions = disableTransitionOnChange
        ? disableTransitionsTemporarily()
        : null

      root.classList.remove("light", "dark")
      root.classList.add(resolvedTheme)

      if (restoreTransitions) restoreTransitions()
    },
    [disableTransitionOnChange]
  )

  useEffect(() => {
    applyTheme(theme)

    if (theme !== "system") return undefined

    const mediaQuery = window.matchMedia(COLOR_SCHEME_QUERY)

    const handleChange = () => applyTheme("system")
    mediaQuery.addEventListener("change", handleChange)

    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [theme, applyTheme])
}
