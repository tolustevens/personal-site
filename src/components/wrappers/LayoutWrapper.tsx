"use client";

import DesktopNavbar from "../DesktopNavbar";
import MobileNavbar from "../MobileNavbar";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {

  return (
      <div className="min-h-screen flex flex-col bg-[rgb(17,17,17)]">
        <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 pt-16 md:pt-0">
          {children}
        </main>
        <MobileNavbar />
        <DesktopNavbar />
      </div>
  );
}