import { ActionButtons, Circles, Introduction } from "@/features"
import type { HeroSectionProps } from "./types"

export const HeroSection = ({ ref }: HeroSectionProps) => {
  return (
    <section
      className="overflow-hidden pt-17 lg:overflow-visible lg:px-4 lg:pt-47 lg:pb-30"
      id="hero"
      ref={ref}
    >
      <div className="relative mx-auto flex max-w-300 flex-col gap-4 lg:flex-row">
        <div className="order-1 flex w-[40%] flex-col justify-center lg:order-0">
          <Introduction />
          <ActionButtons />
        </div>
        <div className="relative flex items-center lg:w-[60%]">
          <Circles />
          <div className="relative">
            <img
              className="h-full min-h-100 sm:h-auto sm:min-h-auto lg:rounded-tl-4xl lg:rounded-br-4xl"
              src="./desktop.jpeg"
              alt="Desktop"
            />
            <div className="absolute top-0 right-0 bottom-0 rounded-br-4xl bg-amber-600/45 lg:w-[50%]"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
