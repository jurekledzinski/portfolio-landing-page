import { memo } from "react"
import { SectionHeader } from "@components"
import { SkillCard } from "./SkillCard"
import { skillsData } from "./utils"
import type { SkillsSectionProps } from "./types"

const SkillsComponent = ({ ref }: SkillsSectionProps) => {
  return (
    <section
      className="group/section px-4 pt-20 pb-10 lg:pt-30 lg:pb-20"
      data-id="skills"
      ref={ref}
    >
      <div className="mx-auto max-w-300">
        <SectionHeader
          subtitle="Technologies I use to build modern web applications"
          title="Skills & Stack"
        />

        <div className="mt-10 grid grid-cols-1 gap-2 text-sm sm:not-first:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
          {skillsData.map((skill, index) => (
            <SkillCard
              key={skill.title}
              className="group-[.visible]/section:translate-y-0 group-[.visible]/section:opacity-100 group-[.visible]/section:transition-[transform,opacity] group-[.visible]/section:duration-500 group-[.visible]/section:ease-in"
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

export const SkillsSection = memo(SkillsComponent)
