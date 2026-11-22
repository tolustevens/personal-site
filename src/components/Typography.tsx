import type { ComponentPropsWithoutRef } from "react";

const titleStyles = {
  display: "text-4xl leading-tight font-semibold tracking-tight sm:text-5xl lg:text-6xl",
  page: "text-3xl leading-tight font-semibold tracking-tight sm:text-5xl",
};

type TitleProps = ComponentPropsWithoutRef<"h1"> & {
  size?: keyof typeof titleStyles;
};

export function Title({ size = "display", className = "", ...props }: TitleProps) {
  return <h1 {...props} className={`${titleStyles[size]} text-primary ${className}`} />;
}

const headingStyles = {
  section: "text-2xl tracking-tight sm:text-3xl",
  item: "text-xl sm:text-2xl",
  small: "text-lg",
};

type HeadingProps = ComponentPropsWithoutRef<"h2"> & {
  as?: "h2" | "h3";
  size?: keyof typeof headingStyles;
};

export function Heading({
  as: Element = "h2",
  size = "section",
  className = "",
  ...props
}: HeadingProps) {
  return (
    <Element
      {...props}
      className={`leading-snug font-semibold text-primary ${headingStyles[size]} ${className}`}
    />
  );
}

const textStyles = {
  body: "text-base leading-relaxed text-secondary sm:text-lg",
  meta: "text-sm leading-relaxed text-secondary",
  role: "text-xl leading-relaxed text-accent sm:text-2xl",
  lead: "max-w-sm text-lg leading-relaxed text-secondary",
};

type TextProps = ComponentPropsWithoutRef<"p"> & {
  variant?: keyof typeof textStyles;
};

export function Text({ variant = "body", className = "", ...props }: TextProps) {
  return <p {...props} className={`${textStyles[variant]} ${className}`} />;
}
