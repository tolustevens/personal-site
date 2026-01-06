import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MobileNavbar from "@/components/MobileNavbar";
import DesktopNavbar from "@/components/DesktopNavbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tolu Stevens",
  description: "Tolu Stevens' Personal Website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen flex flex-col bg-[rgb(17,17,17)]">
          <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 pt-16 md:pt-0">
            {children}
          </main>
          <MobileNavbar />
          <DesktopNavbar />
        </div>
      </body>
    </html>
  );
}