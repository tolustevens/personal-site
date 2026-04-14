export default function PrivacyPolicy() {
  return (
    <div
      className="max-w-md md:max-w-md lg:max-w-2xl mx-auto min-h-screen flex flex-col justify-center space-y-3 sm:space-y-4 md:space-y-6 mb-16 md:my-16"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight">
        Privacy Policy – Insightful
      </h2>

      <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-[rgb(134,134,134)]">
        <p className="leading-relaxed">
          Last updated: April 2026
        </p>

        <p className="leading-relaxed">
          Insightful ("we", "our", or "us") respects your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our mobile application.
        </p>

        <div className="space-y-2">
          <h3 className="font-bold">Information We Collect</h3>

          <p>We may collect the following types of information:</p>

          <p className="font-semibold">Personal Information</p>
          <ul className="list-disc list-inside">
            <li>Email address (used for account creation and login)</li>
          </ul>

          <p className="font-bold">Usage Data</p>
          <ul className="list-disc list-inside">
            <li>App interactions (such as screens viewed and features used)</li>
            <li>Diagnostic data (such as crash logs and performance data)</li>
          </ul>

          <p className="font-bold">Purchase Information</p>
          <ul className="list-disc list-inside">
            <li>Subscription and purchase data processed via third-party services</li>
          </ul>

          <p className="font-bold">Device Information</p>
          <ul className="list-disc list-inside">
            <li>Device identifiers and basic device information</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="font-bold">How We Use Your Information</h3>
          <ul className="list-disc list-inside">
            <li>Provide and maintain the app</li>
            <li>Manage user accounts</li>
            <li>Process subscriptions and purchases</li>
            <li>Improve app performance and user experience</li>
            <li>Monitor usage and fix issues</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="font-bold">Third-Party Services</h3>
          <p>
            We may use third-party services that collect and process data, including:
          </p>
          <ul className="list-disc list-inside">
            <li>Firebase (authentication and analytics)</li>
            <li>RevenueCat (subscription management)</li>
          </ul>
          <p>
            These services may collect information in accordance with their own privacy policies.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-bold">Data Sharing</h3>
          <p>
            We do not sell your personal data.
          </p>
          <p>
            We may share data with trusted third-party services only as necessary to operate the app (e.g. authentication, analytics, and subscriptions).
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-bold">Data Security</h3>
          <p>
            We take reasonable measures to protect your data. All data transmitted from the app is encrypted in transit using standard security protocols.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-bold">Data Retention</h3>
          <p>
            We retain your data only as long as necessary to provide the app’s functionality and comply with legal obligations.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-bold">Your Rights</h3>
          <p>
            You may request deletion of your account and associated data at any time by contacting us at:
          </p>
          <p className="text-[rgb(200,200,200)]">t.kenny.stevens@gmail.com</p>
        </div>

        <div className="space-y-2">
          <h3 className="font-bold">Children's Privacy</h3>
          <p>
            Insightful is not intended for users under the age of 18. We do not knowingly collect data from children.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-bold">Changes to This Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. Updates will be reflected on this page.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-bold">Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, you can contact us at:
          </p>
          <p className="text-[rgb(200,200,200)]">t.kenny.stevens@gmail.com</p>
        </div>
      </div>
    </div>
  )
}