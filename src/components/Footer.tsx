import Link from "next/link";
import { practice } from "@/content/practice";

/**
 * Site footer with quick links and key contact info.
 *
 * Presentation only — all data comes from `src/content/practice.ts` so
 * updates never require touching component code.
 *
 * Visual treatment: a saturated sage-800 band (instead of a near-white
 * sage-50 tint) so the footer reads as a real branded closing band. Text,
 * links, and dividers are all shifted to light/cream shades to keep
 * contrast readable against the darker background.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-sage-900 bg-sage-800">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 sm:grid-cols-3">
        <div>
          <p className="text-base font-semibold text-cream-50">{practice.name}</p>
          <p className="mt-2 text-sm text-sage-200">{practice.tagline}</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-cream-100">Quick Links</p>
          <ul className="mt-2 space-y-1 text-sm text-sage-200">
            <li>
              <Link href="/" className="hover:text-terracotta-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-terracotta-300">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-terracotta-300">
                About &amp; Team
              </Link>
            </li>
            <li>
              <Link href="/new-patient" className="hover:text-terracotta-300">
                New Patients
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-terracotta-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-cream-100">Reach Us</p>
          <p className="mt-2 text-sm text-sage-200">{practice.phone}</p>
          <p className="text-sm text-sage-200">{practice.email}</p>
          <p className="text-sm text-sage-200">
            {practice.address.line1}
            {practice.address.line2 ? `, ${practice.address.line2}` : ""}
            <br />
            {practice.address.city}, {practice.address.state} {practice.address.zip}
          </p>
        </div>
      </div>

      <div className="border-t border-sage-700 py-4 text-center text-xs text-sage-300">
        © {year} {practice.name}. All rights reserved.
      </div>
    </footer>
  );
}
