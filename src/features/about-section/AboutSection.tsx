import { InfoAboutMe, ProcessDevelopment } from "@features"
import { memo } from "react"
import type { AboutSectionProps } from "@features"

const AboutComponent = ({ ref }: AboutSectionProps) => {
  return (
    <section className="group px-4 py-10" data-id="about" ref={ref}>
      <div className="mx-auto max-w-300">
        <h2 className="text-2xl font-bold sm:text-4xl">About Me</h2>
        <p className="mt-2 text-sm text-secondary sm:text-base">
          A quick overview of who I am and what I do.
        </p>

        <div className="mt-10 flex flex-col md:flex-row">
          <div className="w-full md:w-[50%]">
            <ProcessDevelopment className="group-[.visible]:translate-y-0 group-[.visible]:opacity-100 group-[.visible]:transition-[transform,opacity] group-[.visible]:duration-500 group-[.visible]:ease-in" />
          </div>
          <div className="mt-10 flex w-full flex-col gap-4 md:mt-auto md:w-[50%]">
            <InfoAboutMe className="group-[.visible]:translate-y-0 group-[.visible]:opacity-100 group-[.visible]:transition-[transform,opacity] group-[.visible]:delay-300 group-[.visible]:duration-500 group-[.visible]:ease-in" />
          </div>
        </div>
      </div>
    </section>
  )
}

export const AboutSection = memo(AboutComponent)
