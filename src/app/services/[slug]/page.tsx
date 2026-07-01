import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/content/services";

/** Route params for this dynamic segment. */
interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Statically generates one route per service slug at build time, so all
 * service detail pages are pre-rendered rather than resolved on demand.
 * Deriving params directly from `src/content/services.ts` keeps routing
 * and content in a single source of truth — adding a new service to that
 * file automatically produces a new static page with no route code changes.
 */
export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

/**
 * Individual service detail page — shows the full description and a
 * "What to Expect" checklist for a single clinical service, plus a link
 * back to `/contact` to schedule. Visual treatment mirrors the card/section
 * patterns already used on `/about` and `/contact` (rounded-2xl cards,
 * colored left-accent borders, cream/sage/terracotta palette).
 */
export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((entry) => entry.slug === slug);

  // Unknown slugs (e.g. stale bookmarks) render the standard Next.js 404
  // page rather than crashing or silently showing blank content.
  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="bg-gradient-to-br from-sage-200 via-sage-100 to-terracotta-100">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <h1 className="text-4xl font-bold tracking-tight text-sage-900">
            {service.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-charcoal-700">
            {service.longDescription}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-2xl border border-sage-300 border-l-4 border-l-sage-500 bg-cream-100 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-sage-800">
            What to Expect
          </h2>
          <ul className="mt-4 space-y-2 text-charcoal-600">
            {service.whatToExpect.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden="true" className="text-terracotta-500">
                  •
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <Link
            href="/contact"
            className="rounded-full bg-sage-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-sage-700"
          >
            Schedule a Visit
          </Link>
        </div>
      </section>
    </>
  );
}
