export type ProjectCardProps = {
  className: string
  description: string
  github: string
  image: string
  live: string
  tags: string[]
  title: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  style?: React.CSSProperties
}

export type ProjectsSectionProps = {
  ref: React.Ref<HTMLElement>
  visibleSections: Set<string>
}
