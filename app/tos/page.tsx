"use client";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const Page = () => {
  return (
    <main className="pt-24">
      <Header />
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-secondary rounded-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-white mb-2">
            Terms of Service
          </h1>
          <p className="text-gray-400 mb-8">Last updated: January 24, 2026</p>

          <div className="space-y-8 text-gray-300">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                1. Agreement to Terms
              </h2>
              <p className="leading-relaxed">
                These Terms of Service constitute a legally binding agreement
                made between you, whether personally or on behalf of an entity
                ("you") and our loan service ("Company", "we", "us", or "our"),
                concerning your access to and use of our loan application
                services. You agree that by accessing the service, you have
                read, understood, and agreed to be bound by all of these Terms
                of Service. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF
                SERVICE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE
                SERVICE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
              </p>
            </section>

            {/* Eligibility */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. Eligibility Requirements
              </h2>
              <p className="leading-relaxed mb-3">
                To use our services and apply for a loan, you must:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Be at least 18 years of age</li>
                <li>
                  Be a legal resident of the United States or other eligible
                  jurisdiction
                </li>
                <li>Have a valid government-issued identification</li>
                <li>Have a valid email address and phone number</li>
                <li>Have a bank account in good standing</li>
                <li>
                  Have the legal capacity to enter into a binding contract
                </li>
                <li>Not be bankrupt or subject to bankruptcy proceedings</li>
              </ul>
              <p className="leading-relaxed mt-4">
                By applying for a loan, you represent and warrant that you meet
                all eligibility requirements.
              </p>
            </section>

            {/* Loan Application Process */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. Loan Application Process
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    3.1 Application Submission
                  </h3>
                  <p className="leading-relaxed">
                    When you submit a loan application through our service, you
                    agree to provide accurate, current, and complete
                    information. Providing false or misleading information may
                    result in immediate termination of your application and
                    potential legal action.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    3.2 Credit Check Authorization
                  </h3>
                  <p className="leading-relaxed">
                    By submitting an application, you authorize us to obtain
                    your credit report and verify your information with credit
                    bureaus and other third parties. This may result in a hard
                    inquiry on your credit report, which could temporarily
                    affect your credit score.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    3.3 No Guarantee of Approval
                  </h3>
                  <p className="leading-relaxed">
                    Submitting a loan application does not guarantee approval.
                    We reserve the right to approve or deny any application at
                    our sole discretion based on creditworthiness, income
                    verification, and other factors.
                  </p>
                </div>
              </div>
            </section>

            {/* Loan Terms */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                4. Loan Terms and Conditions
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    4.1 Loan Agreement
                  </h3>
                  <p className="leading-relaxed">
                    If your application is approved, you will receive a loan
                    agreement detailing the specific terms of your loan,
                    including:
                  </p>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>Principal loan amount</li>
                    <li>Interest rate (if applicable)</li>
                    <li>Administrative fees</li>
                    <li>Repayment schedule and due dates</li>
                    <li>Total amount to be repaid</li>
                    <li>Late payment penalties</li>
                    <li>Early repayment terms</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    4.2 Acceptance of Loan
                  </h3>
                  <p className="leading-relaxed">
                    You must review and electronically accept the loan agreement
                    before funds are disbursed. Your electronic signature
                    constitutes a legally binding acceptance of all loan terms.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    4.3 Disbursement
                  </h3>
                  <p className="leading-relaxed">
                    Upon acceptance of the loan agreement, funds will typically
                    be disbursed to your designated bank account within 1-2
                    business days. The actual disbursement time may vary
                    depending on your bank's processing times.
                  </p>
                </div>
              </div>
            </section>

            {/* Repayment Obligations */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                5. Repayment Obligations
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    5.1 Payment Schedule
                  </h3>
                  <p className="leading-relaxed">
                    You agree to repay the loan according to the payment
                    schedule outlined in your loan agreement. Payments are due
                    on the specified date each month. If the due date falls on a
                    weekend or holiday, payment will be collected on the last
                    business day before the due date.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    5.2 Automatic Payments
                  </h3>
                  <p className="leading-relaxed">
                    By accepting a loan, you authorize us to automatically debit
                    your designated bank account for each scheduled payment. You
                    are responsible for ensuring sufficient funds are available
                    in your account on each payment due date.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    5.3 Late Payments
                  </h3>
                  <p className="leading-relaxed">
                    If a payment is not received by the due date, you may be
                    subject to late fees as specified in your loan agreement.
                    Continued non-payment may result in:
                  </p>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>Additional late fees and penalties</li>
                    <li>Negative impact on your credit score</li>
                    <li>Collection activities</li>
                    <li>Legal action to recover the debt</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    5.4 Early Repayment
                  </h3>
                  <p className="leading-relaxed">
                    You may repay your loan in full at any time without penalty.
                    Early repayment does not reduce or eliminate any
                    administrative fees already charged.
                  </p>
                </div>
              </div>
            </section>

            {/* Fees and Charges */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                6. Fees and Charges
              </h2>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  You agree to pay all fees and charges associated with your
                  loan, including but not limited to:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    <strong className="text-white">Administrative Fee:</strong>{" "}
                    A monthly fee of 5% of the loan amount for loan servicing
                  </li>
                  <li>
                    <strong className="text-white">Late Payment Fee:</strong> A
                    fee charged when payment is not received by the due date
                  </li>
                  <li>
                    <strong className="text-white">
                      Insufficient Funds Fee:
                    </strong>{" "}
                    A fee charged when your bank account has insufficient funds
                    for automatic payment
                  </li>
                  <li>
                    <strong className="text-white">
                      Payment Processing Fee:
                    </strong>{" "}
                    Fees charged by third-party payment processors (if
                    applicable)
                  </li>
                </ul>
                <p className="leading-relaxed mt-4">
                  All fees will be clearly disclosed in your loan agreement
                  before you accept the loan.
                </p>
              </div>
            </section>

            {/* User Responsibilities */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                7. User Responsibilities
              </h2>
              <p className="leading-relaxed mb-3">
                As a user of our service, you agree to:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  Provide accurate and truthful information in your application
                </li>
                <li>
                  Maintain the confidentiality of your account credentials
                </li>
                <li>
                  Notify us immediately of any unauthorized use of your account
                </li>
                <li>
                  Keep your contact information and bank account details up to
                  date
                </li>
                <li>Use the loan funds only for lawful purposes</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>
                  Not use our service for fraudulent or illegal activities
                </li>
              </ul>
            </section>

            {/* Prohibited Activities */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                8. Prohibited Activities
              </h2>
              <p className="leading-relaxed mb-3">
                You may not access or use the service for any purpose other than
                that for which we make the service available. Prohibited
                activities include, but are not limited to:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Submitting multiple applications using false identities</li>
                <li>Providing fraudulent or falsified documents</li>
                <li>
                  Attempting to circumvent our verification or approval
                  processes
                </li>
                <li>Using automated systems or bots to access the service</li>
                <li>
                  Interfering with the security or proper functioning of the
                  service
                </li>
                <li>
                  Using the service to launder money or engage in illegal
                  financial activities
                </li>
                <li>Harassing, threatening, or abusing our staff or agents</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                9. Intellectual Property Rights
              </h2>
              <p className="leading-relaxed">
                Unless otherwise indicated, the service is our proprietary
                property and all source code, databases, functionality,
                software, website designs, audio, video, text, photographs, and
                graphics on the service (collectively, the "Content") are owned
                or controlled by us and are protected by copyright and trademark
                laws. The Content may not be copied, reproduced, distributed,
                republished, downloaded, displayed, posted or transmitted in any
                form or by any means without our prior written permission.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                10. Limitation of Liability
              </h2>
              <p className="leading-relaxed mb-4">
                TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT SHALL WE BE
                LIABLE TO YOU FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO
                LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE
                LOSSES, RESULTING FROM:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  Your access to or use of or inability to access or use the
                  service
                </li>
                <li>
                  Any conduct or content of any third party on the service
                </li>
                <li>
                  Any unauthorized access, use, or alteration of your
                  transmissions or content
                </li>
                <li>
                  Any errors, mistakes, or inaccuracies of content on the
                  service
                </li>
              </ul>
              <p className="leading-relaxed mt-4">
                Our total liability to you for all claims arising from or
                related to the service shall not exceed the amount of fees paid
                by you to us in the twelve (12) months prior to the claim.
              </p>
            </section>

            {/* Indemnification */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                11. Indemnification
              </h2>
              <p className="leading-relaxed">
                You agree to defend, indemnify, and hold us harmless, including
                our subsidiaries, affiliates, and all of our respective
                officers, agents, partners, and employees, from and against any
                loss, damage, liability, claim, or demand, including reasonable
                attorneys' fees and expenses, made by any third party due to or
                arising out of: (1) your use of the service; (2) breach of these
                Terms of Service; (3) any breach of your representations and
                warranties set forth in these Terms of Service; (4) your
                violation of the rights of a third party; or (5) any fraudulent
                or illegal activity.
              </p>
            </section>

            {/* Dispute Resolution */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                12. Dispute Resolution
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    12.1 Informal Resolution
                  </h3>
                  <p className="leading-relaxed">
                    If you have any dispute with us, you agree to first contact
                    us and attempt to resolve the dispute informally by sending
                    a written notice to our customer service department.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    12.2 Arbitration
                  </h3>
                  <p className="leading-relaxed">
                    If we cannot resolve the dispute informally, any legal
                    dispute arising out of or related to these Terms of Service
                    or the service shall be resolved through binding arbitration
                    in accordance with the rules of the American Arbitration
                    Association. The arbitration shall take place in [Your
                    State/Country], and the decision of the arbitrator shall be
                    final and binding.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    12.3 Class Action Waiver
                  </h3>
                  <p className="leading-relaxed">
                    You agree that any dispute resolution proceedings will be
                    conducted only on an individual basis and not in a class,
                    consolidated, or representative action.
                  </p>
                </div>
              </div>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                13. Termination
              </h2>
              <p className="leading-relaxed mb-3">We reserve the right to:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  Terminate or suspend your access to the service immediately,
                  without prior notice or liability, for any reason, including
                  breach of these Terms of Service
                </li>
                <li>Refuse service to anyone for any reason at any time</li>
                <li>
                  Modify or discontinue the service at any time without notice
                </li>
              </ul>
              <p className="leading-relaxed mt-4">
                Termination of your access does not relieve you of your
                obligation to repay any outstanding loan balance.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                14. Governing Law
              </h2>
              <p className="leading-relaxed">
                These Terms of Service and your use of the service are governed
                by and construed in accordance with the laws of [Your
                State/Country], without regard to its conflict of law
                provisions. Our failure to enforce any right or provision of
                these Terms of Service will not be considered a waiver of those
                rights.
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                15. Changes to Terms of Service
              </h2>
              <p className="leading-relaxed">
                We reserve the right, at our sole discretion, to modify or
                replace these Terms of Service at any time. If a revision is
                material, we will provide at least 30 days' notice prior to any
                new terms taking effect. What constitutes a material change will
                be determined at our sole discretion. By continuing to access or
                use our service after any revisions become effective, you agree
                to be bound by the revised terms.
              </p>
            </section>

            {/* Severability */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                16. Severability
              </h2>
              <p className="leading-relaxed">
                If any provision of these Terms of Service is held to be
                unenforceable or invalid, such provision will be changed and
                interpreted to accomplish the objectives of such provision to
                the greatest extent possible under applicable law and the
                remaining provisions will continue in full force and effect.
              </p>
            </section>

            {/* Entire Agreement */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                17. Entire Agreement
              </h2>
              <p className="leading-relaxed">
                These Terms of Service, together with any loan agreement you
                enter into with us, constitute the entire agreement between you
                and us regarding the use of our service and supersede all prior
                and contemporaneous written or oral agreements between you and
                us.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                18. Contact Us
              </h2>
              <p className="leading-relaxed mb-3">
                If you have any questions about these Terms of Service, please
                contact us at:
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="leading-relaxed">
                  <strong className="text-white">Email:</strong>{" "}
                  <a
                    href="mailto:legal@example.com"
                    className="text-blue-500 hover:underline"
                  >
                    legal@example.com
                  </a>
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">Phone:</strong> +1 (555)
                  123-4567
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">Address:</strong> 123 Main
                  Street, Suite 100, New York, NY 10001
                </p>
              </div>
            </section>

            {/* Acknowledgment */}
            <section className="bg-blue-900/20 border border-blue-700 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Acknowledgment
              </h2>
              <p className="leading-relaxed">
                BY USING OUR SERVICE OR APPLYING FOR A LOAN, YOU ACKNOWLEDGE
                THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND
                BY THEM. IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST NOT USE
                OUR SERVICE.
              </p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Page;
