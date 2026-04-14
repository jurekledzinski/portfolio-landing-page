import clsx from "clsx"
import type { LogoProps } from "./types"

export const Logo = ({ activeItem, onClick }: LogoProps) => {
  return (
    <h1
      className="cursor-pointer text-2xl font-bold"
      data-id="hero"
      onClick={onClick}
    >
      <span
        className={clsx({
          "text-orange-400 transition-colors duration-300": true,
          "text-orange-500!": activeItem === "hero",
        })}
      >
        &lt; Port
      </span>
      <span className="">folio /&gt;</span>
    </h1>
  )
}
