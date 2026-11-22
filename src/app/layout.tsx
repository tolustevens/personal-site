import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import Body from "@/components/Body";
import "./tailwind.css";

const manrope = localFont({
  src: [
    { path: "../assets/fonts/Manrope-Regular.ttf", weight: "400", style: "normal" },
    { path: "../assets/fonts/Manrope-SemiBold.ttf", weight: "600", style: "normal" },
  ],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Tolu Stevens | Software Engineer",
  description: "I build thoughtful products and reliable systems.",
};

export const viewport: Viewport = { colorScheme: "dark" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={manrope.variable}>
      <Body>{children}</Body>
    </html>
  );
}
