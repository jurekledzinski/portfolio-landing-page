export const HeroImage = () => {
  return (
    <div className="relative">
      <img
        className="h-full min-h-100 sm:h-auto sm:min-h-auto lg:rounded-tl-4xl lg:rounded-br-4xl"
        src="./images/desktop.jpeg"
        alt="Desktop"
      />
      <div className="absolute top-0 right-0 bottom-0 rounded-br-4xl bg-amber-600/45 lg:w-[50%]"></div>
    </div>
  )
}
