import Image from "next/image";

type PortraitProps = {
  src: string;
  alt: string;
};

export default function Portrait({ src, alt }: PortraitProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={144}
      height={144}
      sizes="(min-width: 640px) 144px, 96px"
      preload
      className="size-24 shrink-0 rounded-full border border-border object-cover sm:size-36"
    />
  );
}
