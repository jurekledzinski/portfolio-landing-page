import { Dialog } from "../ui"
import type { ComponentProps } from "react"

export interface ImageGalleryDialogProps extends ComponentProps<typeof Dialog> {
  title: string
}
