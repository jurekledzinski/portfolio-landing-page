export type HeroSectionProps = {
  ref: React.Ref<HTMLElement>
  visibleSections: Set<string>
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export type CirclesProps = {
  visibleSections: Set<string>
}

export type ActionButtonsProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}
