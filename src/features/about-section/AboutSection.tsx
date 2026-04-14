import { InfoAboutMe, ProcessDevelopment } from "@features"
import { memo } from "react"
import { SectionHeader } from "@components"
import type { AboutSectionProps } from "@features"

const AboutComponent = ({ ref }: AboutSectionProps) => {
  return (
    <section
      className="group/section px-4 py-10 lg:py-20"
      data-id="about"
      ref={ref}
    >
      <div className="mx-auto max-w-300">
        <SectionHeader
          subtitle="A quick overview of who I am and what I do."
          title="About Me"
        />

        <div className="mt-10 flex flex-col md:flex-row">
          <div className="w-full md:w-[50%]">
            <ProcessDevelopment className="group-[.visible]/section:translate-y-0 group-[.visible]/section:opacity-100 group-[.visible]/section:transition-[transform,opacity] group-[.visible]/section:duration-500 group-[.visible]/section:ease-in" />
          </div>
          <div className="mt-10 flex w-full flex-col gap-4 md:mt-auto md:w-[50%]">
            <InfoAboutMe className="group-[.visible]/section:translate-y-0 group-[.visible]/section:opacity-100 group-[.visible]/section:transition-[transform,opacity] group-[.visible]/section:delay-300 group-[.visible]/section:duration-500 group-[.visible]/section:ease-in" />
          </div>
        </div>
      </div>
    </section>
  )
}

export const AboutSection = memo(AboutComponent)
