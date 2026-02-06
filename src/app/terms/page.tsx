import Link from 'next/link';
import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata = {
  title: 'Terms of Service',
  description:
    'TeraSync Terms of Service. Customer agreement for the TeraSync platform.',
};

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      lastUpdated="5 February 2026"
      otherLegalHref="/privacy"
      otherLegalLabel="Privacy Policy"
    >
      <section aria-labelledby="acceptance">
        <h2 id="acceptance">1. Acceptance of Terms</h2>
        <p>
          These Terms of Service (&quot;Terms&quot;) constitute a legally
          binding agreement between you (&quot;User&quot;, &quot;you&quot;,
          &quot;your&quot;) and TeraSync Technologies Limited (RC: 9210340), a
          private company limited by shares incorporated under the laws of the
          Federal Republic of Nigeria, operating the TeraSync platform
          (&quot;TeraSync&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;).
          TeraSync Technologies Limited may engage affiliated companies,
          including Embrion Technologies Limited, as technology, infrastructure,
          or service providers.
        </p>
        <p>
          These Terms govern your access to and use of the TeraSync mobile
          application, website, APIs, and related services (collectively, the
          &quot;Service&quot;).
        </p>
        <p>
          By registering, accessing, or using the Service, you confirm that you
          have read, understood, and agreed to these Terms and our Privacy
          Policy available at <Link href="/privacy">https://terasync.ng/privacy</Link>.
        </p>
        <p>If you do not agree, do not use the Service.</p>
      </section>

      <section aria-labelledby="description">
        <h2 id="description">2. Description of the Service</h2>
        <p>
          TeraSync is a digital healthcare logistics and management platform
          that enables users to:
        </p>
        <ul>
          <li>Upload and manage prescriptions</li>
          <li>Order medications from independent pharmacies</li>
          <li>Communicate with pharmacies via in-app messaging</li>
          <li>Use AI-assisted features for reminders and operational support</li>
          <li>Arrange and track delivery via third-party dispatch partners</li>
          <li>Manage user profile and health-related information for service functionality</li>
        </ul>
        <p>
          <strong>Important clarification:</strong> TeraSync is not a
          pharmacy, not a healthcare provider, not a medical device, and not a
          delivery company. We provide a technology platform only.
        </p>
      </section>

      <section aria-labelledby="eligibility">
        <h2 id="eligibility">3. Eligibility and Account Authority</h2>
        <p>To use the Service, you must:</p>
        <ul>
          <li>Be at least 18 years old</li>
          <li>Have the legal capacity to enter into a binding contract</li>
          <li>Comply with all applicable laws and regulations</li>
          <li>Provide accurate, complete, and up-to-date information</li>
        </ul>
        <p>
          If you use the Service on behalf of a pharmacy, business, or
          organisation, you represent and warrant that you have full
          authority to bind that entity to these Terms.
        </p>
        <p>
          We reserve the right to refuse, suspend, or terminate access if we
          reasonably believe you have breached these Terms, applicable law, or
          platform policies.
        </p>
      </section>

      <section aria-labelledby="disclaimer">
        <h2 id="disclaimer">4. Medical, Clinical, and AI Disclaimer</h2>
        <p>TeraSync:</p>
        <ul>
          <li>Is not a medical device</li>
          <li>Is not a clinical decision support system</li>
          <li>Is not an emergency service</li>
        </ul>
        <p>
          The Service does not provide diagnosis, treatment, or medical
          advice. All health-related content, reminders, pharmacy
          interactions, and AI-assisted features are provided for
          informational and logistical purposes only.
        </p>
        <h3>AI-Assisted Features</h3>
        <p>Any AI-assisted chat, suggestions, reminders, or outputs:</p>
        <ul>
          <li>Operate on probabilistic and non-deterministic models</li>
          <li>May be incomplete, inaccurate, or unsuitable for reliance</li>
          <li>Do not constitute medical, pharmaceutical, legal, or professional advice</li>
        </ul>
        <p>
          Reliance on AI outputs is entirely at your own risk. You remain
          solely responsible for all health and medication decisions and must
          consult qualified healthcare professionals where appropriate.
        </p>
      </section>

      <section aria-labelledby="security">
        <h2 id="security">5. Account Security</h2>
        <ul>
          <li>You are responsible for safeguarding your account credentials</li>
          <li>You are responsible for all activities conducted under your account</li>
          <li>
            You must notify us immediately at{' '}
            <a href="mailto:admin@terasync.ng">admin@terasync.ng</a> if you
            suspect unauthorised access
          </li>
        </ul>
        <p>
          We may suspend or terminate accounts for security, legal, safety, or
          operational reasons, with or without notice where permitted by law.
        </p>
      </section>

      <section aria-labelledby="orders">
        <h2 id="orders">6. Orders, Payments, and Refunds</h2>
        <h3>6.1 Orders</h3>
        <ul>
          <li>Orders are contracts between you and the fulfilling pharmacy</li>
          <li>Pharmacies are responsible for dispensing, labelling, and regulatory compliance</li>
          <li>We do not guarantee medication availability, pricing, or suitability</li>
        </ul>
        <p>
          You are responsible for ensuring that prescriptions and information
          you provide are accurate, valid, and lawful.
        </p>
        <p>
          We and participating pharmacies reserve the right to refuse, delay,
          or cancel orders that are missing, invalid, expired, suspected to be
          fraudulent, or non-compliant with applicable law.
        </p>
        <h3>6.2 Payments</h3>
        <ul>
          <li>Payments are processed by third-party providers (e.g. Paystack)</li>
          <li>We do not store full card details</li>
          <li>Payment providers&apos; terms and privacy policies apply independently</li>
        </ul>
        <p>You agree to pay all applicable fees, delivery charges, and taxes.</p>
        <h3>6.3 Refunds and Cancellations</h3>
        <p>Refunds and cancellations depend on:</p>
        <ul>
          <li>Order status</li>
          <li>Pharmacy policy</li>
          <li>Delivery status</li>
          <li>Applicable law</li>
        </ul>
        <p>
          Once an order is prepared or dispatched, cancellation may be
          unavailable. Refund processing timelines depend on payment providers
          and may take several business days.
        </p>
      </section>

      <section aria-labelledby="delivery">
        <h2 id="delivery">7. Delivery</h2>
        <ul>
          <li>
            Delivery is fulfilled by independent third-party dispatch partners
            (e.g. Kwik, Gokada)
          </li>
          <li>Delivery time estimates are not guarantees</li>
          <li>
            You are responsible for providing a correct and accessible
            delivery address
          </li>
        </ul>
        <p>
          Delivery is deemed complete when the order is handed to you or your
          authorised recipient. Risk of loss passes to you at that point.
        </p>
        <p>
          We are not liable for delays or failures caused by events beyond our
          reasonable control.
        </p>
      </section>

      <section aria-labelledby="pharmacy">
        <h2 id="pharmacy">8. Pharmacy Relationship</h2>
        <ul>
          <li>Pharmacies on TeraSync are independent businesses</li>
          <li>We do not employ pharmacists or control professional judgment</li>
          <li>
            Disputes regarding dispensed products should be addressed with the
            pharmacy and relevant regulators
          </li>
        </ul>
        <p>
          We may suspend or remove pharmacies for policy or legal breaches but
          are not responsible for their independent acts or omissions.
        </p>
      </section>

      <section aria-labelledby="acceptable-use">
        <h2 id="acceptable-use">9. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Service unlawfully or fraudulently</li>
          <li>Submit false prescriptions or misleading information</li>
          <li>Circumvent security or access controls</li>
          <li>Abuse, harass, or harm others</li>
          <li>Scrape, reverse-engineer, or overload our systems</li>
          <li>
            Resell or commercially exploit the Service or AI outputs without
            written permission
          </li>
        </ul>
        <p>We may suspend access and report unlawful conduct where appropriate.</p>
      </section>

      <section aria-labelledby="ip">
        <h2 id="ip">10. Intellectual Property</h2>
        <p>
          All TeraSync branding, software, designs, and content are owned by or
          licensed to us.
        </p>
        <p>
          You retain ownership of content you submit but grant us a
          non-exclusive, royalty-free licence to store, process, and use it
          to operate and improve the Service in line with our Privacy Policy.
        </p>
      </section>

      <section aria-labelledby="warranties">
        <h2 id="warranties">11. Disclaimer of Warranties</h2>
        <p className="uppercase text-sm tracking-wide">
          THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;.
          WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING
          WARRANTIES OF: MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
          NON-INFRINGEMENT, AND ACCURACY OR RELIABILITY OF AI OUTPUTS.
        </p>
      </section>

      <section aria-labelledby="liability">
        <h2 id="liability">12. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, TeraSync Technologies
          Limited, TeraSync, and their directors, officers, employees, and
          partners shall not be liable for:
        </p>
        <ul>
          <li>Medical outcomes or health decisions</li>
          <li>AI errors or omissions</li>
          <li>Loss of data, profits, or goodwill</li>
          <li>Indirect, incidental, consequential, or punitive damages</li>
          <li>Failures of pharmacies, delivery partners, or payment providers</li>
        </ul>
        <p>
          Our total liability, if any, shall not exceed the greater of: the
          amount you paid us in the 12 months preceding the claim, or NGN
          100,000.
        </p>
        <p>
          Nothing in these Terms limits liability that cannot be excluded by
          law.
        </p>
      </section>

      <section aria-labelledby="indemnity">
        <h2 id="indemnity">13. Indemnity</h2>
        <p>
          You agree to indemnify and hold harmless TeraSync Technologies
          Limited, TeraSync, and their affiliates from any claims, losses, or
          expenses arising from:
        </p>
        <ul>
          <li>Your use or misuse of the Service</li>
          <li>Incorrect or unlawful data submission</li>
          <li>Reliance on AI outputs</li>
          <li>Breach of these Terms or applicable law</li>
          <li>Violation of third-party rights</li>
        </ul>
      </section>

      <section aria-labelledby="governing-law">
        <h2 id="governing-law">14. Governing Law and Dispute Resolution</h2>
        <p>
          These Terms are governed by the laws of the Federal Republic of
          Nigeria.
        </p>
        <p>
          Disputes shall first be attempted through good-faith negotiation.
          Unresolved disputes shall be subject to the exclusive jurisdiction
          of Nigerian courts, without prejudice to urgent injunctive relief.
        </p>
      </section>

      <section aria-labelledby="changes">
        <h2 id="changes">15. Changes to the Service and Terms</h2>
        <p>
          We may modify, suspend, or discontinue any part of the Service at
          any time.
        </p>
        <p>
          Updated Terms will be posted at{' '}
          <a href="https://terasync.ng/terms">https://terasync.ng/terms</a>.
          Continued use constitutes acceptance.
        </p>
      </section>

      <section aria-labelledby="general">
        <h2 id="general">16. General Provisions</h2>
        <ul>
          <li><strong>Severability:</strong> Invalid provisions do not affect others</li>
          <li><strong>Waiver:</strong> Failure to enforce is not a waiver</li>
          <li>
            <strong>Entire Agreement:</strong> These Terms and the Privacy
            Policy form the entire agreement
          </li>
          <li>
            <strong>Assignment:</strong> We may assign our rights; you may not
            without consent
          </li>
          <li>
            <strong>No Third-Party Beneficiaries:</strong> Except as expressly
            stated
          </li>
        </ul>
        <p>
          <Link href="/privacy">Privacy Policy</Link>
        </p>
      </section>
    </LegalPageLayout>
  );
}
