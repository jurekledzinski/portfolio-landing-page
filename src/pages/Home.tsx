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
  return (
    <>
      <Header />
      <menu>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </menu>
    </>
  )
}
