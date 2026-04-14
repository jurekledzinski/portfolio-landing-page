import { ActionButtons, Circles, HeroImage, Introduction } from "@features"
import { memo } from "react"
import type { HeroSectionProps } from "./types"

const HeroComponent = ({ ref, onClick }: HeroSectionProps) => {
  return (
    <section
      className="group overflow-hidden pt-17 lg:overflow-visible lg:px-4 lg:pt-47 lg:pb-30"
      data-id="hero"
      ref={ref}
    >
      <div className="relative mx-auto flex max-w-300 flex-col gap-4 lg:flex-row">
        <div className="order-1 flex w-[40%] flex-col justify-center lg:order-0">
          <Introduction />
          <ActionButtons onClick={onClick} />
        </div>

        <div className="relative flex items-center lg:w-[60%]">
          <Circles />
          <HeroImage />
        </div>
      </div>
    </section>
  )
}

export const HeroSection = memo(HeroComponent)
