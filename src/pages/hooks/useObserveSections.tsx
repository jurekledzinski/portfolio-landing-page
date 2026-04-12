import { useEffect, useRef, useState } from "react"
import type { UseObserveSectionsProps } from "./types"

export const useObserveSections = ({
  sectionsRefs,
}: UseObserveSectionsProps) => {
  const scrolledSections = useRef<Set<string>>(new Set())
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  useEffect(() => {
    const sections = Object.entries(sectionsRefs.current)

    const observer = new IntersectionObserver(
      (entries) => {
        const next = new Set(scrolledSections.current)

        entries.forEach((entry) => {
          const id = entry.target.id

          if (entry.isIntersecting && !next.has(id)) {
            next.add(id)
            setVisibleSections(next)
          }
          scrolledSections.current = next
        })
      },
      { threshold: 0.3, rootMargin: "0px" }
    )

    sections.forEach((el) => el[1] && observer.observe(el[1]))

    return () => observer.disconnect()
  }, [sectionsRefs])

  return { visibleSections }
}
