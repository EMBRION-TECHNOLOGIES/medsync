import Link from 'next/link';
import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata = {
  title: 'Request account and data deletion – TeraSync',
  description:
    'How to request deletion of your TeraSync account and associated data. Steps, data types deleted or kept, and retention period.',
};

export default function DeleteAccountPage() {
  return (
    <LegalPageLayout
      title="Request account and data deletion"
      lastUpdated="5 February 2026"
      otherLegalHref="/privacy"
      otherLegalLabel="Privacy Policy"
    >
      <p className="text-zinc-800 font-medium">
        TeraSync (operated by Embrion Technologies Limited) lets you request
        deletion of your account and the personal data associated with it.
        This page describes how to do that and what happens to your data.
      </p>

      <section aria-labelledby="steps">
        <h2 id="steps">Steps to request account and data deletion</h2>
        <p>You can request deletion in either of the following ways:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>In the TeraSync app:</strong> Open the app, go to{' '}
            <strong>Settings</strong>, then use the option to{' '}
            <strong>Delete account</strong>. Follow the on-screen steps.
          </li>
          <li>
            <strong>By email:</strong> Send an email to{' '}
            <a href="mailto:admin@terasync.ng">admin@terasync.ng</a> from the
            email address linked to your TeraSync account. Use the subject line{' '}
            <strong>Request account deletion</strong> and include your full
            name and registered email so we can identify your account. We will
            process your request and confirm once the account and associated
            data are deleted or anonymised.
          </li>
        </ol>
      </section>

      <section aria-labelledby="deleted">
        <h2 id="deleted">Data that is deleted or anonymised</h2>
        <p>When your account is deleted, we delete or anonymise the following:</p>
        <ul>
          <li>Account and registration data (email, name, phone, password hash)</li>
          <li>Profile and identity data</li>
          <li>Health-related data you provided (e.g. allergies, medications, notes)</li>
          <li>Prescription images and extracted text</li>
          <li>Chat and messaging data</li>
          <li>Order and transaction metadata (as far as no longer needed for legal or regulatory purposes)</li>
          <li>Device and technical data linked to your account</li>
          <li>Emergency and insurance data (if provided)</li>
        </ul>
      </section>

      <section aria-labelledby="kept">
        <h2 id="kept">Data that may be kept</h2>
        <p>We may retain the following where required by law or for legitimate purposes:</p>
        <ul>
          <li>Anonymised or aggregated data that can no longer identify you</li>
          <li>Records we are legally required to keep (e.g. for tax, regulatory, or dispute resolution)</li>
          <li>Backups for a limited period until they are overwritten (typically within our retention window)</li>
        </ul>
      </section>

      <section aria-labelledby="retention">
        <h2 id="retention">Retention period after deletion request</h2>
        <p>
          After you request account deletion, we will delete or anonymise your
          personal data <strong>typically within 30–90 days</strong>, unless we
          are required by law to retain certain data for a longer period. You
          will receive a confirmation once processing is complete where
          possible.
        </p>
      </section>

      <section aria-labelledby="contact">
        <h2 id="contact">Contact</h2>
        <p>
          For any questions about account or data deletion, contact us at{' '}
          <a href="mailto:admin@terasync.ng">admin@terasync.ng</a>. Our{' '}
          <Link href="/privacy">Privacy Policy</Link> describes your rights and
          our data practices in full.
        </p>
      </section>
    </LegalPageLayout>
  );
}
