import { useMemo } from "react"
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
  const { handleScrollToSection, regSection, sectionsRefs } = useScrollTo()
  const { visibleSections } = useObserveSections({ sectionsRefs })

  const projectsRef = useMemo(() => regSection("projects"), [regSection])
  const heroRef = useMemo(() => regSection("hero"), [regSection])
  const skillsRef = useMemo(() => regSection("skills"), [regSection])
  const aboutRef = useMemo(() => regSection("about"), [regSection])
  const contactRef = useMemo(() => regSection("contact"), [regSection])

  return (
    <>
      <Header onClick={handleScrollToSection} />
      <menu>
        <HeroSection
          ref={heroRef}
          onClick={handleScrollToSection}
          visibleSections={visibleSections}
        />
        <SkillsSection ref={skillsRef} visibleSections={visibleSections} />
        <ProjectsSection ref={projectsRef} visibleSections={visibleSections} />
        <AboutSection ref={aboutRef} visibleSections={visibleSections} />
        <ContactSection ref={contactRef} visibleSections={visibleSections} />
        <Footer />
      </menu>
    </>
  )
}
