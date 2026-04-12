import { InfoAboutMe, ProcessDevelopment } from "@/features"
import type { AboutSectionProps } from "@/features"
import clsx from "clsx"

export const AboutSection = ({ ref, visibleSections }: AboutSectionProps) => {
  return (
    <section className="px-4 py-10" id="about" ref={ref}>
      <div className="mx-auto max-w-300">
        <h2 className="text-2xl font-bold sm:text-4xl">About Me</h2>
        <p className="mt-2 text-sm text-secondary sm:text-base">
          A quick overview of who I am and what I do.
        </p>

        <div className="mt-10 flex flex-col md:flex-row">
          <div className="w-full md:w-[50%]">
            <ProcessDevelopment
              className={clsx({
                "translate-y-0 opacity-100 transition-[transform,opacity] duration-500 ease-in":
                  visibleSections.has("about"),
              })}
            />
          </div>
          <div className="mt-10 flex w-full flex-col gap-4 md:mt-auto md:w-[50%]">
            <InfoAboutMe
              className={clsx({
                "translate-y-0 opacity-100 transition-[transform,opacity] delay-300 duration-500 ease-in":
                  visibleSections.has("about"),
              })}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
