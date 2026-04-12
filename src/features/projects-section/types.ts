export type ProjectCardProps = {
  className: string
  image: string
  title: string
  description: string
  tags: string[]
  style?: React.CSSProperties
}

export type ProjectsSectionProps = {
  ref: React.Ref<HTMLElement>
  visibleSections: Set<string>
}
