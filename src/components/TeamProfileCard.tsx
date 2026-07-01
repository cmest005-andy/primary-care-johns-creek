import Image from "next/image";
import type { TeamMember } from "@/content/team";

interface TeamProfileCardProps {
  member: TeamMember;
  /**
   * Whether this card's image should be treated as the Largest Contentful
   * Paint (LCP) candidate for the page it's rendered on. When `true`, the
   * underlying `next/image` disables lazy-loading and preloads the image
   * (the framework-idiomatic fix for LCP warnings — `priority`, not
   * `loading="eager"`, which only disables lazy-loading and skips the
   * preload).
   *
   * Defaults to `false` so that, out of the box, no team image is treated
   * as priority. Callers rendering a list of cards (e.g. the About page's
   * team grid) should pass `priority` only for the single card that is
   * actually above the fold and first-rendered — never hardcode this to
   * `true` here, since this component is reused for every team member.
   */
  priority?: boolean;
}

/**
 * Presentation-only card for a single care team member.
 *
 * Renders exactly what it is given via props — no data-fetching, no
 * hardcoded content. All team content lives in `src/content/team.ts`,
 * keeping this component reusable for any team member shape that matches
 * the `TeamMember` type.
 *
 * Visual treatment: a warm cream surface with a saturated sage border and a
 * terracotta left accent bar, so each card has real color presence instead
 * of reading as a flat white box.
 */
export default function TeamProfileCard({
  member,
  priority = false,
}: TeamProfileCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-sage-300 border-l-4 border-l-terracotta-400 bg-cream-100 shadow-sm transition-shadow hover:shadow-md">
      <div className="relative h-56 w-full bg-sage-200">
        <Image
          src={member.imageUrl}
          alt={`Portrait of ${member.name}`}
          fill
          sizes="(min-width: 768px) 320px, 100vw"
          className="object-cover"
          priority={priority}
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <div>
          <h3 className="text-lg font-semibold text-sage-800">
            {member.name}, {member.credential}
          </h3>
          <p className="text-sm font-medium text-terracotta-600">{member.role}</p>
        </div>
        <p className="text-sm leading-relaxed text-charcoal-600">{member.bio}</p>
      </div>
    </article>
  );
}
