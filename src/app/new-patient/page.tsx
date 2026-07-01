import { newPatient } from "@/content/newPatient";

/**
 * New Patient / FAQ page — welcome intro, first-visit checklist, accepted
 * insurance, and frequently asked questions. Content sourced entirely from
 * `src/content/newPatient.ts`; this file only arranges and renders it.
 *
 * Visual treatment matches `/about` and `/contact`: rounded-2xl cards on a
 * tinted cream surface with colored left-accent borders, using only the
 * existing sage/terracotta/charcoal/cream palette.
 */
export default function NewPatientPage() {
  return (
    <>
      {/* Welcome intro — same saturated sage-to-terracotta gradient used
          for the intro section on /about. */}
      <section className="bg-gradient-to-br from-sage-200 via-sage-100 to-terracotta-100">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <h1 className="text-4xl font-bold tracking-tight text-sage-900">
            New Patients
          </h1>
          <p className="mt-6 text-lg leading-8 text-charcoal-700">
            {newPatient.intro}
          </p>
        </div>
      </section>

      {/* What to Bring checklist — cream cards with terracotta accent,
          matching the /about "values" card treatment. */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-sage-800">
          What to Bring to Your First Visit
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {newPatient.whatToBring.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-sage-300 border-l-4 border-l-terracotta-400 bg-cream-100 p-6 shadow-sm"
            >
              <h3 className="text-base font-semibold text-terracotta-700">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Insurance accepted — sage accent card, matching the /contact
          detail-card treatment. */}
      <section className="bg-gradient-to-br from-sage-200 via-sage-100 to-terracotta-100">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold text-sage-800">
            Insurance We Accept
          </h2>
          <p className="mt-2 max-w-2xl text-charcoal-600">
            We work with many major insurance providers. Below is a
            representative list — give us a call and we&rsquo;ll be happy to
            verify your specific plan.
          </p>

          <div className="mt-8 rounded-2xl border border-sage-300 border-l-4 border-l-sage-500 bg-cream-100 p-6 shadow-sm">
            <ul className="grid gap-x-8 gap-y-2 text-charcoal-600 sm:grid-cols-2 lg:grid-cols-3">
              {newPatient.insuranceAccepted.map((provider) => (
                <li key={provider} className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-sage-500"
                  />
                  {provider}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ — cream cards with terracotta accent, one per Q&A pair. */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-sage-800">
          Frequently Asked Questions
        </h2>
        <div className="mt-8 space-y-6">
          {newPatient.faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-sage-300 border-l-4 border-l-terracotta-400 bg-cream-100 p-6 shadow-sm"
            >
              <h3 className="text-base font-semibold text-sage-800">
                {faq.question}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
