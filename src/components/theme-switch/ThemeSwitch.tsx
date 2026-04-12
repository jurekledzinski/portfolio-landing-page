import clsx from "clsx"
import { Switch } from "../ui"
import { useTheme } from "@/store"
import type { ThemeSwitchProps } from "./types"

export const ThemeSwitch = ({
  thumbIconChecked,
  thumbIconUnchecked,
}: ThemeSwitchProps) => {
  const { setTheme, theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <Switch
      checked={isDark}
      childrenThumb={isDark ? thumbIconChecked : thumbIconUnchecked}
      className={clsx({
        "cursor-pointer sm:ml-2.5 data-checked:bg-blue-950 data-unchecked:bg-accent": true,
      })}
      classNameThumb={clsx({
        "bg-white flex items-center justify-center": true,
        "text-orange-300!": !isDark,
        "text-yellow-300": isDark,
      })}
      onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
    />
  )
}
