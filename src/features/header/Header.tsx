import {
  DropDownMenu,
  DropdownMenuItem,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components"

const menuItems = ["Skills", "Projects", "About", "Contact"]

export const Header = () => {
  return (
    <header className="px-4 py-4">
      <div className="mx-auto flex max-w-300 items-center justify-between">
        <h1 className="text-2xl font-bold">
          <span className="text-orange-500">&lt; Port</span>
          <span className="">folio /&gt;</span>
        </h1>

        <NavigationMenu className="hidden sm:block">
          <NavigationMenuList>
            {menuItems.map((item) => (
              <NavigationMenuItem key={item} asChild>
                <NavigationMenuLink
                  className="hover:bg-transparent focus:rounded-xs focus:bg-transparent"
                  href="#"
                >
                  {item}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <DropDownMenu className="sm:hidden">
          {menuItems.map((item) => (
            <DropdownMenuItem key={item} className="rounded-xs">
              {item}
            </DropdownMenuItem>
          ))}
        </DropDownMenu>
      </div>
    </header>
  )
}
