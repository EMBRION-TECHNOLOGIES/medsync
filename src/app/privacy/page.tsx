import Link from 'next/link';
import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata = {
  title: 'Privacy Policy',
  description:
    'TeraSync Privacy Policy. How we collect, use, and protect your data.',
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
          This Privacy Policy (&quot;Policy&quot;) describes how TeraSync
          (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses,
          stores, and protects your personal data when you use the TeraSync
          mobile application and related services. TeraSync is a healthcare
          management platform that connects patients, pharmacies, and delivery
          partners for medication ordering, prescription management, and
          delivery.
        </p>
        <p>
          By using TeraSync, you consent to the practices described in this
          Policy. If you do not agree, please do not use our services.
        </p>
        <p>
          We comply with applicable data protection laws, including the Nigeria
          Data Protection Regulation (NDPR) and, where applicable, the EU
          General Data Protection Regulation (GDPR).
        </p>
      </section>

      <section aria-labelledby="controller">
        <h2 id="controller">2. Data Controller</h2>
        <p>The data controller responsible for your personal data is:</p>
        <p>
          <strong>TeraSync</strong>
          <br />
          Email: <a href="mailto:admin@terasync.ng">admin@terasync.ng</a>
          <br />
          Website: <a href="https://terasync.ng">https://terasync.ng</a>
        </p>
      </section>

      <section aria-labelledby="data-we-collect">
        <h2 id="data-we-collect">3. Data We Collect</h2>
        <h3>3.1 Account and registration data</h3>
        <ul>
          <li>Email address</li>
          <li>Password (stored in hashed form only)</li>
          <li>First name, last name</li>
          <li>Phone number</li>
          <li>Role (e.g. patient, pharmacist) where applicable</li>
        </ul>
        <h3>3.2 Profile and identity data</h3>
        <ul>
          <li>Date of birth, gender</li>
          <li>Address, city, state, country, postal/zip code</li>
          <li>Profile picture (optional)</li>
          <li>Marital status, state of origin</li>
          <li>MedSync ID / TeraSync identifier (where assigned)</li>
        </ul>
        <h3>3.3 Health-related data (sensitive)</h3>
        <ul>
          <li>Blood group, genotype</li>
          <li>Allergies</li>
          <li>Medical conditions and health records you choose to add</li>
          <li>Medication lists and adherence information</li>
          <li>Prescription images and text extracted from them (e.g. via OCR)</li>
          <li>
            Information you provide in chat with the in-app assistant or
            pharmacy
          </li>
        </ul>
        <h3>3.4 Location data</h3>
        <ul>
          <li>
            Approximate or precise location when you enable &quot;Find
            Pharmacy&quot; or set/use delivery address
          </li>
          <li>Delivery and pickup addresses you save</li>
        </ul>
        <p>
          We use location only for: showing nearby pharmacies, estimating
          delivery distance/time, and fulfilling delivery. You can deny or
          revoke location permission; some features may then be limited.
        </p>
        <h3>3.5 Chat and messaging data</h3>
        <ul>
          <li>Messages in AI healthcare assistant chat and pharmacy/patient chat</li>
          <li>Timestamps and conversation history for orders and support</li>
        </ul>
        <h3>3.6 Order and transaction data</h3>
        <ul>
          <li>Order details (medications, quantities, pharmacy, status)</li>
          <li>
            Payment metadata (e.g. transaction reference, amount, status) — we
            do not store your full card number; payments are processed by
            Paystack
          </li>
          <li>Delivery status and dispatch-related information</li>
        </ul>
        <h3>3.7 Device and technical data</h3>
        <ul>
          <li>Device tokens for push notifications (e.g. Firebase Cloud Messaging)</li>
          <li>IP address, device type, technical logs for security and operation</li>
          <li>Timezone for scheduling and notifications</li>
        </ul>
        <h3>3.8 Emergency and insurance (optional)</h3>
        <ul>
          <li>Emergency contact name, phone, relationship</li>
          <li>Insurance provider, policy number, group number (if you provide)</li>
        </ul>
      </section>

      <section aria-labelledby="how-we-use">
        <h2 id="how-we-use">4. How We Use Your Data</h2>
        <p>We use your data to:</p>
        <ul>
          <li>Create and manage your account and profile</li>
          <li>Provide medication ordering, prescription upload (including OCR), and delivery</li>
          <li>Show nearby pharmacies and delivery estimates (with your consent)</li>
          <li>Process payments (via Paystack) and manage orders and refunds</li>
          <li>Send push notifications, email or SMS (e.g. verification, order notifications)</li>
          <li>Operate in-app and pharmacy chat, and AI-assisted features</li>
          <li>Comply with legal obligations, enforce our terms, and protect against fraud</li>
          <li>Improve our services (e.g. analytics in aggregated form where possible)</li>
        </ul>
        <p>We do not sell your personal data to third parties for their marketing.</p>
        <h3>4.1 AI and health data — important disclaimer</h3>
        <p>
          TeraSync does not provide medical diagnosis or treatment. Any
          AI-assisted features (including in-app chat and suggestions) are for
          informational and organisational purposes only and do not replace
          professional medical advice. Users remain responsible for their own
          healthcare decisions. Pharmacies and qualified healthcare
          professionals are the source of care; the app is a platform to
          facilitate ordering and delivery. Users should consult qualified
          healthcare professionals before making medical decisions.
        </p>
      </section>

      <section aria-labelledby="third-party">
        <h2 id="third-party">5. Third-Party Services and Sharing</h2>
        <p>
          We share or allow access to data only as needed to run the service.
          Each provider has its own privacy policy. These third parties act as
          data processors or independent controllers under their own privacy
          policies and process data only for the purposes described in this
          Policy.
        </p>
        <ul>
          <li>
            <strong>Firebase (Google):</strong> account authentication, push
            notifications.{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Privacy Policy
            </a>
          </li>
          <li><strong>Paystack:</strong> payment processing (transaction details and metadata only)</li>
          <li><strong>Kwik and other dispatch partners (e.g. Gokada):</strong> delivery and tracking</li>
          <li><strong>Cloudinary and/or AWS S3:</strong> storage of profile and prescription images</li>
          <li><strong>SendGrid, Zeptomail, or similar:</strong> transactional emails</li>
          <li><strong>Termii or similar:</strong> SMS (e.g. OTP, order/delivery notifications)</li>
          <li><strong>OpenAI:</strong> AI-powered chat and related features</li>
          <li><strong>Google Cloud Vision (or similar):</strong> OCR for prescription images</li>
          <li><strong>Seamfix (or similar):</strong> identity verification where offered</li>
          <li><strong>Hosting (e.g. Railway, Render):</strong> backend and databases</li>
        </ul>
        <p>
          We may also disclose data where required by law, court order, or to
          protect rights, safety, or property.
        </p>
      </section>

      <section aria-labelledby="retention">
        <h2 id="retention">6. Data Retention and Deletion</h2>
        <ul>
          <li>
            We retain your data for as long as your account is active and as
            needed to provide the service, comply with law, resolve disputes,
            and enforce our agreements.
          </li>
          <li>
            After account closure or deletion request, we will delete or
            anonymise your personal data typically within 30–90 days, unless
            retention is required by law. We may retain certain data longer for
            legal, regulatory, or legitimate business purposes.
          </li>
          <li>
            You may request deletion via the app (e.g. Settings) or by
            contacting us at{' '}
            <a href="mailto:admin@terasync.ng">admin@terasync.ng</a>. We will
            process requests in line with NDPR and our internal procedures.
          </li>
        </ul>
      </section>

      <section aria-labelledby="rights">
        <h2 id="rights">7. Your Rights (NDPR and Similar Laws)</h2>
        <p>
          Depending on applicable law (including NDPR and, where applicable,
          GDPR), you may have the right to:
        </p>
        <ul>
          <li>Access the personal data we hold about you</li>
          <li>Correct or update inaccurate data</li>
          <li>Request deletion of your data (subject to legal exceptions)</li>
          <li>Object to or restrict certain processing</li>
          <li>Data portability (where technically feasible)</li>
          <li>Withdraw consent where processing is based on consent</li>
          <li>Lodge a complaint with a supervisory authority</li>
        </ul>
        <p>
          To exercise these rights, contact us at{' '}
          <a href="mailto:admin@terasync.ng">admin@terasync.ng</a>. We will
          respond within the timeframe required by applicable law.
        </p>
      </section>

      <section aria-labelledby="security">
        <h2 id="security">8. Security</h2>
        <p>
          We use technical and organisational measures (e.g. encryption, access
          controls, secure hosting) to protect your data. No system is
          completely secure; we encourage you to keep your login details safe
          and use a strong password.
        </p>
      </section>

      <section aria-labelledby="children">
        <h2 id="children">9. Children</h2>
        <p>
          TeraSync is not directed at children under 18. We do not knowingly
          collect personal data from children. If you believe we have collected
          data from a child, please contact us at{' '}
          <a href="mailto:admin@terasync.ng">admin@terasync.ng</a> so we can
          delete it.
        </p>
      </section>

      <section aria-labelledby="changes">
        <h2 id="changes">10. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will post the
          updated version on this page and, where required by law, notify you
          (e.g. by in-app notice or email). Continued use of TeraSync after
          changes constitutes acceptance of the updated Policy.
        </p>
      </section>

      <section aria-labelledby="contact">
        <h2 id="contact">11. Contact</h2>
        <p>For privacy-related questions, requests, or complaints:</p>
        <p>
          Email: <a href="mailto:admin@terasync.ng">admin@terasync.ng</a>
          <br />
          Website: <a href="https://terasync.ng">https://terasync.ng</a>
        </p>
        <p>
          <Link href="/terms">Terms of Service</Link>
        </p>
      </section>
    </LegalPageLayout>
  );
}
