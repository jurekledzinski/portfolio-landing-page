import { memo } from "react"
import { ProjectCard } from "./ProjectCard"
import { projectsData } from "./utils"
import { ProjectsGalleryDialog } from "./ProjectsGalleryDialog"
import { SectionHeader } from "@components"
import { useImageGalleryDialog } from "./hooks"
import type { ProjectsSectionProps } from "./types"

const ProjectsComponent = ({ ref }: ProjectsSectionProps) => {
  const { closeDialog, openDialog, open, projectImages, titleProject } =
    useImageGalleryDialog()

  return (
    <>
      <ProjectsGalleryDialog
        closeDialog={closeDialog}
        open={open}
        images={projectImages}
        titleProject={titleProject}
      />
      <section
        className="group/section px-4 py-10 lg:py-20"
        data-id="projects"
        ref={ref}
      >
        <div className="mx-auto max-w-300">
          <SectionHeader
            subtitle="Some of the applications I've built and worked on"
            title="Projects"
          />

          <div className="mt-10 grid grid-cols-1 gap-2 text-sm md:grid-cols-2 lg:not-first:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
            {projectsData.map((project, index) => (
              <ProjectCard
                className="group-[.visible]/section:translate-y-0 group-[.visible]/section:opacity-100 group-[.visible]/section:transition-[transform,opacity] group-[.visible]/section:duration-400 group-[.visible]/section:ease-in"
                key={project.title}
                onClick={openDialog}
                style={{ transitionDelay: `${index * 200}ms` }}
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
