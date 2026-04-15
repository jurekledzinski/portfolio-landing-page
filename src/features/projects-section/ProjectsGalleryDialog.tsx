import {
  CarouselItem,
  Image,
  ImageContainer,
  ImageGalleryDialog,
  Skeleton,
  Slider,
} from "@components"
import type { ProjectsGalleryDialogProps } from "./types"

export const ProjectsGalleryDialog = ({
  closeDialog,
  open,
  images,
  titleProject,
}: ProjectsGalleryDialogProps) => {
  return (
    <ImageGalleryDialog
      title={titleProject.current}
      open={open}
      onOpenChange={closeDialog}
    >
      <Slider>
        {images.current.map((image) => (
          <CarouselItem
            className="scrollbar-track-red-300 h-full max-h-[calc(85vh-65px)] w-full basis-full overflow-y-auto! [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-gray-100"
            key={image.id}
          >
            <div className="h-full">
              <ImageContainer className="flex h-full w-full flex-col">
                {({ isLoading, onLoad, onError }) => {
                  return (
                    <>
                      {isLoading && (
                        <Skeleton className="aspect-video w-full" />
                      )}

                      <Image
                        src={image.src}
                        alt="Screenshot project"
                        className="max-h-none w-auto"
                        onError={onError}
                        onLoad={onLoad}
                      />
                    </>
                  )
                }}
              </ImageContainer>
            </div>
          </CarouselItem>
        ))}
      </Slider>
    </ImageGalleryDialog>
  )
}
