import TagGroup from "@/components/TagGroup";
import { Heading, Text } from "@/components/Typography";

type ExperienceItemProps = {
  date: string;
  title: string;
  description: string;
  tags: readonly string[];
  href?: string;
};

export default function ExperienceItem({
  date,
  title,
  description,
  tags,
  href,
}: ExperienceItemProps) {
  const content = (
    <>
      <Text variant="meta">{date}</Text>
      <Heading as="h3" size="item" className="mt-2">
        {title}
      </Heading>
      <Text className="mt-3">{description}</Text>
      <TagGroup tags={tags} className="mt-4" />
    </>
  );

  const cardClassName =
    "-mx-4 block rounded-xl border border-transparent p-4 transition-colors duration-200 hover:border-border hover:bg-surface motion-reduce:transition-none sm:-mx-5 sm:p-5";

  return href ? (
    <article>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${cardClassName} cursor-pointer text-primary no-underline focus-visible:border-border focus-visible:bg-surface focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent`}
      >
        {content}
      </a>
    </article>
  ) : (
    <article className={`${cardClassName} cursor-default`}>{content}</article>
  );
}
