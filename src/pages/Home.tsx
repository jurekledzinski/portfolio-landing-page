import { useObserveSections, useScrollTo } from "./hooks"
import {
  AboutSection,
  ContactSection,
  DesktopMenu,
  Footer,
  Header,
  HeroSection,
  Logo,
  MobileMenu,
  ProjectsSection,
  SkillsSection,
} from "@features"

export const HomePage = () => {
  const { handleScrollToSection, refs, sectionsRefs } = useScrollTo()
  const { activeItem } = useObserveSections({ sectionsRefs })
  const { about, contact, hero, skills, projects } = refs

  return (
    <>
      <Header>
        <Logo activeItem={activeItem} onClick={handleScrollToSection} />
        <DesktopMenu activeItem={activeItem} onClick={handleScrollToSection} />
        <MobileMenu activeItem={activeItem} onClick={handleScrollToSection} />
      </Header>
      <main>
        <HeroSection ref={hero} onClick={handleScrollToSection} />
        <SkillsSection ref={skills} />
        <ProjectsSection ref={projects} />
        <AboutSection ref={about} />
        <ContactSection ref={contact} />
        <Footer />
      </main>
    </>
  )
}
