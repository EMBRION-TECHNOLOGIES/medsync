import Link from 'next/link';
import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata = {
  title: 'Terms of Service',
  description:
    'TeraSync Terms of Service. Customer agreement for use of the TeraSync app.',
};

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      lastUpdated="5 February 2025"
      otherLegalHref="/privacy"
      otherLegalLabel="Privacy Policy"
    >
      <section aria-labelledby="acceptance">
        <h2 id="acceptance">1. Acceptance of Terms</h2>
        <p>
          These Terms of Service (&quot;Terms&quot;) form a binding agreement
          between you (&quot;User&quot;, &quot;you&quot;, &quot;your&quot;) and
          TeraSync (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) governing
          your use of the TeraSync mobile application and related services (the
          &quot;Service&quot;). By registering, accessing, or using TeraSync,
          you agree to these Terms and our{' '}
          <Link href="/privacy">Privacy Policy</Link>. If you do not agree, do
          not use the Service.
        </p>
      </section>

      <section aria-labelledby="description">
        <h2 id="description">2. Description of Service</h2>
        <p>TeraSync is a healthcare management platform that allows users to:</p>
        <ul>
          <li>Order medications and manage prescriptions</li>
          <li>Communicate with pharmacies and use in-app AI-assisted features</li>
          <li>Schedule and track delivery of orders</li>
          <li>Manage profile and health-related information (e.g. allergies, conditions)</li>
          <li>Receive notifications and reminders</li>
        </ul>
        <p>
          We connect patients with registered pharmacies and third-party
          delivery partners. We do not dispense medications ourselves and are
          not a pharmacy or healthcare provider.
        </p>
      </section>

      <section aria-labelledby="eligibility">
        <h2 id="eligibility">3. Eligibility</h2>
        <ul>
          <li>You must be at least 18 years old to use TeraSync.</li>
          <li>You must have the legal capacity to enter into a binding contract and to use the Service in compliance with local laws.</li>
          <li>You must provide accurate and complete registration and profile information and keep it updated.</li>
          <li>If you use the Service on behalf of an organisation (e.g. pharmacy), you represent that you have authority to bind that organisation to these Terms.</li>
        </ul>
        <p>
          We may refuse or suspend access to the Service if we reasonably
          believe you have breached these Terms or applicable law.
        </p>
      </section>

      <section aria-labelledby="medical">
        <h2 id="medical">4. Medical Disclaimer</h2>
        <ul>
          <li>TeraSync is a technology platform for ordering and delivery of medications. It is NOT a substitute for professional medical advice, diagnosis, or treatment.</li>
          <li>Always seek the advice of your doctor, pharmacist, or other qualified health provider with any questions about your health or medications.</li>
          <li>In-app AI features (e.g. chat, suggestions) are for convenience and information only. They do not constitute medical advice. Reliance on any such content is at your own risk.</li>
          <li>Prescription requirements and the legality of dispensing medications are governed by local laws and pharmacy practice. It is your and the pharmacy&apos;s responsibility to ensure prescriptions are valid and compliant.</li>
          <li>We do not guarantee the accuracy, completeness, or suitability of AI-generated content, and we are not responsible for errors, omissions, or outcomes resulting from reliance on such content.</li>
        </ul>
      </section>

      <section aria-labelledby="account">
        <h2 id="account">5. Account and Security</h2>
        <ul>
          <li>You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account.</li>
          <li>You must notify us promptly at <a href="mailto:admin@terasync.ng">admin@terasync.ng</a> if you suspect unauthorised access or misuse of your account.</li>
          <li>We may suspend or terminate your account if we reasonably believe you have violated these Terms, engaged in fraud or abuse, or for other legitimate reasons. We will endeavour to give notice where appropriate. In cases involving fraud, safety, legal compliance, or system integrity, we may suspend or terminate accounts immediately without prior notice.</li>
        </ul>
      </section>

      <section aria-labelledby="orders">
        <h2 id="orders">6. Orders, Payments, and Refunds</h2>
        <h3>6.1 Orders</h3>
        <ul>
          <li>Orders are agreements between you and the pharmacy that fulfils the order. TeraSync facilitates the connection and, where applicable, delivery booking. We do not guarantee availability, pricing, or accuracy of product information; the pharmacy is responsible for dispensing and labelling.</li>
          <li>You are responsible for ensuring that prescription and other information you provide is accurate and that you are legally allowed to receive the medications ordered.</li>
          <li>We and participating pharmacies reserve the right to refuse, delay, or cancel any order where a prescription is missing, invalid, expired, suspected to be fraudulent, or non-compliant with applicable law.</li>
        </ul>
        <h3>6.2 Payments</h3>
        <ul>
          <li>Payments are processed by third-party payment providers (e.g. Paystack). Their terms and policies apply. We do not store your full card details.</li>
          <li>You agree to pay all fees, delivery charges, and taxes applicable to your orders.</li>
        </ul>
        <h3>6.3 Refunds and cancellations</h3>
        <ul>
          <li>Refund and cancellation rules depend on order status, pharmacy policy, and applicable law. Refunds for payments made via Paystack (or similar) will be processed in accordance with the payment provider&apos;s and our policies, and may take several business days.</li>
          <li>For refund or cancellation requests, contact us at <a href="mailto:admin@terasync.ng">admin@terasync.ng</a> or use in-app support.</li>
        </ul>
      </section>

      <section aria-labelledby="delivery">
        <h2 id="delivery">7. Delivery</h2>
        <ul>
          <li>Delivery is fulfilled by third-party dispatch/delivery partners (e.g. Kwik, Gokada). We do not guarantee exact delivery times; estimates are indicative.</li>
          <li>You are responsible for providing a correct and accessible delivery address and for being available to receive the order (or for authorising someone to receive it). Delivery is deemed complete when the order is handed to you or your authorised recipient at the delivery address. Risk of loss passes to you at that time. Any claims for non-delivery or damage should be reported promptly to us and/or the delivery partner.</li>
          <li>We and our delivery partners are not liable for delays or failures caused by circumstances beyond our reasonable control (e.g. natural disasters, government action, strikes).</li>
        </ul>
      </section>

      <section aria-labelledby="pharmacy">
        <h2 id="pharmacy">8. Pharmacy Relationship</h2>
        <ul>
          <li>Pharmacies on TeraSync are independent businesses. We do not employ pharmacists or control their professional conduct. Any dispute about quality, accuracy, or legality of dispensed products should be addressed with the pharmacy and, where required, with the relevant regulatory body.</li>
          <li>We may remove or suspend a pharmacy from the platform for breach of our policies or applicable law, but we are not responsible for their acts or omissions beyond our role as platform provider.</li>
        </ul>
      </section>

      <section aria-labelledby="acceptable-use">
        <h2 id="acceptable-use">9. Acceptable Use</h2>
        <p>You agree NOT to:</p>
        <ul>
          <li>Use the Service for any illegal purpose or in violation of any applicable laws (including healthcare and data protection laws)</li>
          <li>Submit false or misleading information (e.g. fake prescriptions, incorrect identity)</li>
          <li>Attempt to gain unauthorised access to our systems, other users&apos; accounts, or third-party systems</li>
          <li>Use the Service to harass, abuse, or harm others, or to distribute malware or spam</li>
          <li>Scrape, reverse-engineer, or automate access to the Service in a way that overloads or undermines our systems, except as we explicitly permit</li>
          <li>Resell or commercially exploit the Service or content without our written permission</li>
        </ul>
        <p>We may suspend or terminate access and report conduct to authorities where appropriate.</p>
      </section>

      <section aria-labelledby="ip">
        <h2 id="ip">10. Intellectual Property</h2>
        <ul>
          <li>TeraSync&apos;s name, logo, app, and content are owned by us or our licensors. You may not copy, modify, or use them except as necessary to use the Service in accordance with these Terms.</li>
          <li>You retain ownership of content you submit (e.g. messages, photos). You grant us a licence to use, store, and process that content as needed to provide and improve the Service and as set out in our Privacy Policy.</li>
        </ul>
      </section>

      <section aria-labelledby="warranties">
        <h2 id="warranties">11. Disclaimer of Warranties</h2>
        <p className="uppercase text-sm tracking-wide">
          The Service is provided &quot;as is&quot; and &quot;as available&quot;. We do not warrant that the Service will be uninterrupted, error-free, or free of viruses or other harmful components. We disclaim all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
        </p>
      </section>

      <section aria-labelledby="liability">
        <h2 id="liability">12. Limitation of Liability</h2>
        <p className="uppercase text-sm tracking-wide">
          To the maximum extent permitted by applicable law, we (and our affiliates, officers, employees, and agents) shall not be liable for any indirect, incidental, special, consequential, or punitive damages (including loss of profits, data, or goodwill) arising from or related to your use of the Service, even if we have been advised of the possibility of such damages.
        </p>
        <p>
          Our total liability for any claims arising out of or related to these Terms or the Service shall not exceed the greater of: (A) the amount you paid us in the twelve (12) months before the claim, or (B) one hundred thousand naira (NGN 100,000) or equivalent in local currency.
        </p>
        <p>
          Some jurisdictions do not allow exclusion or limitation of certain damages; in such cases, the above limitations apply to the fullest extent permitted by law. Nothing in these Terms excludes or limits liability that cannot be excluded or limited under applicable law (e.g. death or personal injury caused by negligence, fraud).
        </p>
      </section>

      <section aria-labelledby="indemnity">
        <h2 id="indemnity">13. Indemnity</h2>
        <p>
          You agree to indemnify and hold harmless TeraSync and our affiliates, officers, employees, and agents from and against any claims, damages, losses, costs, and expenses (including reasonable legal fees) arising out of or related to: (a) your use of the Service, (b) your violation of these Terms or applicable law, (c) your violation of any third-party rights, or (d) content or data you submit through the Service.
        </p>
      </section>

      <section aria-labelledby="governing-law">
        <h2 id="governing-law">14. Governing Law and Dispute Resolution</h2>
        <ul>
          <li>These Terms are governed by the laws of the Federal Republic of Nigeria, without regard to conflict-of-law principles.</li>
          <li>Any dispute shall first be attempted to be resolved by good-faith negotiation. If the dispute cannot be resolved within thirty (30) days, it may be referred to mediation or to the courts of Nigeria, and you consent to the exclusive jurisdiction of the courts of Nigeria for such purposes.</li>
          <li>Nothing in these Terms prevents either party from seeking urgent injunctive or other equitable relief in any court of competent jurisdiction.</li>
        </ul>
      </section>

      <section aria-labelledby="changes">
        <h2 id="changes">15. Changes to the Service and Terms</h2>
        <ul>
          <li>We may modify, suspend, or discontinue any part of the Service at any time with or without notice. We will not be liable to you or any third party for any such change.</li>
          <li>We may update these Terms from time to time. We will post the updated Terms on this page and, where required by law or reasonably appropriate, notify you (e.g. in-app or by email). Your continued use of the Service after the effective date of the updated Terms constitutes acceptance. If you do not agree, you must stop using the Service and may close your account.</li>
        </ul>
      </section>

      <section aria-labelledby="general">
        <h2 id="general">16. General</h2>
        <ul>
          <li><strong>Severability:</strong> If any provision of these Terms is held invalid or unenforceable, the remaining provisions remain in effect.</li>
          <li><strong>Waiver:</strong> Our failure to enforce any right or provision does not waive that right or provision.</li>
          <li><strong>Entire agreement:</strong> These Terms, together with the Privacy Policy and any other policies we reference, constitute the entire agreement between you and us regarding the Service.</li>
          <li><strong>Assignment:</strong> We may assign our rights and obligations under these Terms. You may not assign your rights without our prior written consent.</li>
          <li><strong>Third-party rights:</strong> These Terms do not confer any third-party beneficiary rights except as expressly stated.</li>
        </ul>
      </section>

      <section aria-labelledby="contact">
        <h2 id="contact">17. Contact</h2>
        <p>For questions about these Terms or the Service:</p>
        <p>
          Email: <a href="mailto:admin@terasync.ng">admin@terasync.ng</a>
          <br />
          Website: <a href="https://terasync.ng">https://terasync.ng</a>
        </p>
        <p>
          <Link href="/privacy">Privacy Policy</Link>
        </p>
      </section>
    </LegalPageLayout>
  );
}
