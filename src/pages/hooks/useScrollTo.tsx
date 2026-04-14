import { useCallback, useMemo, useRef } from "react"

const sectionIds = ["hero", "projects", "skills", "about", "contact"]

export const useScrollTo = () => {
  const sectionsRefs = useRef<Record<string, HTMLElement | null>>({})

  const regSection = useCallback(
    (name: string) => (el: HTMLElement | null) => {
      sectionsRefs.current[name] = el
    },
    []
  )

  const handleScrollToSection = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const id = e.currentTarget.dataset.id

      const selectSection =
        sectionsRefs.current[id as keyof typeof sectionsRefs]

      if (!selectSection) return

      const scrollPosition = window.scrollY
      const sectionPosition = selectSection.getBoundingClientRect().top

      const scrollToTarget = scrollPosition + sectionPosition - 30

      let start: null | number = null

      const handleMoveToSection = (timestamp: DOMHighResTimeStamp) => {
        if (!start) start = timestamp

        const duration = 500
        const progress = Math.min((timestamp - start) / duration, 1)

        const position =
          scrollPosition + (scrollToTarget - scrollPosition) * progress

        window.scrollTo({ top: position })

        if (progress < 1) requestAnimationFrame(handleMoveToSection)
      }

      requestAnimationFrame(handleMoveToSection)
    },
    []
  )

  const refs = useMemo(() => {
    return Object.fromEntries(sectionIds.map((id) => [id, regSection(id)]))
  }, [regSection])

  return { handleScrollToSection, refs, sectionsRefs }
}
