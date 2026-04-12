import type { InfoAboutMeProps } from "./types"

export const InfoAboutMe = ({ className }: InfoAboutMeProps) => {
  return (
    <div className={`-translate-y-2 opacity-0 ${className}`}>
      <p className="text-xs sm:text-base">
        Passionate about crafting great web experiences I'm Jerzy, a frontend
        developer based in Netherlands with 2 years of experience building
        modern web applications. I specialize in React ecosystems, with a strong
        focus on TypeScript and clean, maintainable code.
      </p>

      <p className="text-xs sm:text-base">
        I love the intersection of design and engineering — writing code that
        not only works well but feels great to use. When I'm not building UI
        components, I'm exploring new patterns in state management or writing
        tests to ensure everything holds up.
      </p>

      <p className="text-xs sm:text-base">
        Currently open to new opportunities, freelance projects, and
        collaborations on exciting products.
      </p>
    </div>
  )
}
