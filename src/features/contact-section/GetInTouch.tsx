import github from "@iconify-icons/simple-icons/github"
import linkedin from "@iconify-icons/simple-icons/linkedin"
import { Button } from "@/components"
import { Icon } from "@iconify/react"

export const GetInTouch = () => {
  return (
    <>
      <h2 className="leading-[1.2] font-bold sm:text-2xl">
        Let's build something great together.
      </h2>
      <p className="mt-2 text-xs text-secondary sm:text-base">
        Available for freelance projects, full-time roles, or just a coffee chat
        about frontend dev. I typically respond within 24 hours.
      </p>

      <div className="mt-4 flex gap-1">
        <Button className="cursor-pointer rounded-xs text-white" size="icon">
          <Icon icon={linkedin} />
        </Button>
        <Button className="cursor-pointer rounded-xs text-white" size="icon">
          <Icon icon={github} />
        </Button>
      </div>
    </>
  )
}
