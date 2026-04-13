import { Fragment } from "react"
import { Icon } from "@iconify/react"
import { processData } from "./utils"
import { Separator } from "@components"
import type { ProcessDevelopmentProps } from "./types"

export const ProcessDevelopment = ({ className }: ProcessDevelopmentProps) => {
  return (
    <div className={`flex -translate-y-2 flex-col opacity-0 ${className}`}>
      {processData.map((process, index) => (
        <Fragment key={process.title}>
          <div className="grid grid-cols-[1rem_minmax(50px,50px)_1fr] items-center gap-2 sm:grid-cols-[2rem_minmax(100px,100px)_200px]">
            <Separator className="calc(h-full - 10px)" orientation="vertical" />

            <div>
              <Icon icon={process.icon} className="text-3xl sm:text-6xl" />
            </div>

            <p className="text-base">{process.title}</p>
          </div>

          {index < 2 && (
            <div className="my-1 -ml-0.75 h-2 w-2 rounded-full bg-secondary/30" />
          )}
        </Fragment>
      ))}
    </div>
  )
}
