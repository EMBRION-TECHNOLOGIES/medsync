import Link from 'next/link';
import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata = {
  title: 'Privacy Policy',
  description:
    'TeraSync Privacy Policy. How we collect, use, share, and protect your data.',
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      lastUpdated="5 February 2025"
      otherLegalHref="/terms"
      otherLegalLabel="Terms of Service"
    >
      <section aria-labelledby="intro">
        <h2 id="intro">1. Introduction</h2>
        <p>
          This Privacy Policy (&quot;Policy&quot;) explains how TeraSync
          (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses,
          stores, shares, and protects your personal data when you access or
          use the TeraSync mobile application, website, APIs, and related
          services (collectively, the &quot;Platform&quot;).
        </p>
        <p>
          TeraSync is a digital healthcare logistics and management platform
          that enables users to manage prescriptions, order medications,
          connect with pharmacies, and arrange delivery services. The Platform
          also incorporates AI-assisted features for support, reminders, and
          operational assistance.
        </p>
        <p>
          By creating an account or using the Platform, you expressly consent
          to the practices described in this Policy. If you do not agree, do
          not use TeraSync.
        </p>
        <p>
          We comply with applicable data-protection laws, including the Nigeria
          Data Protection Regulation (NDPR), the Nigeria Data Protection Act
          (NDPA), and, where applicable, internationally recognised frameworks
          such as the EU General Data Protection Regulation (GDPR).
        </p>
      </section>

      <section aria-labelledby="controller">
        <h2 id="controller">2. Data Controller</h2>
        <p>The data controller responsible for processing your personal data is:</p>
        <p>
          <strong>TeraSync Technologies Limited (RC: 9210340)</strong>
          <br />
          A private company limited by shares incorporated under the laws of the
          Federal Republic of Nigeria.
        </p>
        <p>
          TeraSync Technologies Limited may engage affiliated companies,
          including Embrion Technologies Limited, as technology, infrastructure,
          or service providers.
        </p>
        <p>
          Email: <a href="mailto:admin@terasync.ng">admin@terasync.ng</a>
          <br />
          Website: <a href="https://terasync.ng">https://terasync.ng</a>
        </p>
      </section>

      <section aria-labelledby="data-we-collect">
        <h2 id="data-we-collect">3. Data We Collect</h2>
        <h3>3.1 Account and Registration Data</h3>
        <ul>
          <li>Email address</li>
          <li>Password (stored only in hashed and encrypted form)</li>
          <li>First name and last name</li>
          <li>Phone number</li>
          <li>User role (e.g. patient, pharmacist, delivery partner)</li>
        </ul>
        <h3>3.2 Profile and Identity Data</h3>
        <ul>
          <li>Date of birth</li>
          <li>Gender</li>
          <li>Address, city, state, country, postal/zip code</li>
          <li>Profile picture (optional)</li>
          <li>Marital status, state of origin</li>
          <li>MedSync ID / TeraSync identifier (where assigned)</li>
        </ul>
        <h3>3.3 Health-Related Data (Sensitive Personal Data)</h3>
        <p>Where voluntarily provided by you, we may process:</p>
        <ul>
          <li>Blood group and genotype</li>
          <li>Allergies</li>
          <li>Medical conditions or health notes</li>
          <li>Medication lists and adherence data</li>
          <li>Prescription images and extracted text (via OCR)</li>
          <li>Information shared with pharmacies or via in-app chat</li>
          <li>Health-related information entered into AI-assisted features</li>
        </ul>
        <p>
          You are not required to provide health data. Submission is entirely
          voluntary and at your discretion.
        </p>
        <h3>3.4 Location Data</h3>
        <p>We may collect approximate or precise location data when you:</p>
        <ul>
          <li>Enable &quot;Find Pharmacy&quot; or nearby pharmacy search</li>
          <li>Use &quot;current location&quot; for delivery</li>
          <li>Save delivery or pickup addresses</li>
        </ul>
        <p>
          Location data is used only for pharmacy discovery, delivery
          estimation, and fulfilment. You may disable location permissions;
          however, some features may be limited.
        </p>
        <h3>3.5 Chat and Messaging Data</h3>
        <ul>
          <li>Messages sent via pharmacy chat</li>
          <li>Messages sent via AI-assisted chat</li>
          <li>Timestamps and conversation metadata required for service operation and support</li>
        </ul>
        <h3>3.6 Order and Transaction Data</h3>
        <ul>
          <li>Medication orders, quantities, pharmacy details, and order status</li>
          <li>Payment metadata (transaction reference, amount, status). Note: We do not store full card details. Payments are processed by third-party payment processors such as Paystack.</li>
          <li>Delivery and dispatch updates from logistics partners</li>
        </ul>
        <h3>3.7 Device and Technical Data</h3>
        <ul>
          <li>Device tokens for push notifications (e.g. Firebase Cloud Messaging)</li>
          <li>IP address, device type, operating system version</li>
          <li>Security logs, error logs, and diagnostics</li>
          <li>Timezone information for scheduling and notifications</li>
        </ul>
        <h3>3.8 Emergency and Insurance Data (Optional)</h3>
        <ul>
          <li>Emergency contact name, phone number, and relationship</li>
          <li>Insurance provider and policy details (where provided)</li>
        </ul>
      </section>

      <section aria-labelledby="lawful-basis">
        <h2 id="lawful-basis">4. Lawful Basis for Processing</h2>
        <p>We process personal data based on one or more of the following lawful bases:</p>
        <ul>
          <li>Consent (particularly for sensitive health data and optional features)</li>
          <li>Performance of a contract (providing Platform services)</li>
          <li>Legitimate interest (security, fraud prevention, service improvement)</li>
          <li>Legal obligation (regulatory and compliance requirements)</li>
        </ul>
      </section>

      <section aria-labelledby="ai-features">
        <h2 id="ai-features">4A. AI-Assisted Features and Automated Processing</h2>
        <p>
          TeraSync uses AI-assisted systems, including conversational tools and
          automated processing, to support features such as reminders,
          prescription handling, chat support, and operational workflows.
        </p>
        <p>You acknowledge and agree that:</p>
        <ul>
          <li>AI systems operate on probabilistic and non-deterministic models</li>
          <li>Outputs may be incomplete, inaccurate, or unsuitable for reliance</li>
          <li>AI features are supportive and informational only</li>
        </ul>
        <p>
          AI outputs do not constitute medical, pharmaceutical, legal, or
          professional advice and must not be relied upon without independent
          verification.
        </p>
      </section>

      <section aria-labelledby="how-we-use">
        <h2 id="how-we-use">5. How We Use Your Data</h2>
        <p>We use your data to:</p>
        <ul>
          <li>Create and manage your account</li>
          <li>Provide prescription upload, OCR, medication ordering, and delivery services</li>
          <li>Show nearby pharmacies and delivery estimates</li>
          <li>Process payments, refunds, and order tracking</li>
          <li>Send notifications (push, email, SMS) for verification, reminders, and updates</li>
          <li>Operate pharmacy chat and AI-assisted features</li>
          <li>Detect fraud, secure the Platform, and enforce our terms</li>
          <li>Improve services using aggregated or anonymised analytics</li>
        </ul>
        <p>We do not sell your personal data for third-party marketing.</p>
      </section>

      <section aria-labelledby="medical-disclaimer">
        <h2 id="medical-disclaimer">6. Medical and Clinical Disclaimer</h2>
        <p>TeraSync:</p>
        <ul>
          <li>Is not a medical device</li>
          <li>Is not a clinical decision support system</li>
          <li>Is not an emergency service</li>
        </ul>
        <p>
          The Platform does not provide diagnosis, treatment, or medical advice.
          All health-related content, AI outputs, reminders, and pharmacy
          interactions are provided for informational and logistical purposes
          only.
        </p>
        <p>
          You are solely responsible for consulting qualified healthcare
          professionals for medical decisions.
        </p>
      </section>

      <section aria-labelledby="third-party">
        <h2 id="third-party">7. Third-Party Services and Sharing</h2>
        <p>
          We share data only as necessary to operate the Platform. Depending on
          context, third parties may act as data processors or independent
          controllers under their own privacy policies.
        </p>
        <p>Key providers include:</p>
        <ul>
          <li>Firebase (Google) – authentication, push notifications</li>
          <li>Paystack – payment processing</li>
          <li>Kwik / Gokada / dispatch partners – delivery fulfilment</li>
          <li>Cloudinary / AWS S3 – storage of uploaded files and images</li>
          <li>SendGrid / ZeptoMail – transactional emails</li>
          <li>Termii (or similar) – SMS notifications</li>
          <li>OpenAI – AI-assisted chat and processing</li>
          <li>Google Cloud Vision (or similar) – OCR for prescription images</li>
          <li>Seamfix (or similar) – identity verification (where applicable)</li>
          <li>Hosting providers (e.g. Railway, Render) – infrastructure and databases</li>
        </ul>
        <p>
          We may also disclose data where required by law, court order, or to
          protect rights, safety, or property.
        </p>
      </section>

      <section aria-labelledby="international">
        <h2 id="international">8. International Data Transfers</h2>
        <p>
          Your data may be processed or stored outside Nigeria where our
          service providers operate. Where this occurs, we apply appropriate
          safeguards consistent with NDPR, NDPA, and applicable
          data-protection principles.
        </p>
        <p>By using TeraSync, you consent to such international transfers.</p>
      </section>

      <section aria-labelledby="retention">
        <h2 id="retention">9. Data Retention and Deletion</h2>
        <p>We retain personal data only for as long as:</p>
        <ul>
          <li>Your account remains active</li>
          <li>Necessary to provide services</li>
          <li>Required for legal, regulatory, or dispute-resolution purposes</li>
        </ul>
        <p>
          Following account deletion or a valid request, we will delete or
          anonymise personal data typically within 30–90 days, unless retention
          is legally required.
        </p>
        <p>
          Deletion requests may be made via the app or by contacting{' '}
          <a href="mailto:admin@terasync.ng">admin@terasync.ng</a>.
        </p>
      </section>

      <section aria-labelledby="rights">
        <h2 id="rights">10. Your Rights</h2>
        <p>Subject to applicable law, you may:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion (subject to legal exceptions)</li>
          <li>Restrict or object to certain processing</li>
          <li>Request data portability (where feasible)</li>
          <li>Withdraw consent where applicable</li>
          <li>Lodge a complaint with a supervisory authority</li>
        </ul>
        <p>
          Requests should be sent to{' '}
          <a href="mailto:admin@terasync.ng">admin@terasync.ng</a>.
        </p>
      </section>

      <section aria-labelledby="security">
        <h2 id="security">11. Security</h2>
        <p>
          We implement reasonable technical and organisational safeguards,
          including encryption, access controls, and secure hosting. No system
          is completely secure; you are responsible for safeguarding your
          login credentials.
        </p>
      </section>

      <section aria-labelledby="children">
        <h2 id="children">12. Children and Age Restriction (18+)</h2>
        <p>TeraSync is intended strictly for users aged 18 years and above.</p>
        <p>
          We do not permit independent accounts for minors. Any access by a
          minor must occur only through a parent or legal guardian account,
          where expressly supported.
        </p>
        <p>
          By using TeraSync, you represent that you are at least 18 years old.
          We disclaim liability arising from misrepresentation of age.
        </p>
      </section>

      <section aria-labelledby="liability">
        <h2 id="liability">13. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, TeraSync Technologies Limited
          and TeraSync shall not be liable for:
        </p>
        <ul>
          <li>Medical outcomes or health decisions</li>
          <li>AI errors or omissions</li>
          <li>Loss of data, profits, or business</li>
          <li>Indirect, incidental, consequential, or punitive damages</li>
          <li>Failures of third-party services</li>
        </ul>
      </section>

      <section aria-labelledby="indemnity">
        <h2 id="indemnity">14. User Indemnity</h2>
        <p>
          You agree to indemnify and hold harmless TeraSync Technologies
          Limited, TeraSync, its directors, officers, employees, and partners
          from any claims, losses, or liabilities arising from:
        </p>
        <ul>
          <li>Your misuse of the Platform</li>
          <li>Inaccurate or unlawful data submission</li>
          <li>Reliance on AI outputs</li>
          <li>Violation of law or third-party rights</li>
        </ul>
      </section>

      <section aria-labelledby="changes">
        <h2 id="changes">15. Changes to This Policy</h2>
        <p>
          We may update this Policy from time to time. Updates will be posted
          at <a href="https://terasync.ng/privacy">https://terasync.ng/privacy</a>.
        </p>
        <p>
          Continued use of the Platform constitutes acceptance of the updated
          Policy.
        </p>
      </section>

      <section aria-labelledby="governing-law">
        <h2 id="governing-law">16. Governing Law</h2>
        <p>
          This Policy is governed by and construed in accordance with the laws
          of the Federal Republic of Nigeria.
        </p>
        <p>
          <Link href="/terms">Terms of Service</Link>
        </p>
      </section>
    </LegalPageLayout>
  );
}
