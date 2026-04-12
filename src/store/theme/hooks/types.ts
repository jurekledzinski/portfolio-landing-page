import type { Theme } from "../types"

export type UseControlThemeProps = {
  defaultTheme?: Theme
  storageKey?: string
}

export type useApplyThemeProps = {
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
