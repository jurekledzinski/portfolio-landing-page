import type { IconifyIcon } from "@iconify/react"

export type SkillCardProps = {
  className: string
  description: string
  icon: IconifyIcon
  title: string
  style?: React.CSSProperties
}

export type SkillsSectionProps = {
  ref: React.Ref<HTMLElement>
  visibleSections: Set<string>
}
