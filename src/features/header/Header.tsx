import { menuItems } from "./utils"
import { Moon, Sun } from "lucide-react"
import type { HeaderProps } from "./types"
import {
  Button,
  DropDownMenu,
  DropdownMenuItem,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  ThemeSwitch,
} from "@/components"

export const Header = ({ onClick }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 z-3 w-full bg-background px-4 py-4">
      <div className="mx-auto flex max-w-300 items-center">
        <h1
          className="cursor-pointer text-2xl font-bold"
          data-id="hero"
          onClick={onClick}
        >
          <span className="text-orange-500">&lt; Port</span>
          <span className="">folio /&gt;</span>
        </h1>

        <NavigationMenu className="ml-auto hidden sm:block">
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

        <DropDownMenu className="ml-auto sm:hidden">
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

        <ThemeSwitch
          thumbIconChecked={<Moon className="h-4 w-4" />}
          thumbIconUnchecked={<Sun className="h-4 w-4" />}
        />
      </div>
    </header>
  )
}
