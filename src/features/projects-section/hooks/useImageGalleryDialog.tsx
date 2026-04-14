import { screenshotsProject } from "../utils"
import { useRef, useState } from "react"
import type { ProjectImage } from "./types"

export const useImageGalleryDialog = () => {
  const [open, setOpen] = useState(false)

  const projectImages = useRef<ProjectImage[]>([])
  const titleProject = useRef("")

  const openDialog = (e: React.MouseEvent<HTMLButtonElement>) => {
    const name = e.currentTarget.dataset.id
    if (!name) return

    const images = screenshotsProject[name as keyof typeof screenshotsProject]
    projectImages.current = images
    titleProject.current =
      name.charAt(0).toUpperCase() + name.slice(1).replace("_", " ")
    setOpen(true)
  }

  const closeDialog = () => setOpen(false)

  return {
    closeDialog,
    openDialog,
    open,
    projectImages,
    titleProject,
  }
}
