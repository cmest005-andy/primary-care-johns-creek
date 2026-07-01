# Error Log

A living record of mistakes made during runs and how they were resolved. Every
agent reads this before starting work on this project.

---

## Format

Each entry follows this structure:

**Date:** YYYY-MM-DD
**Stack:** The project stack where the error occurred
**Error:** What went wrong and where
**Fix:** What solved it
**Lesson:** The rule to remember going forward

---

## Entries

**Date:** 2026-06-30
**Stack:** Next.js (Tailwind CSS v4, `@tailwindcss/postcss`)
**Error:** The entire site rendered completely unstyled — black text on a
white background, like a plain Word document — despite every component
(`page.tsx`, `about/page.tsx`, `contact/page.tsx`, `TeamProfileCard.tsx`,
`Header.tsx`, `Footer.tsx`) using custom Tailwind utility classes such as
`bg-sage-50`, `text-terracotta-600`, `border-sage-200`, `text-charcoal-700`,
`bg-cream-100`, and `rounded-2xl`. Root cause: this project uses Tailwind CSS
v4, which uses CSS-first configuration. The custom color palette
(sage/terracotta/charcoal/cream) and custom `borderRadius` (`xl`, `2xl`)
tokens were defined in `tailwind.config.ts`, but `src/app/globals.css` only
contained `@import "tailwindcss";` with no `@config` directive linking to
that file. In Tailwind v4, a JS config file is silently ignored unless
explicitly wired in via `@config`, so none of the custom utility classes
generated any CSS at all — they were dropped without any build error or
warning.
**Fix:** Migrated every custom token from `tailwind.config.ts` directly into
a CSS `@theme { ... }` block in `src/app/globals.css`, using the
`--color-<name>-<shade>` naming convention for all sage/terracotta/charcoal/
cream shades and the `--radius-<name>` convention for the `xl`/`2xl`
border-radius tokens (exact hex/rem values copied 1:1 from the old config).
Verified the fix by grepping the compiled CSS in `.next` and confirming
classes like `.bg-sage-50{background-color:var(--color-sage-50)}` and
`.rounded-2xl{border-radius:var(--radius-2xl)}` now emit real rules. Once
confirmed working end-to-end (including a clean `rm -rf .next && npm run
build`), deleted the now-orphaned `tailwind.config.ts` entirely rather than
leaving a dead config file in the repo.
**Lesson:** Tailwind v4 projects must define theme tokens via a CSS
`@theme` block in the stylesheet that Tailwind processes (or explicitly
link a JS config with `@config "./tailwind.config.ts";`) — a
`tailwind.config.ts` file alone does nothing in v4 and custom utility
classes will silently produce no CSS with zero build-time errors. Always
verify new/custom Tailwind utility classes actually appear in the compiled
`.next` CSS output after scaffolding a v4 project, especially when copying
patterns from v3-era boilerplate.

---

**Date:** 2026-07-01
**Stack:** Next.js (`next/image`)
**Error:** Dev console warning on `/about`: "Image with src
`/images/team/maya-okonkwo-reyes.jpg` was detected as the Largest
Contentful Paint (LCP). Please add the `loading=\"eager\"` property if this
image is above the fold." This was raised because
`TeamProfileCard.tsx` — a shared component rendered once per team member in
`team.map(...)` on the About page — rendered every team photo as a plain
lazy-loaded `next/image` with no way to mark any one of them as
above-the-fold, and Maya Okonkwo-Reyes happens to be first in the team data
array, making her card's image the actual page LCP element.
**Fix:** Followed the framework-idiomatic fix rather than the console's
literal suggestion: added an optional `priority?: boolean` prop (default
`false`) to `TeamProfileCardProps`, wired straight through to the
underlying `<Image priority={priority} />` — never hardcoded `true`/`false`
inside the shared component. In `src/app/about/page.tsx`, the
`team.map((member, index) => ...)` loop now passes
`priority={index === 0}` so only the first-rendered (above-the-fold) card
gets `priority`, and every other card explicitly gets `priority={false}`.
Confirmed via `npm run build` (clean TypeScript/compile) and manual
dev-server check that the LCP warning no longer appears on `/about`, and
grepped all other `next/image` usages (`contact/page.tsx`, `Header.tsx`,
`Footer.tsx`) to confirm no unrelated image was accidentally marked
priority.
**Lesson:** When `next/image` logs the LCP warning, do **not** copy its
literal suggested fix of `loading="eager"` — that only disables
lazy-loading. The documented, idiomatic Next.js fix is the boolean
`priority` prop, which both disables lazy-loading *and* preloads the
resource via a `<link rel="preload">`. When the flagged image comes from a
shared/reusable component rendered in a list (e.g. a `.map()`), don't
hardcode `priority` true or false inside that component — thread it through
as an optional prop (default `false`) and let the calling page decide,
typically via an `index === 0` check for the first item that is actually
above the fold. This keeps the component reusable (SOLID: open for
extension via props, not modified per-call-site) while ensuring only the
genuine LCP candidate is preloaded.
