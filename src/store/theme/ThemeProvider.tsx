import { ThemeProviderContext } from "./context"
import { useCallback, useMemo } from "react"
import {
  useApplyTheme,
  useControlTheme,
  useKeyboardTheme,
  useSystemTheme,
  useStorageChange,
} from "./hooks"
import type { ThemeProviderProps } from "./types"

export const ThemeProvider = ({
  children,
  defaultTheme = "system",
  storageKey = "theme",
  disableTransitionOnChange = true,
  ...props
}: ThemeProviderProps) => {
  const { setTheme, theme, setThemeState } = useControlTheme({
    defaultTheme,
    storageKey,
  })

  const systemTheme = useSystemTheme()
  useApplyTheme({ systemTheme, theme, disableTransitionOnChange })
  useKeyboardTheme({ setThemeState, storageKey })
  useStorageChange({
    onSetTheme: useCallback((theme) => setThemeState(theme), [setThemeState]),
    defaultTheme,
    storageKey,
  })

  const value = useMemo(
    () => ({ theme: theme === "system" ? systemTheme : theme, setTheme }),
    [theme, setTheme, systemTheme]
  )

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}
