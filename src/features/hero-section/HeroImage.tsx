export const HeroImage = () => {
  return (
    <div className="relative">
      <img
        className="h-full min-h-100 sm:h-auto sm:min-h-auto lg:rounded-tl-4xl lg:rounded-br-4xl"
        src="./images/desktop.jpeg"
        alt="Desktop"
      />

      <div className="absolute top-0 right-0 bottom-0 z-5 overflow-hidden rounded-br-4xl lg:w-[58%]">
        <div className="absolute inset-0 bg-amber-600/30 mask-[radial-gradient(circle_300px_at_-224px_50%,transparent_99%,black_100%)] [-webkit-mask-image:radial-gradient(circle_300px_at_-224px_50%,transparent_99%,black_100%)]"></div>
      </div>

      <div className="absolute top-0 right-0 bottom-0 z-4 overflow-hidden rounded-br-4xl lg:w-[64.5%]">
        <div className="absolute inset-0 bg-amber-600/25 mask-[radial-gradient(circle_266px_at_-175px_50%,transparent_99%,black_100%)] [-webkit-mask-image:radial-gradient(circle_283px_at_-198px_50%,transparent_99%,black_100%)]"></div>
      </div>

      <div className="absolute top-0 right-0 bottom-0 z-3 overflow-hidden rounded-br-4xl lg:w-[72%]">
        <div className="absolute inset-0 bg-amber-600/20 mask-[radial-gradient(circle_247.5px_at_-143px_50%,transparent_99%,black_100%)] [-webkit-mask-image:radial-gradient(circle_247.5px_at_-143px_50%,transparent_99%,black_100%)]"></div>
      </div>

      <div className="absolute top-0 right-0 bottom-0 z-2 overflow-hidden rounded-br-4xl lg:w-[84%]">
        <div className="absolute inset-0 bg-amber-600/15 mask-[radial-gradient(circle_206px_at_-49px_50%,transparent_99%,black_100%)] [-webkit-mask-image:radial-gradient(circle_206px_at_-49px_50%,transparent_99%,black_100%)]"></div>
      </div>
    </div>
  )
}
