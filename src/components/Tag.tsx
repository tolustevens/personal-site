import type { ReactNode } from "react";

export default function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full bg-accent-soft px-3 py-1 text-xs leading-relaxed font-semibold text-accent sm:text-sm">
      {children}
    </span>
  );
}
