import { ProjectCard } from "./ProjectCard"
import { projectsData } from "./utils"

export const ProjectsSection = () => {
  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-300">
        <h2 className="text-2xl font-bold sm:text-4xl">Projects</h2>
        <p className="mt-2 text-sm text-secondary sm:text-base">
          Some of the applications I’ve built and worked on
        </p>

        <div className="mt-10 grid grid-cols-1 gap-2 text-sm sm:not-first:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
