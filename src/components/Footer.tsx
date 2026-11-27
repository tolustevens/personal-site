import TextLink from "@/components/TextLink";

export default function Footer() {
  const cvVersion = new Date().toISOString().slice(0, 10);

  return (
    <footer id="links" aria-label="Contact links" className="flex scroll-mt-28 items-center gap-6 sm:gap-8">
      <TextLink href="mailto:tolu.stevens@proton.me">Email</TextLink>
      <TextLink
        href="https://github.com/tolustevens"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </TextLink>
      <TextLink
        href={`/tolu-stevens-cv.pdf?v=${cvVersion}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        CV
      </TextLink>
    </footer>
  );
}
