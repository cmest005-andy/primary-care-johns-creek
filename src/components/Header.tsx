import Link from "next/link";
import { practice } from "@/content/practice";

/**
 * Site header with primary navigation.
 *
 * Uses Next.js `Link` for true multi-page routing between `/`, `/services`,
 * `/about`, `/new-patient`, `/blog`, and `/contact` — no anchor-tag
 * single-page navigation. Presentation only; all copy (practice name) is
 * sourced from `src/content/practice.ts`.
 *
 * Visual treatment: a warm cream tint (rather than a near-white 50-shade)
 * paired with a saturated terracotta bottom border, so the header reads as
 * a distinct branded bar instead of blending into the page background.
 */
export default function Header() {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About & Team" },
    { href: "/new-patient", label: "New Patients" },
    { href: "/blog", label: "Health Tips" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b-4 border-terracotta-400 bg-cream-200/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-sage-800 hover:text-sage-700"
        >
          {practice.name}
        </Link>

        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-6 text-sm font-medium text-charcoal-700">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-terracotta-600"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
