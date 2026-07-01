import Link from "next/link";
import { practice } from "@/content/practice";

/**
 * Home page — hero, services overview, and CTAs linking to `/about` and
 * `/contact`. All copy sourced from `src/content/practice.ts`; this file
 * is presentation only.
 */
export default function Home() {
  return (
    <>
      {/* Hero — a saturated sage-to-terracotta gradient replaces the flat
          near-white treatment, giving the page a real color moment while
          keeping the dark headline/body text legible on top of it. */}
      <section className="bg-gradient-to-br from-sage-200 via-sage-100 to-terracotta-100">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-20 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-wide text-terracotta-700">
            Johns Creek, Georgia
          </p>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-sage-900 sm:text-5xl">
            {practice.name}
          </h1>
          <p className="max-w-xl text-lg leading-8 text-charcoal-700">
            {practice.tagline}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/about"
              className="rounded-full bg-sage-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-sage-700"
            >
              Meet Our Care Team
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-terracotta-400 px-6 py-3 text-center text-sm font-semibold text-terracotta-600 transition-colors hover:bg-terracotta-50"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="text-2xl font-semibold text-sage-800">
          How We Can Help
        </h2>
        <p className="mt-2 max-w-2xl text-charcoal-600">
          From same-week sick visits to lifelong preventive care, our team
          offers a full range of primary care services for every member of
          your family.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {practice.services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-sage-300 border-l-4 border-l-sage-500 bg-cream-100 p-6 shadow-sm"
            >
              <h3 className="text-base font-semibold text-sage-800">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-500">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA — same gradient treatment as the hero for a cohesive,
          book-ended color story across the page. */}
      <section className="bg-gradient-to-br from-sage-200 via-sage-100 to-terracotta-100">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-sage-800">
              Ready to become a patient?
            </h2>
            <p className="mt-2 max-w-md text-charcoal-600">
              Get to know our physicians, PAs, and nurses, or reach out to
              schedule your first visit.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/about"
              className="rounded-full bg-sage-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-sage-700"
            >
              About &amp; Team
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-terracotta-400 px-6 py-3 text-center text-sm font-semibold text-terracotta-600 transition-colors hover:bg-terracotta-50"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
