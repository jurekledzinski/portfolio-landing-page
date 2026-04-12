import clsx from "clsx"
import type { CirclesProps } from "./types"

export const Circles = ({ visibleSections }: CirclesProps) => {
  return (
    <div className="absolute right-0 z-1 aspect-square h-full translate-x-1/2 lg:top-1/2 lg:right-auto lg:-left-56 lg:z-auto lg:h-auto lg:w-auto lg:translate-x-0 lg:-translate-y-1/2">
      <div className="relative h-full w-full lg:h-150 lg:w-150">
        <div
          className={clsx({
            "absolute inset-0 rounded-full border-34 border-[#FF851B]/60 opacity-0": true,
            "translate-y-0 opacity-100 transition-opacity delay-800 duration-500 ease-in":
              visibleSections.has("hero"),
          })}
        />

        <div
          className={clsx({
            "absolute inset-10 rounded-full border-25 border-[#FF851B]/40 opacity-0": true,
            "translate-y-0 opacity-100 transition-opacity delay-400 duration-500 ease-in":
              visibleSections.has("hero"),
          })}
        />

        <div
          className={clsx({
            "absolute inset-18 rounded-full border-26 border-[#FF851B]/40 opacity-0": true,
            "translate-y-0 opacity-100 transition-opacity delay-0 duration-500 ease-in":
              visibleSections.has("hero"),
          })}
        />
      </div>
    </div>
  )
}
