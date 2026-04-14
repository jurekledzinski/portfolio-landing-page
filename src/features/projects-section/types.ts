import type { ProjectImage } from "./hooks"

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
}

export type ProjectsGalleryDialogProps = {
  closeDialog: () => void
  images: React.RefObject<ProjectImage[]>
  open: boolean
  titleProject: React.RefObject<string>
}
