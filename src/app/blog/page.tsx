import Link from "next/link";
import { blogPosts } from "@/content/blog";
import { team } from "@/content/team";

/**
 * Health Tips blog index page — lists every article as a card linking to
 * its dedicated detail page. Mirrors the `/services` and `/new-patient`
 * card treatment (rounded-2xl, colored left accent, cream surface) so the
 * blog reads as a natural extension of the existing site, sourced entirely
 * from `src/content/blog.ts` and `src/content/team.ts`.
 */
export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-sage-200 via-sage-100 to-terracotta-100">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <h1 className="text-4xl font-bold tracking-tight text-sage-900">
            Health Tips
          </h1>
          <p className="mt-4 max-w-2xl text-charcoal-700">
            Practical, provider-written guidance on prevention, chronic
            condition management, and making the most of your care — from
            the same team you see in the exam room.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => {
            // Look up the author's display name/credential from the team
            // roster so blog.ts never needs to duplicate that content.
            const author = team.find((member) => member.id === post.authorId);

            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="rounded-2xl border border-sage-300 border-l-4 border-l-sage-500 bg-cream-100 p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h2 className="text-base font-semibold text-sage-800">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-500">
                  {post.excerpt}
                </p>
                <p className="mt-4 text-xs font-medium text-terracotta-600">
                  {author ? `${author.name}, ${author.credential}` : "Our Team"}
                  {" · "}
                  <time dateTime={post.publishDate}>
                    {new Date(post.publishDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
