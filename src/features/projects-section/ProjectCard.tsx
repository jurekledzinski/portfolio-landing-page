import github from "@iconify-icons/simple-icons/github"
import images from "@iconify-icons/fa-solid/images"
import { Icon } from "@iconify/react"
import {
  Badge,
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components"
import type { ProjectCardProps } from "./types"

export const ProjectCard = ({
  description,
  image,
  tags,
  title,
}: ProjectCardProps) => {
  return (
    <Card className="flex h-full flex-col rounded-xs p-0 [&>img:first-child]:rounded-none">
      <div className="hover:bg-black/50">
        <img
          src={image}
          alt={title}
          className="block aspect-video object-cover"
        />
      </div>

      <CardHeader className="relative flex flex-col">
        <CardTitle>{title}</CardTitle>
        <CardAction className="absolute right-4">
          <Badge
            className="relative rounded-xs bg-green-500/10 text-green-500"
            variant="secondary"
          >
            <span className="animate-pulse rounded-full bg-green-500 p-1 text-xs"></span>
            Live
          </Badge>
        </CardAction>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-wrap items-start gap-x-1 gap-y-1">
        {tags.map((tag) => (
          <Button
            key={tag}
            variant="outline"
            className="h-0 w-fit rounded-xs px-2 py-3 text-xs"
          >
            {tag}
          </Button>
        ))}
      </CardContent>

      <CardFooter className="mt-auto flex gap-1">
        <Button className="cursor-pointer rounded-xs bg-orange-600 text-white hover:bg-orange-600/90">
          Live demo
        </Button>
        <Button
          className="ml-auto cursor-pointer rounded-xs"
          size="icon"
          variant="outline"
        >
          <Icon icon={github} />
        </Button>
        <Button
          className="cursor-pointer rounded-xs"
          size="icon"
          variant="outline"
        >
          <Icon icon={images} />
        </Button>
      </CardFooter>
    </Card>
  )
}
