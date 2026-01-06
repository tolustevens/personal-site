import Link from "next/link";

interface NavbarButtonProps {
  label: string
  href: string
}

export const NavbarButton = ({ label, href }: NavbarButtonProps) =>
  <div className="flex items-center space-x-4 opacity-35 hover:opacity-70 transition-opacity duration-500 ease-in-out">
    <div className="flex flex-col items-center">
      <div className="w-3 h-3 rounded-full bg-[rgb(134,134,134)]"></div>
    </div>

    <Link href={href} className="text-[rgb(134,134,134)] text-sm tracking-wide uppercase">
      {label}
    </Link>
  </div>

const VerticalLine = () => <div className="w-px h-10 bg-[rgb(134,134,134)] ml-1.5 -translate-x-1/2 opacity-35" />

export default function DesktopNavbar() {
  return (
    <div className="hidden md:flex fixed left-12 top-1/2 -translate-y-1/2 flex-col items-start space-y-2">

      <NavbarButton label="Home" href="/" />

      <VerticalLine />

      <NavbarButton label="About" href="/about" />
    </div>
  );
}