import { ActionButtons, Circles, Introduction, HeroImage } from "@features"
import type { HeroSectionProps } from "./types"

export const HeroSection = ({
  ref,
  onClick,
  visibleSections,
}: HeroSectionProps) => {
  return (
    <section
      className="overflow-hidden pt-17 lg:overflow-visible lg:px-4 lg:pt-47 lg:pb-30"
      id="hero"
      ref={ref}
    >
      <div className="relative mx-auto flex max-w-300 flex-col gap-4 lg:flex-row">
        <div className="order-1 flex w-[40%] flex-col justify-center lg:order-0">
          <Introduction />
          <ActionButtons onClick={onClick} />
        </div>

        <div className="relative flex items-center lg:w-[60%]">
          <Circles visibleSections={visibleSections} />
          <HeroImage />
        </div>
      </div>
    </section>
  )
}
