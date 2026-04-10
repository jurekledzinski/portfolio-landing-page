import { Card, CardContent, CardHeader, CardTitle } from "@/components"
import { Icon } from "@iconify/react"
import type { SkillCardProps } from "./types"

export const SkillCard = ({ description, icon, title }: SkillCardProps) => {
  return (
    <Card className="rounded-xs">
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
