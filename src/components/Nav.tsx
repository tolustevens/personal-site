"use client";

import { useEffect, useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "links", label: "Links" },
];

export default function Nav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const update = () => {
      const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      const current = links.findLast(({ id }) => {
        const section = document.getElementById(id);
        return section && section.getBoundingClientRect().top <= 120;
      });
      setActive(atBottom ? "links" : (current?.id ?? "home"));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("pageshow", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("pageshow", update);
    };
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-4 left-1/2 z-50 -translate-x-1/2 overflow-hidden rounded-full border border-border bg-surface/70 p-1.5 backdrop-blur-md sm:top-6"
    >
      <ul className="flex items-center gap-1">
        {links.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              aria-current={active === id ? "location" : undefined}
              className={`block rounded-full px-4 py-2 text-sm font-semibold focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent ${active === id ? "text-accent" : "text-secondary hover:text-primary"}`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
