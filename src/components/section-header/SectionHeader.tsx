import type { SectionHeaderProps } from "./types"

export const SectionHeader = ({ subtitle, title }: SectionHeaderProps) => {
  return (
    <div className="-translate-y-2 opacity-0 group-[.visible]/section:translate-y-0 group-[.visible]/section:opacity-100 group-[.visible]/section:transition-[transform,opacity] group-[.visible]/section:duration-500 group-[.visible]/section:ease-in">
      <h2 className="text-2xl font-bold sm:text-4xl">{title}</h2>
      <p className="mt-2 text-sm text-secondary sm:text-base">{subtitle}</p>
    </div>
  )
}
