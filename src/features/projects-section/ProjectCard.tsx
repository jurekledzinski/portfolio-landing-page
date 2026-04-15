import iconGithub from "@iconify-icons/simple-icons/github"
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
} from "@components"
import type { ProjectCardProps } from "./types"

export const ProjectCard = ({
  className,
  description,
  github,
  image,
  live,
  onClick,
  style,
  tags,
  title,
}: ProjectCardProps) => {
  return (
    <Card
      className={`flex h-full -translate-y-2 flex-col rounded-xs p-0 opacity-0 [&>img:first-child]:rounded-none ${className}`}
      style={style}
    >
      <div className="group/image relative">
        <img
          src={image}
          alt={title}
          className="block aspect-video transition duration-300 group-hover/image:brightness-95"
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
        <Button
          className="cursor-pointer rounded-xs bg-orange-400 text-white hover:bg-orange-500/90!"
          asChild
        >
          <a href={live} target="_blank">
            Live demo
          </a>
        </Button>
        <Button
          className="ml-auto cursor-pointer rounded-xs"
          size="icon"
          variant="outline"
          asChild
        >
          <a href={github} target="_blank">
            <Icon icon={iconGithub} />
          </a>
        </Button>
        <Button
          className="cursor-pointer rounded-xs"
          data-id={title.toLowerCase().replace(/\s/, "_")}
          onClick={onClick}
          size="icon"
          variant="outline"
        >
          <Icon icon={images} />
        </Button>
      </CardFooter>
    </Card>
  )
}
