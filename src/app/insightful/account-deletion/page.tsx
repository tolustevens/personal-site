import { LegalList, LegalPage, LegalSection } from "@/components/LegalPage";
import { Text } from "@/components/Typography";

export default function AccountDeletion() {
  return (
    <LegalPage title="Account Deletion – Insightful">
      <Text>Last updated: April 2026</Text>

      <Text>
        If you would like to request deletion of your Insightful account and associated data,
        please follow the steps below.
      </Text>

      <LegalSection title="How to Request Account Deletion">
        <Text>To request deletion of your account, please email:</Text>

        <Text>t.kenny.stevens@gmail.com</Text>

        <Text>Include the following information in your request:</Text>

        <LegalList>
          <li>The email address associated with your account</li>
        </LegalList>

        <Text>We may contact you to verify your identity before processing the request.</Text>
      </LegalSection>

      <LegalSection title="What Happens When You Request Deletion">
        <Text>When your request is processed, we will:</Text>

        <LegalList>
          <li>Delete your account</li>
          <li>Remove associated personal data, including your email and app usage data</li>
        </LegalList>
      </LegalSection>

      <LegalSection title="Data That May Be Retained">
        <Text>
          Some data may be retained where necessary for legal, financial, or security purposes,
          including:
        </Text>

        <LegalList>
          <li>Transaction and purchase records (for billing and compliance)</li>
          <li>Records required to prevent fraud or enforce agreements</li>
        </LegalList>
      </LegalSection>

      <LegalSection title="Processing Time">
        <Text>We aim to process all deletion requests within 7 days.</Text>
      </LegalSection>

      <LegalSection title="Contact">
        <Text>If you have any questions about account deletion, please contact:</Text>

        <Text>t.kenny.stevens@gmail.com</Text>
      </LegalSection>
    </LegalPage>
  );
}
