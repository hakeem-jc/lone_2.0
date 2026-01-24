import { FC } from "react";

const PrivacyModalContent: FC = () => {
  return (
    <section className="overflow-auto">
      <div className="bg-secondary rounded-lg p-8 md:p-12">
        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-gray-400 mb-8">Last updated: January 24, 2026</p>

        <div className="space-y-8 text-gray-300">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              1. Introduction
            </h2>
            <p className="leading-relaxed">
              Welcome to our loan application service. We are committed to
              protecting your personal information and your right to privacy.
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you use our services. Please read
              this privacy policy carefully. If you do not agree with the terms
              of this privacy policy, please do not access the site or use our
              services.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. Information We Collect
            </h2>
            <p className="leading-relaxed mb-4">
              We collect personal information that you voluntarily provide to us
              when you apply for a loan, express an interest in obtaining
              information about us or our products and services, or otherwise
              contact us.
            </p>
            <div className="ml-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                Personal Information
              </h3>
              <p className="leading-relaxed mb-3">
                The personal information we collect may include:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Name (first, middle, and last)</li>
                <li>Date of birth</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Residential address (street, city, state, zip code)</li>
                <li>Housing status</li>
                <li>Monthly income and rent/mortgage payments</li>
                <li>Employment information</li>
                <li>Government-issued identification documents</li>
                <li>Bank account information</li>
                <li>Credit history and score</li>
              </ul>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              3. How We Use Your Information
            </h2>
            <p className="leading-relaxed mb-3">
              We use the information we collect or receive:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>To process your loan application and verify your identity</li>
              <li>To assess your creditworthiness and ability to repay</li>
              <li>To communicate with you about your application and loan</li>
              <li>To comply with legal and regulatory requirements</li>
              <li>To protect against fraud and unauthorized transactions</li>
              <li>To improve our services and customer experience</li>
              <li>
                To send you administrative information, such as updates to our
                terms and policies
              </li>
            </ul>
          </section>

          {/* Credit Check Authorization */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. Credit Check Authorization
            </h2>
            <p className="leading-relaxed mb-3">
              By submitting a loan application, you authorize us to:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                Obtain your credit report from one or more credit reporting
                agencies
              </li>
              <li>
                Perform a hard inquiry on your credit report, which may
                temporarily affect your credit score
              </li>
              <li>Verify the information you provided in your application</li>
              <li>
                Share your credit information with our lending partners if
                necessary
              </li>
            </ul>
          </section>

          {/* Information Sharing and Disclosure */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              5. Information Sharing and Disclosure
            </h2>
            <p className="leading-relaxed mb-3">
              We may share your information in the following situations:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong className="text-white">With Service Providers:</strong>{" "}
                We may share your information with third-party vendors and
                service providers who perform services on our behalf, such as
                payment processing, data analysis, email delivery, and credit
                reporting.
              </li>
              <li>
                <strong className="text-white">For Legal Compliance:</strong> We
                may disclose your information where required by law or to
                respond to legal processes.
              </li>
              <li>
                <strong className="text-white">Business Transfers:</strong> We
                may share or transfer your information in connection with, or
                during negotiations of, any merger, sale of company assets,
                financing, or acquisition.
              </li>
              <li>
                <strong className="text-white">With Your Consent:</strong> We
                may disclose your information for any other purpose with your
                consent.
              </li>
            </ul>
            <p className="leading-relaxed mt-4">
              We do not sell your personal information to third parties for
              their marketing purposes.
            </p>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              6. Data Security
            </h2>
            <p className="leading-relaxed">
              We implement appropriate technical and organizational security
              measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction. These measures
              include encryption, secure servers, and regular security
              assessments. However, no method of transmission over the internet
              or electronic storage is 100% secure, and we cannot guarantee
              absolute security.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              7. Data Retention
            </h2>
            <p className="leading-relaxed">
              We will retain your personal information only for as long as
              necessary to fulfill the purposes outlined in this privacy policy,
              unless a longer retention period is required or permitted by law.
              This typically includes the duration of your loan plus seven years
              for compliance with financial regulations.
            </p>
          </section>

          {/* Your Privacy Rights */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              8. Your Privacy Rights
            </h2>
            <p className="leading-relaxed mb-3">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong className="text-white">Right to Access:</strong> You can
                request copies of your personal information.
              </li>
              <li>
                <strong className="text-white">Right to Rectification:</strong>{" "}
                You can request correction of inaccurate or incomplete
                information.
              </li>
              <li>
                <strong className="text-white">Right to Erasure:</strong> You
                can request deletion of your personal information, subject to
                legal obligations.
              </li>
              <li>
                <strong className="text-white">
                  Right to Restrict Processing:
                </strong>{" "}
                You can request that we limit how we use your information.
              </li>
              <li>
                <strong className="text-white">
                  Right to Data Portability:
                </strong>{" "}
                You can request transfer of your information to another
                organization.
              </li>
              <li>
                <strong className="text-white">Right to Object:</strong> You can
                object to our processing of your information.
              </li>
            </ul>
            <p className="leading-relaxed mt-4">
              To exercise these rights, please contact us at{" "}
              <a
                href="mailto:privacy@example.com"
                className="text-blue-500 hover:underline"
              >
                privacy@example.com
              </a>
              .
            </p>
          </section>

          {/* Cookies and Tracking */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              9. Cookies and Tracking Technologies
            </h2>
            <p className="leading-relaxed">
              We use cookies and similar tracking technologies to track activity
              on our service and store certain information. You can instruct
              your browser to refuse all cookies or to indicate when a cookie is
              being sent. However, if you do not accept cookies, you may not be
              able to use some portions of our service.
            </p>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              10. Third-Party Websites
            </h2>
            <p className="leading-relaxed">
              Our service may contain links to third-party websites. We are not
              responsible for the privacy practices or content of these
              third-party sites. We encourage you to read the privacy policies
              of any third-party sites you visit.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              11. Children's Privacy
            </h2>
            <p className="leading-relaxed">
              Our services are not intended for individuals under the age of 18.
              We do not knowingly collect personal information from children. If
              you are a parent or guardian and believe your child has provided
              us with personal information, please contact us so we can delete
              such information.
            </p>
          </section>

          {/* Changes to Privacy Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              12. Changes to This Privacy Policy
            </h2>
            <p className="leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the "Last updated" date. You are advised to review
              this Privacy Policy periodically for any changes. Changes to this
              Privacy Policy are effective when they are posted on this page.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              13. Contact Us
            </h2>
            <p className="leading-relaxed mb-3">
              If you have questions or comments about this Privacy Policy,
              please contact us at:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="leading-relaxed">
                <strong className="text-white">Email:</strong>{" "}
                <a
                  href="mailto:privacy@example.com"
                  className="text-blue-500 hover:underline"
                >
                  privacy@example.com
                </a>
              </p>
              <p className="leading-relaxed">
                <strong className="text-white">Phone:</strong> +1 (555) 123-4567
              </p>
              <p className="leading-relaxed">
                <strong className="text-white">Address:</strong> 123 Main
                Street, Suite 100, New York, NY 10001
              </p>
            </div>
          </section>

          {/* Consent */}
          <section className="bg-blue-900/20 border border-blue-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Your Consent
            </h2>
            <p className="leading-relaxed">
              By using our service and submitting a loan application, you
              acknowledge that you have read and understood this Privacy Policy
              and consent to the collection, use, and disclosure of your
              personal information as described herein.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default PrivacyModalContent;
