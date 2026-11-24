import ExperienceItem from "@/components/ExperienceItem";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Page from "@/components/Page";
import { Heading, Text } from "@/components/Typography";

export default function Home() {
  return (
    <Page>
      <Hero />

      <div className="mt-16 max-w-2xl space-y-16 sm:mt-20 sm:space-y-20">
        <section aria-label="About" className="space-y-5">
          <Text>
            Hi, I’m Tolu. I’m a software engineer with five years of experience
            building apps, financial systems and the tools behind them. I enjoy
            working across the stack, from the interface people use to the APIs
            and services that make it work.
          </Text>
          <Text>
            Right now, I’m building Insightful, a mobile app for daily insights
            and reflection. Previously, I worked at Zumo and BC Bitcoin, building
            financial dashboards, backend services and trading automation.
          </Text>
        </section>

        <section aria-labelledby="experience-heading">
          <Heading id="experience-heading">Experience</Heading>
          <div className="mt-8 space-y-12 sm:mt-10 sm:space-y-14">
            <ExperienceItem
              date="Jan 2026 — Present"
              title="Founder & Software Engineer · Insightful"
              description="Building a React Native mobile app, a Next.js backend and an admin dashboard. Designed typed REST APIs with validation and authentication, and integrated user accounts and subscriptions."
              tags={[
                "TypeScript",
                "React Native",
                "Next.js",
                "MongoDB",
                "Firebase",
                "RevenueCat",
              ]}
            />
            <ExperienceItem
              date="Apr 2022 — Dec 2024"
              title="Software Engineer · Zumo"
              href="https://zumo.co.uk/"
              description="Refactored a legacy financial administration system and built its Material UI dashboard. Improved data fetching for large financial datasets with keyset pagination, and worked across Node.js and PHP APIs and services."
              tags={["React", "Material UI", "Next.js", "Node.js", "PHP"]}
            />
            <ExperienceItem
              date="Oct 2020 — Apr 2022"
              title="Sole Full Stack Developer · BC Bitcoin"
              href="https://bcbitcoin.co.uk/"
              description="Built and deployed an automated trading system that replaced manual processes and handled over £1M in annual transaction volume. Developed internal financial APIs, reporting tools and features across the company website."
              tags={["PHP", "REST APIs", "Python"]}
            />
          </div>
        </section>
        <Footer />
      </div>
    </Page>
  );
}
