import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@components"
import type { ImageGalleryDialogProps } from "./types"

export const ImageGalleryDialog = ({
  children,
  title,
  ...props
}: ImageGalleryDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="sm:max-w-auto h-[85dvh] max-h-[85dvh] w-full rounded-xs md:max-w-300">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="min-h-0 overflow-hidden">{children}</div>
      </DialogContent>
    </Dialog>
  )
}
