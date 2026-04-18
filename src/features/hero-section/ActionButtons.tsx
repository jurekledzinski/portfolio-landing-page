import file from "@iconify-icons/fa-solid/file"
import github from "@iconify-icons/simple-icons/github"
import linkedin from "@iconify-icons/simple-icons/linkedin"
import { Button } from "@components"
import { Icon } from "@iconify/react"
import type { ActionButtonsProps } from "./types"

export const ActionButtons = ({ onClick }: ActionButtonsProps) => {
  return (
    <div className="mt-4 flex flex-col gap-6 px-4 lg:px-0">
      <div className="flex gap-1">
        <Button
          className="cursor-pointer rounded-xs px-6 py-5 text-white hover:bg-primary/90 sm:px-8 sm:py-5"
          data-id="projects"
          onClick={onClick}
        >
          View projects
        </Button>
        <Button
          className="cursor-pointer rounded-xs px-6 py-5 sm:px-8 sm:py-5"
          data-id="contact"
          onClick={onClick}
          variant="outline"
        >
          Get in touch
        </Button>
      </div>
      <div className="flex gap-1">
        <Button
          className="cursor-pointer rounded-xs bg-orange-400 text-white hover:bg-orange-500/90!"
          size="icon"
          asChild
        >
          <a
            download={import.meta.env.VITE_FILE_NAME_DOWNLOAD}
            href={import.meta.env.VITE_FILE_URL}
          >
            <Icon icon={file} />
          </a>
        </Button>
        <Button
          className="cursor-pointer rounded-xs"
          size="icon"
          variant="outline"
          asChild
        >
          <a href={import.meta.env.VITE_LINKEDIN_URL} target="_blank">
            <Icon icon={linkedin} />
          </a>
        </Button>
        <Button
          className="cursor-pointer rounded-xs"
          size="icon"
          variant="outline"
          asChild
        >
          <a href={import.meta.env.VITE_GITHUB_URL} target="_blank">
            <Icon icon={github} />
          </a>
        </Button>
      </div>
    </div>
  )
}
