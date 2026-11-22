import type { ComponentPropsWithoutRef } from "react";

export default function Body({
  children,
  className = "",
  ...props
}: ComponentPropsWithoutRef<"body">) {
  return (
    <body
      {...props}
      className={`min-h-svh bg-canvas font-sans text-primary antialiased selection:bg-accent selection:text-canvas ${className}`}
    >
      {children}
    </body>
  );
}
