import type { ComponentPropsWithoutRef } from "react";

type PageProps = ComponentPropsWithoutRef<"main"> & {
  width?: "wide" | "reading";
};

const layouts = {
  wide: "max-w-6xl px-6 py-16 sm:px-10 sm:py-24 lg:px-20 lg:py-32",
  reading: "max-w-3xl px-6 py-16",
};

export default function Page({
  children,
  width = "wide",
  className = "",
  ...props
}: PageProps) {
  return (
    <main {...props} className={`mx-auto ${layouts[width]} ${className}`}>
      {children}
    </main>
  );
}
