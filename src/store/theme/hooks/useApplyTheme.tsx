import { disableTransitionsTemporarily } from "../utils"
import { useCallback, useEffect } from "react"
import type { ResolvedTheme, Theme } from "../types"
import type { useApplyThemeProps } from "./types"

export const useApplyTheme = ({
  disableTransitionOnChange,
  systemTheme,
  theme,
}: useApplyThemeProps) => {
  const applyClassNameThemeHtml = (theme: ResolvedTheme) => {
    const root = document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(theme)
  }

  const applyTheme = useCallback(
    (nextTheme: Theme) => {
      const newTheme = nextTheme === "system" ? systemTheme : nextTheme
      const restoreTransitions = disableTransitionOnChange
        ? disableTransitionsTemporarily()
        : null

      applyClassNameThemeHtml(newTheme)

      if (restoreTransitions) restoreTransitions()
    },
    [disableTransitionOnChange, systemTheme]
  )

  useEffect(() => applyTheme(theme), [theme, applyTheme])
}
