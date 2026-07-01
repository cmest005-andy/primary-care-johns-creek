import Link from "next/link";
import { services } from "@/content/services";

/**
 * Services index page — lists every clinical service as a card linking to
 * its dedicated detail page. Mirrors the "How We Can Help" treatment on
 * the home page, sourced from the same `src/content/services.ts` data so
 * the two never drift out of sync.
 */
export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-sage-200 via-sage-100 to-terracotta-100">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <h1 className="text-4xl font-bold tracking-tight text-sage-900">
            Our Services
          </h1>
          <p className="mt-4 max-w-2xl text-charcoal-700">
            From same-week sick visits to lifelong preventive care, our team
            offers a full range of primary care services for every member of
            your family.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="rounded-2xl border border-sage-300 border-l-4 border-l-sage-500 bg-cream-100 p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h2 className="text-base font-semibold text-sage-800">
                {service.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-500">
                {service.shortDescription}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
