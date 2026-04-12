import { useObserveSections, useScrollTo } from "./hooks"
import {
  AboutSection,
  ContactSection,
  Footer,
  Header,
  HeroSection,
  ProjectsSection,
  SkillsSection,
} from "@/features"

export const HomePage = () => {
  const { handleScrollToSection, registerSection, sectionsRefs } = useScrollTo()
  const { visibleSections } = useObserveSections({ sectionsRefs })

  return (
    <>
      <Header onClick={handleScrollToSection} />
      <menu>
        <HeroSection
          ref={registerSection("hero")}
          onClick={handleScrollToSection}
          visibleSections={visibleSections}
        />
        <SkillsSection
          ref={registerSection("skills")}
          visibleSections={visibleSections}
        />
        <ProjectsSection
          ref={registerSection("projects")}
          visibleSections={visibleSections}
        />
        <AboutSection
          ref={registerSection("about")}
          visibleSections={visibleSections}
        />
        <ContactSection
          ref={registerSection("contact")}
          visibleSections={visibleSections}
        />
        <Footer />
      </menu>
    </>
  )
}
