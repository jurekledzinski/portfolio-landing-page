import { CarouselItem, ImageGalleryDialog, Slider } from "@components"
import { memo } from "react"
import { ProjectCard } from "./ProjectCard"
import { projectsData } from "./utils"
import { useImageGalleryDialog } from "./hooks"
import type { ProjectsSectionProps } from "./types"

const ProjectsComponent = ({ ref }: ProjectsSectionProps) => {
  const { closeDialog, openDialog, open, projectImages, titleProject } =
    useImageGalleryDialog()

  return (
    <>
      <ImageGalleryDialog
        title={titleProject.current}
        open={open}
        onOpenChange={closeDialog}
      >
        <Slider>
          {projectImages.current.map((image) => (
            <CarouselItem
              className="scrollbar-track-red-300 h-full max-h-[calc(85vh-65px)] w-full basis-full overflow-y-auto! [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-gray-100"
              key={image.id}
            >
              <div className="h-full">
                <img
                  src={image.src}
                  alt="Screenshot project"
                  className="max-h-none w-auto"
                />
              </div>
            </CarouselItem>
          ))}
        </Slider>
      </ImageGalleryDialog>

      <section className="group px-4 py-10" data-id="projects" ref={ref}>
        <div className="mx-auto max-w-300">
          <h2 className="text-2xl font-bold sm:text-4xl">Projects</h2>
          <p className="mt-2 text-sm text-secondary sm:text-base">
            Some of the applications I've built and worked on
          </p>

          <div className="mt-10 grid grid-cols-1 gap-2 text-sm sm:not-first:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
            {projectsData.map((project, index) => (
              <ProjectCard
                className="group-[.visible]:translate-y-0 group-[.visible]:opacity-100 group-[.visible]:transition-[transform,opacity] group-[.visible]:duration-500 group-[.visible]:ease-in"
                key={project.title}
                onClick={openDialog}
                style={{ transitionDelay: `${index * 300}ms` }}
                {...project}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export const ProjectsSection = memo(ProjectsComponent)
