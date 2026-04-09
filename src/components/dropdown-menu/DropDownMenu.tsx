import { MenuIcon } from "lucide-react"
import type { DropDownMenuProps } from "./types"
import {
  Button,
  BaseDropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components"

export const DropDownMenu = ({ children, className }: DropDownMenuProps) => {
  return (
    <BaseDropdownMenu>
      <DropdownMenuTrigger className={className} asChild>
        <Button
          className="hover:rounded-xs focus:rounded-xs aria-expanded:rounded-xs"
          variant="ghost"
        >
          <MenuIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="rounded-xs">
        {children}
      </DropdownMenuContent>
    </BaseDropdownMenu>
  )
}
