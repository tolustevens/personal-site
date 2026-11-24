import type { ComponentPropsWithoutRef } from "react";
import Tag from "@/components/Tag";

type TagGroupProps = ComponentPropsWithoutRef<"ul"> & {
  tags: readonly string[];
};

export default function TagGroup({ tags, className = "", ...props }: TagGroupProps) {
  return (
    <ul
      aria-label="Technologies"
      {...props}
      className={`flex flex-wrap gap-2 ${className}`}
    >
      {tags.map((tag) => (
        <li key={tag} className="flex">
          <Tag>{tag}</Tag>
        </li>
      ))}
    </ul>
  );
}
