import { InfoAboutMe, ProcessDevelopment } from "@/features"

export const AboutSection = () => {
  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-300">
        <h2 className="text-2xl font-bold sm:text-4xl">About Me</h2>
        <p className="mt-2 text-sm text-secondary sm:text-base">
          A quick overview of who I am and what I do.
        </p>

        <div className="mt-10 flex flex-col md:flex-row">
          <div className="sm:w-[50%]">
            <ProcessDevelopment />
          </div>
          <div className="mt-10 flex flex-col gap-4 md:mt-auto md:w-[50%]">
            <InfoAboutMe />
          </div>
        </div>
      </div>
    </section>
  )
}
