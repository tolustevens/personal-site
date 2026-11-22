import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Page from "@/components/Page";
import { Heading, Title } from "@/components/Typography";

type LegalContentProps = {
  title: string;
  children: ReactNode;
};

export function LegalPage({ title, children }: LegalContentProps) {
  return (
    <Page width="reading" className="space-y-5">
      <Title size="page">{title}</Title>
      {children}
    </Page>
  );
}

export function LegalSection({ title, children }: LegalContentProps) {
  return (
    <section className="space-y-5">
      <Heading size="small">{title}</Heading>
      {children}
    </section>
  );
}

export function LegalList({ className = "", ...props }: ComponentPropsWithoutRef<"ul">) {
  return (
    <ul
      {...props}
      className={`list-disc pl-6 text-base leading-relaxed text-secondary sm:text-lg ${className}`}
    />
  );
}
