import { useEffect, useState } from "react"
import type { UseObserveSectionsProps } from "./types"

export const useObserveSections = ({
  sectionsRefs,
}: UseObserveSectionsProps) => {
  const [activeItem, setActiveItem] = useState("hero")

  useEffect(() => {
    const sections = Object.entries(sectionsRefs.current)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)

        if (visible) {
          const id = (visible.target as HTMLElement).dataset.id!
          setActiveItem(id)
          visible.target.classList.add("visible")
        }
      },
      { threshold: 0.3, rootMargin: "0px" }
    )

    sections.forEach((el) => el[1] && observer.observe(el[1]))

    return () => observer.disconnect()
  }, [sectionsRefs])

  return { activeItem }
}
