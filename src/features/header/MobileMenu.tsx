import clsx from "clsx"
import { DropDownMenu, DropdownMenuItem } from "@components"
import { menuItems } from "./utils"
import type { MobileMenuProps } from "./types"

export const MobileMenu = ({ activeItem, onClick }: MobileMenuProps) => {
  return (
    <DropDownMenu className="ml-auto sm:hidden">
      {menuItems.map((item) => (
        <DropdownMenuItem
          key={item}
          className={clsx({
            "rounded-xs focus:text-orange-400": true,
            "text-orange-400": activeItem === item.toLowerCase(),
          })}
          data-id={item.toLowerCase()}
          onClick={onClick}
        >
          {item}
        </DropdownMenuItem>
      ))}
    </DropDownMenu>
  )
}
