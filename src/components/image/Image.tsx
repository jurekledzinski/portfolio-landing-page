import type { ImageProps } from "./types"

export const Image = ({ ...props }: ImageProps) => {
  return <img {...props} />
}
