import { SkillCard } from "./SkillCard"
import { skillsData } from "./utils"

export const SkillsSection = () => {
  return (
    <section className="px-4 pt-20 pb-10 lg:pt-30">
      <div className="mx-auto max-w-300">
        <h2 className="text-2xl font-bold sm:text-4xl">Skills & Stack</h2>
        <p className="mt-2 text-sm text-secondary sm:text-base">
          Technologies I use to build modern web applications
        </p>

        <div className="mt-10 grid grid-cols-1 gap-2 text-sm sm:not-first:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
          {skillsData.map((skill) => (
            <SkillCard
              key={skill.title}
              description={skill.description}
              icon={skill.icon}
              title={skill.title}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
