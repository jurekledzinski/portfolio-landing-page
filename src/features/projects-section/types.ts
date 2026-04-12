export type ProjectCardProps = {
  image: string
  title: string
  description: string
  tags: string[]
}

export type ProjectsSectionProps = {
  ref: React.Ref<HTMLElement>
  visibleSections: Set<string>
}
