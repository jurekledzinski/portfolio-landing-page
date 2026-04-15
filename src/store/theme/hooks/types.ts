import type { ResolvedTheme, Theme } from "../types"

export type UseControlThemeProps = {
  defaultTheme?: Theme
  storageKey?: string
}

export type useApplyThemeProps = {
  systemTheme: ResolvedTheme
  theme: Theme
  disableTransitionOnChange?: boolean
}

export type UseKeyboardThemeProps = {
  setThemeState: React.Dispatch<React.SetStateAction<Theme>>
  storageKey?: string
}

export type UseStorageChangeProps = {
  onSetTheme: (theme: Theme) => void
  defaultTheme?: Theme
  storageKey?: string
}
