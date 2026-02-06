import Link from 'next/link';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

type LegalPageLayoutProps = {
  title: string;
  lastUpdated: string;
  otherLegalHref: string;
  otherLegalLabel: string;
  children: React.ReactNode;
};

export default function LegalPageLayout({
  title,
  lastUpdated,
  otherLegalHref,
  otherLegalLabel,
  children,
}: LegalPageLayoutProps) {
  return (
    <>
      <NavBar />
      <main
        id="main-content"
        role="main"
        className="min-h-screen w-full bg-zinc-50 py-12"
        aria-label={title}
      >
        <div className="w-full max-w-[48rem] mx-auto px-4 sm:px-6 box-border">
          <nav
            className="mb-8 text-sm text-zinc-600"
            aria-label="Legal document navigation"
          >
            <Link
              href="/"
              className="hover:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-ms-blue focus:ring-offset-2 rounded"
            >
              TeraSync
            </Link>
            <span className="mx-2" aria-hidden="true">·</span>
            <Link
              href={otherLegalHref}
              className="hover:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-ms-blue focus:ring-offset-2 rounded"
            >
              {otherLegalLabel}
            </Link>
          </nav>
          <article
            key={title}
            className="w-full min-w-0 bg-white rounded-lg shadow-sm border border-zinc-200 p-6 sm:p-8 md:p-10 box-border"
          >
            <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-2 break-words">
              {title}
            </h1>
            <p className="text-sm text-zinc-500 mb-8 break-words">
              Last updated: {lastUpdated}
              {' · '}
              <a
                href="mailto:admin@terasync.ng"
                className="text-ms-blue hover:underline focus:outline-none focus:ring-2 focus:ring-ms-blue focus:ring-offset-2 rounded"
              >
                admin@terasync.ng
              </a>
            </p>
            <div className="w-full min-w-0 space-y-6 text-zinc-700 leading-relaxed break-words [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-zinc-900 [&_h2]:break-words [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:break-words [&_a]:text-ms-blue [&_a]:underline hover:[&_a]:text-ms-blue-dark [&_ul]:list-disc [&_ul]:pl-6 [&_li]:my-1 [&_p]:break-words">
              {children}
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
