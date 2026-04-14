export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>

type Params = {
  isError?: boolean
  isLoading?: boolean
  onLoad?: React.ReactEventHandler<HTMLImageElement>
  onError?: React.ReactEventHandler<HTMLImageElement>
}

export type ImageContainerProps = {
  children?: (params: Params) => React.ReactNode
  className?: string
}
