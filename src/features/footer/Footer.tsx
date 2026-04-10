export const Footer = () => {
  return (
    <footer className="bg-black/90 p-5">
      <div className="mx-auto max-w-300">
        <p className="text-xs text-white">
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  )
}
