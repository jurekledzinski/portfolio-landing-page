import type React from "react"

export type HeaderProps = {
  children?: React.ReactNode
}

type MenuBaseProps = {
  activeItem: string
  onClick: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>
}

export type DesktopMenuProps = MenuBaseProps
export type MobileMenuProps = MenuBaseProps
export type LogoProps = MenuBaseProps
