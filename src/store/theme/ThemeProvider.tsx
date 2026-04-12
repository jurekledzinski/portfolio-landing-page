import { ThemeProviderContext } from "./context"
import { useApplyTheme } from "./hooks/useApplyTheme"
import { useCallback, useMemo } from "react"
import { useControlTheme } from "./hooks/useControlTheme"
import { useKeyboardTheme } from "./hooks/useKeyboardTheme"
import { useStorageChange } from "./hooks/useStorageChange"
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
  useApplyTheme({ theme, disableTransitionOnChange })
  useKeyboardTheme({ setThemeState, storageKey })
  useStorageChange({
    onSetTheme: useCallback((theme) => setThemeState(theme), [setThemeState]),
    defaultTheme,
    storageKey,
  })

  const value = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme, setTheme]
  )

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}
