import {
  AboutSection,
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
      </menu>
    </>
  )
}
