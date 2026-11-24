"use client";

import { useEffect, useRef, useState } from "react";
import Portrait from "@/components/Portrait";
import TagGroup from "@/components/TagGroup";
import { Text, Title } from "@/components/Typography";
import { cssClamp } from "@/lib/css";

const tags = ["Node.js", "TypeScript", "React", "Next.js", "React Native"];

const portraits = [
  { src: "/portraits/1000030945.jpg" },
  { src: "/portraits/1000030947.jpg" },
  { src: "/portraits/1000030949.jpg", position: "50% 62%", offsetX: -2.5 },
  { src: "/portraits/1000030943.jpg", position: "50% 78%", offsetX: 2.5 },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const update = () => {
      frame = 0;
      const { top, height } = section.getBoundingClientRect();
      setReducedMotion(preference.matches);
      setProgress(
        preference.matches ? 1 : Math.min(1, Math.max(0, -top / (height * 0.6))),
      );
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    const observer = new ResizeObserver(scheduleUpdate);
    observer.observe(section);
    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("pageshow", scheduleUpdate);
    preference.addEventListener("change", scheduleUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("pageshow", scheduleUpdate);
      preference.removeEventListener("change", scheduleUpdate);
    };
  }, []);

  const nameSize = reducedMotion
    ? cssClamp("2.25rem", "5vw", "3.75rem")
    : cssClamp(
      `${2.75 - 0.5 * progress}rem`,
      `min(${12 - 7 * progress}vw, 16svh)`,
      `${10 - 6.25 * progress}rem`,
    );
  const roleSize = cssClamp(
    "1.25rem",
    `${3 - 0.5 * progress}vw`,
    `${2 - 0.5 * progress}rem`,
  );

  return (
    <section
      id="home"
      ref={sectionRef}
      aria-label="Introduction"
      className={
        reducedMotion
          ? undefined
          : "-mt-16 h-svh pt-[30svh] sm:-mt-24 lg:-mt-32"
      }
    >
      <header className={reducedMotion ? undefined : "sticky top-[30svh]"}>
        <div className="relative w-fit">
          <Title style={reducedMotion ? undefined : { fontSize: nameSize }}>
            Tolu Stevens
          </Title>
          <div
            className={`absolute top-1/2 left-full ml-3 -translate-y-1/2 sm:ml-6 ${reducedMotion ? "" : "max-[360px]:top-auto max-[360px]:bottom-full max-[360px]:left-0 max-[360px]:mb-4 max-[360px]:ml-0 max-[360px]:translate-y-0"}`}
            style={{ fontSize: nameSize }}
          >
            <Portrait photos={portraits} />
          </div>
        </div>
        <Text
          variant="role"
          className="mt-3"
          style={reducedMotion ? undefined : { fontSize: roleSize }}
        >
          Software Engineer
        </Text>
        <Text variant="lead" className="mt-6">
          I build thoughtful products and reliable systems.
        </Text>
        <TagGroup tags={tags} className="mt-4" />
      </header>
    </section>
  );
}
