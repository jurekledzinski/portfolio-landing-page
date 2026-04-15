import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "../ui"
import type { SliderProps } from "./types"

export const Slider = ({ children }: SliderProps) => {
  return (
    <Carousel className="flex h-full w-full items-center">
      <CarouselContent className="flex h-full items-center">
        {children}
      </CarouselContent>
      <CarouselPrevious className="left-1 z-10! translate-y-[-50%]! cursor-pointer rounded-xs border-blue-500! bg-blue-500! text-white hover:text-white active:translate-y-[-50%]!" />
      <CarouselNext className="right-1 z-10! translate-y-[-50%]! cursor-pointer rounded-xs border-blue-500! bg-blue-500! text-white hover:text-white active:translate-y-[-50%]!" />
    </Carousel>
  )
}
