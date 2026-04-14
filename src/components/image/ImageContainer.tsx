import { useState } from "react"
import type { ImageContainerProps } from "./types"

export const ImageContainer = ({
  children,
  className,
}: ImageContainerProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const onLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (e.currentTarget.complete && e.currentTarget.naturalWidth > 0) {
      setIsLoading(false)
    }
  }

  const onError = () => {
    setIsError(true)
    setIsLoading(false)
  }

  return (
    <div className={className}>
      {children && typeof children === "function"
        ? children({ isError, isLoading, onLoad, onError })
        : null}
    </div>
  )
}
