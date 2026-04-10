import { Fragment } from "react"
import { Icon } from "@iconify/react"
import { processData } from "./utils"
import { Separator } from "@/components"

export const ProcessDevelopment = () => {
  return (
    <div className="flex flex-col">
      {processData.map((process, index) => (
        <Fragment key={process.title}>
          <div className="grid grid-cols-[2rem_minmax(100px,120px)_200px] items-center gap-2">
            <Separator className="calc(h-full - 10px)" orientation="vertical" />

            <div className="">
              <Icon icon={process.icon} className="text-4xl sm:text-6xl" />
            </div>

            <div className="">Web Development</div>
          </div>

          {index < 2 && (
            <div className="my-1 -ml-0.75 h-2 w-2 rounded-full bg-secondary/30" />
          )}
        </Fragment>
      ))}
    </div>
  )
}
