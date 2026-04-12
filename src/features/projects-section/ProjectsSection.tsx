import clsx from "clsx"
import { ProjectCard } from "./ProjectCard"
import { projectsData } from "./utils"
import type { ProjectsSectionProps } from "./types"

export const ProjectsSection = ({
  ref,
  visibleSections,
}: ProjectsSectionProps) => {
  return (
    <section className="px-4 py-10" id="projects" ref={ref}>
      <div className="mx-auto max-w-300">
        <h2 className="text-2xl font-bold sm:text-4xl">Projects</h2>
        <p className="mt-2 text-sm text-secondary sm:text-base">
          Some of the applications I’ve built and worked on
        </p>

        <div className="mt-10 grid grid-cols-1 gap-2 text-sm sm:not-first:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              className={clsx({
                "translate-y-0 opacity-100 transition-[transform,opacity] duration-500 ease-in":
                  visibleSections.has("projects"),
              })}
              style={{ transitionDelay: `${index * 300}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
