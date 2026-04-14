import clsx from "clsx"
import { menuItems } from "./utils"
import type { DesktopMenuProps } from "./types"
import {
  Button,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@components"

export const DesktopMenu = ({ activeItem, onClick }: DesktopMenuProps) => {
  return (
    <NavigationMenu className="ml-auto hidden sm:block">
      <NavigationMenuList>
        {menuItems.map((item) => (
          <NavigationMenuItem key={item} asChild>
            <Button
              className={clsx({
                "cursor-pointer hover:rounded-xs hover:bg-transparent focus:rounded-xs focus:bg-transparent": true,
                "text-orange-400 hover:text-orange-400":
                  activeItem === item.toLowerCase(),
              })}
              data-id={item.toLowerCase()}
              onClick={onClick}
              variant="ghost"
            >
              {item}
            </Button>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
