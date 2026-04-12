import clsx from "clsx"
import { SkillCard } from "./SkillCard"
import { skillsData } from "./utils"
import type { SkillsSectionProps } from "./types"

export const SkillsSection = ({ ref, visibleSections }: SkillsSectionProps) => {
  return (
    <section className="px-4 pt-20 pb-10 lg:pt-30" id="skills" ref={ref}>
      <div className="mx-auto max-w-300">
        <h2 className="text-2xl font-bold sm:text-4xl">Skills & Stack</h2>
        <p className="mt-2 text-sm text-secondary sm:text-base">
          Technologies I use to build modern web applications
        </p>

        <div className="mt-10 grid grid-cols-1 gap-2 text-sm sm:not-first:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
          {skillsData.map((skill, index) => (
            <SkillCard
              key={skill.title}
              className={clsx({
                "translate-y-0 opacity-100 transition-[transform,opacity] duration-500 ease-in":
                  visibleSections.has("skills"),
              })}
              description={skill.description}
              icon={skill.icon}
              style={{ transitionDelay: `${index * 300}ms` }}
              title={skill.title}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
