"use client"

import { usePathname } from 'next/navigation'
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const EXTERNAL_LINK_ROUTES = ['/insightful']

export default function Navbar() {
  const pathname = usePathname()
  const hideNav = EXTERNAL_LINK_ROUTES.some(route => pathname.startsWith(route))

  if (hideNav) return null

  return (
    <>
      <MobileNavbar />
      <DesktopNavbar />
    </>
  )
}
