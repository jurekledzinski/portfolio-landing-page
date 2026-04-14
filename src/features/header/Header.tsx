import { Moon, Sun } from "lucide-react"
import { ThemeSwitch } from "@components"
import type { HeaderProps } from "./types"

export const Header = ({ children }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 z-3 w-full bg-background px-4 py-4">
      <div className="mx-auto flex max-w-300 items-center">
        {children}
        <ThemeSwitch
          thumbIconChecked={<Moon className="h-4 w-4" />}
          thumbIconUnchecked={<Sun className="h-4 w-4" />}
        />
      </div>
    </header>
  )
}
