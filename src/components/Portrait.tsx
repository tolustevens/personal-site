"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type PortraitPhoto = {
  src: string;
  position?: string;
  offsetX?: number;
};

type PortraitProps = {
  photos: readonly PortraitPhoto[];
  intervalMs?: number;
};

export default function Portrait({ photos, intervalMs = 1000 }: PortraitProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (photos.length < 2) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: number | undefined;

    const start = () => {
      window.clearInterval(timer);
      if (!preference.matches) {
        timer = window.setInterval(
          () => setActive((index) => (index + 1) % photos.length),
          intervalMs,
        );
      }
    };

    preference.addEventListener("change", start);
    start();

    return () => {
      window.clearInterval(timer);
      preference.removeEventListener("change", start);
    };
  }, [photos.length, intervalMs]);

  return (
    <div
      role="img"
      aria-label="Portraits of Tolu Stevens"
      className="relative block size-40 sm:size-[1.5em] overflow-hidden rounded-full border border-border bg-surface"
    >
      {photos.map((photo, index) => (
        <Image
          key={photo.src}
          src={photo.src}
          alt=""
          fill
          sizes="(min-width: 1024px) 240px, (min-width: 640px) 180px, 160px"
          preload={index === 0}
          loading={index === 0 ? undefined : "eager"}
          style={{
            objectPosition: photo.position ?? "50% 80%",
            transform: `translateX(${photo.offsetX ?? 0}%) scale(1.08)`,
            transformOrigin: "50% 0%",
          }}
          className={`pointer-events-none object-cover ${index === active ? "opacity-100" : "opacity-0"}`}
        />
      ))}
    </div>
  );
}
