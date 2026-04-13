import { screenshotsProject } from "../utils"
import { useRef, useState } from "react"

export const useImageGalleryDialog = () => {
  const [open, setOpen] = useState(false)

  const projectImages = useRef<{ id: number; src: string }[]>([])

  const handleOpenDialog = (e: React.MouseEvent<HTMLButtonElement>) => {
    const name = e.currentTarget.dataset.id
    const images = screenshotsProject[name as keyof typeof screenshotsProject]
    projectImages.current = images
    setOpen(true)
  }

  const handleCloseDialog = () => setOpen(false)

  return { handleCloseDialog, handleOpenDialog, open, projectImages }
}
