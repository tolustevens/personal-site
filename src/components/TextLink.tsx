import type { ComponentPropsWithoutRef } from "react";

type TextLinkProps = ComponentPropsWithoutRef<"a"> & {
  href: string;
};

export default function TextLink({
  children,
  className = "",
  ...props
}: TextLinkProps) {
  return (
    <a
      {...props}
      className={`inline-flex items-center gap-1 font-semibold text-accent no-underline transition-colors hover:text-primary focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none ${className}`}
    >
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}
