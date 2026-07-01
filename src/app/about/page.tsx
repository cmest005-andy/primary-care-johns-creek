import { practice } from "@/content/practice";
import { team } from "@/content/team";
import TeamProfileCard from "@/components/TeamProfileCard";

/**
 * About/Team page — practice backstory, mission, values, and a profile
 * card for every care team member. Content sourced entirely from
 * `src/content/practice.ts` and `src/content/team.ts`; this file only
 * arranges and renders it.
 */
export default function AboutPage() {
  return (
    <>
      {/* Backstory & mission — saturated sage-to-terracotta gradient gives
          this intro section real color presence, matching the home hero. */}
      <section className="bg-gradient-to-br from-sage-200 via-sage-100 to-terracotta-100">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <h1 className="text-4xl font-bold tracking-tight text-sage-900">
            Our Story
          </h1>
          <p className="mt-6 text-lg leading-8 text-charcoal-700">
            {practice.foundingStory}
          </p>

          <h2 className="mt-10 text-2xl font-semibold text-sage-800">
            Our Mission
          </h2>
          <p className="mt-4 text-charcoal-700">{practice.mission}</p>
        </div>
      </section>

      {/* Values — tinted cream surface with a bold terracotta left accent
          bar and colored heading, replacing the flat white/thin-border
          treatment. */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-sage-800">What We Value</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {practice.values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-sage-300 border-l-4 border-l-terracotta-400 bg-cream-100 p-6 shadow-sm"
            >
              <h3 className="text-base font-semibold text-terracotta-700">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-500">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Care team */}
      <section className="bg-gradient-to-br from-sage-200 via-sage-100 to-terracotta-100">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold text-sage-800">
            Meet Our Care Team
          </h2>
          <p className="mt-2 max-w-2xl text-charcoal-600">
            Our physicians, physician assistants, and nurses work together to
            provide coordinated, attentive care for every patient who walks
            through our doors.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <TeamProfileCard
                key={member.id}
                member={member}
                // Only the first-rendered card is above the fold and is
                // the page's actual Largest Contentful Paint element, so
                // it alone gets `priority` — every other card explicitly
                // opts out to avoid over-preloading images.
                priority={index === 0}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
