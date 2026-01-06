import { ReactNode, HTMLAttributes } from "react";

export type BaseProps = {
  id?: string;
  className?: string;
  children?: ReactNode;
} & HTMLAttributes<HTMLElement>;
