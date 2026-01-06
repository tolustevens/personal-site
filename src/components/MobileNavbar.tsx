import Link from "next/link";

const navText =
  "opacity-50 hover:opacity-80 transition-opacity duration-300 ease-out text-[rgb(134,134,134)] tracking-wide uppercase"

export default function MobileNavbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center space-x-8 py-16 backdrop-blur-sm md:hidden">
      <Link href="/" className={`${navText} text-xs`}>
        Home
      </Link>
      <Link href="/about" className={`${navText} text-xs`}>
        About
      </Link>
    </div>
  )
}
