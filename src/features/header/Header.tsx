import type { HeaderProps } from "./types"
import { menuItems } from "./utils"
import {
  Button,
  DropDownMenu,
  DropdownMenuItem,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components"

export const Header = ({ onClick }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 z-3 w-full bg-background px-4 py-4">
      <div className="mx-auto flex max-w-300 items-center justify-between">
        <h1
          className="cursor-pointer text-2xl font-bold"
          data-id="hero"
          onClick={onClick}
        >
          <span className="text-orange-500">&lt; Port</span>
          <span className="">folio /&gt;</span>
        </h1>

        <NavigationMenu className="hidden sm:block">
          <NavigationMenuList>
            {menuItems.map((item) => (
              <NavigationMenuItem key={item} asChild>
                <Button
                  className="cursor-pointer hover:rounded-xs hover:bg-transparent focus:rounded-xs focus:bg-transparent"
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

        <DropDownMenu className="sm:hidden">
          {menuItems.map((item) => (
            <DropdownMenuItem
              key={item}
              className="rounded-xs"
              data-id={item.toLowerCase()}
              onClick={onClick}
            >
              {item}
            </DropdownMenuItem>
          ))}
        </DropDownMenu>
      </div>
    </header>
  )
}
