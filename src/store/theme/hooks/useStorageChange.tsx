import { isTheme } from "../utils"
import { useEffect } from "react"
import type { UseStorageChangeProps } from "./types"

export const useStorageChange = ({
  onSetTheme,
  defaultTheme = "system",
  storageKey = "theme",
}: UseStorageChangeProps) => {
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.storageArea !== localStorage) return
      if (event.key !== storageKey) return
      if (isTheme(event.newValue)) return onSetTheme(event.newValue)
      onSetTheme(defaultTheme)
    }

    window.addEventListener("storage", handleStorageChange)

    return () => window.removeEventListener("storage", handleStorageChange)
  }, [defaultTheme, storageKey, onSetTheme])
}
