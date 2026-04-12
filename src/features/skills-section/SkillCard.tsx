import { Card, CardContent, CardHeader, CardTitle } from "@/components"
import { Icon } from "@iconify/react"
import type { SkillCardProps } from "./types"

export const SkillCard = ({
  className,
  description,
  icon,
  style,
  title,
}: SkillCardProps) => {
  return (
    <Card
      className={`-translate-y-2 rounded-xs opacity-0 before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-orange-400 before:transition-[width] before:duration-500 hover:bg-black/1 hover:before:w-full hover:before:content-[''] dark:hover:bg-card/85 ${className}`}
      style={style}
    >
      <CardHeader>
        <Icon icon={icon} className="text-3xl text-orange-400" />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-secondary">{description}</p>
      </CardContent>
    </Card>
  )
}
