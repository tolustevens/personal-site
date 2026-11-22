import { LegalList, LegalPage, LegalSection } from "@/components/LegalPage";
import { Text } from "@/components/Typography";

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy – Insightful">
      <Text>Last updated: April 2026</Text>

      <Text>
        Insightful (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy.
        This Privacy Policy explains how we collect, use, and protect your information when you
        use our mobile application.
      </Text>

      <LegalSection title="Information We Collect">
        <Text>We may collect the following types of information:</Text>

        <Text>Personal Information</Text>
        <LegalList>
          <li>Email address (used for account creation and login)</li>
        </LegalList>

        <Text>Usage Data</Text>
        <LegalList>
          <li>App interactions (such as screens viewed and features used)</li>
          <li>Diagnostic data (such as crash logs and performance data)</li>
        </LegalList>

        <Text>Purchase Information</Text>
        <LegalList>
          <li>Subscription and purchase data processed via third-party services</li>
        </LegalList>

        <Text>Device Information</Text>
        <LegalList>
          <li>Device identifiers and basic device information</li>
        </LegalList>
      </LegalSection>

      <LegalSection title="How We Use Your Information">
        <LegalList>
          <li>Provide and maintain the app</li>
          <li>Manage user accounts</li>
          <li>Process subscriptions and purchases</li>
          <li>Improve app performance and user experience</li>
          <li>Monitor usage and fix issues</li>
        </LegalList>
      </LegalSection>

      <LegalSection title="Third-Party Services">
        <Text>We may use third-party services that collect and process data, including:</Text>
        <LegalList>
          <li>Firebase (authentication and analytics)</li>
          <li>RevenueCat (subscription management)</li>
        </LegalList>
        <Text>
          These services may collect information in accordance with their own privacy policies.
        </Text>
      </LegalSection>

      <LegalSection title="Data Sharing">
        <Text>We do not sell your personal data.</Text>
        <Text>
          We may share data with trusted third-party services only as necessary to operate the
          app (e.g. authentication, analytics, and subscriptions).
        </Text>
      </LegalSection>

      <LegalSection title="Data Security">
        <Text>
          We take reasonable measures to protect your data. All data transmitted from the app is
          encrypted in transit using standard security protocols.
        </Text>
      </LegalSection>

      <LegalSection title="Data Retention">
        <Text>
          We retain your data only as long as necessary to provide the app’s functionality and
          comply with legal obligations.
        </Text>
      </LegalSection>

      <LegalSection title="Your Rights">
        <Text>
          You may request deletion of your account and associated data at any time by contacting
          us at:
        </Text>
        <Text>t.kenny.stevens@gmail.com</Text>
      </LegalSection>

      <LegalSection title="Children&apos;s Privacy">
        <Text>
          Insightful is not intended for users under the age of 18. We do not knowingly collect
          data from children.
        </Text>
      </LegalSection>

      <LegalSection title="Changes to This Policy">
        <Text>
          We may update this Privacy Policy from time to time. Updates will be reflected on this
          page.
        </Text>
      </LegalSection>

      <LegalSection title="Contact Us">
        <Text>If you have any questions about this Privacy Policy, you can contact us at:</Text>
        <Text>t.kenny.stevens@gmail.com</Text>
      </LegalSection>
    </LegalPage>
  );
}
