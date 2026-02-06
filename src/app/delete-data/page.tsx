import Link from 'next/link';
import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata = {
  title: 'Request deletion of some of your data – TeraSync',
  description:
    'How to request deletion of specific data in your TeraSync account without deleting your full account.',
};

export default function DeleteDataPage() {
  return (
    <LegalPageLayout
      title="Request deletion of some of your data"
      lastUpdated="5 February 2026"
      otherLegalHref="/delete-account"
      otherLegalLabel="Delete account"
    >
      <p className="text-zinc-800 font-medium">
        You can ask TeraSync to delete specific categories of your data while
        keeping your account active. This page explains how and what we can
        delete.
      </p>

      <section aria-labelledby="steps">
        <h2 id="steps">Steps to request partial data deletion</h2>
        <p>Send an email to <a href="mailto:admin@terasync.ng">admin@terasync.ng</a> from the email address linked to your TeraSync account. Use the subject line <strong>Request data deletion</strong> and clearly state:</p>
        <ul>
          <li>Which data you want deleted (e.g. health notes, chat history for a certain period, prescription images, or other categories we hold)</li>
          <li>Your full name and registered email so we can identify your account</li>
        </ul>
        <p>We will process your request and confirm what has been deleted. Some data may be necessary to keep for the service or for legal reasons; we will explain if anything cannot be removed.</p>
      </section>

      <section aria-labelledby="what">
        <h2 id="what">Types of data you can ask to have deleted</h2>
        <p>Depending on feasibility and legal requirements, you may request deletion of:</p>
        <ul>
          <li>Health-related notes or optional profile fields</li>
          <li>Chat or conversation history (e.g. with pharmacy or AI)</li>
          <li>Prescription images you uploaded</li>
          <li>Address or contact details (where not required for active orders)</li>
        </ul>
        <p>We cannot delete data we are required to retain by law (e.g. transaction records for a statutory period) or that is essential to provide the service you still use.</p>
      </section>

      <section aria-labelledby="retention">
        <h2 id="retention">How long until data is removed</h2>
        <p>We will delete or anonymise the requested data <strong>typically within 30–90 days</strong> of confirming your request, unless retention is legally required.</p>
      </section>

      <section aria-labelledby="contact">
        <h2 id="contact">Contact</h2>
        <p>
          Email <a href="mailto:admin@terasync.ng">admin@terasync.ng</a> for
          any questions. For full account deletion, see{' '}
          <Link href="/delete-account">Request account and data deletion</Link>.
          Our <Link href="/privacy">Privacy Policy</Link> describes your rights
          in full.
        </p>
      </section>
    </LegalPageLayout>
  );
}
