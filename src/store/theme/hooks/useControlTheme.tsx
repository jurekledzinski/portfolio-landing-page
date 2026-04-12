import { isTheme } from "../utils"
import { useCallback, useState } from "react"
import type { Theme } from "../types"
import type { UseControlThemeProps } from "./types"

export const useControlTheme = ({
  defaultTheme = "system",
  storageKey = "theme",
}: UseControlThemeProps) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem(storageKey)

    if (isTheme(storedTheme)) return storedTheme

    return defaultTheme
  })

  const setTheme = useCallback(
    (nextTheme: Theme) => {
      localStorage.setItem(storageKey, nextTheme)
      setThemeState(nextTheme)
    },
    [storageKey]
  )

  return { theme, setTheme, setThemeState }
}
