import { getSystemTheme, isEditableTarget } from "../utils"
import { useCallback, useEffect } from "react"
import type { UseKeyboardThemeProps } from "./types"

export const useKeyboardTheme = ({
  storageKey = "theme",
  setThemeState,
}: UseKeyboardThemeProps) => {
  const handleSetTheme = useCallback(() => {
    setThemeState((currentTheme) => {
      const nextTheme =
        currentTheme === "dark"
          ? "light"
          : currentTheme === "light"
            ? "dark"
            : getSystemTheme() === "dark"
              ? "light"
              : "dark"

      localStorage.setItem(storageKey, nextTheme)
      return nextTheme
    })
  }, [setThemeState, storageKey])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.repeat) return

      if (event.metaKey || event.ctrlKey || event.altKey) return

      if (isEditableTarget(event.target)) return

      if (event.key.toLowerCase() !== "d") return

      handleSetTheme()
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleSetTheme, storageKey])
}
