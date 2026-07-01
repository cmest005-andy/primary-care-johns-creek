import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/content/blog";
import { team } from "@/content/team";

/** Route params for this dynamic segment. */
interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Statically generates one route per article slug at build time, so all
 * blog detail pages are pre-rendered rather than resolved on demand.
 * Deriving params directly from `src/content/blog.ts` keeps routing and
 * content in a single source of truth — adding a new article to that file
 * automatically produces a new static page with no route code changes.
 */
export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

/**
 * Individual Health Tips article page — shows the full article body and an
 * author byline that links back to that provider's profile card on
 * `/about`. The link target relies on `TeamProfileCard` rendering
 * `id={member.id}` on its root element, so `/about#<authorId>` resolves to
 * a real, working anchor. Visual treatment mirrors `/services/[slug]`
 * (rounded-2xl cards, colored left-accent borders, cream/sage/terracotta
 * palette).
 */
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  // Unknown slugs (e.g. stale bookmarks) render the standard Next.js 404
  // page rather than crashing or silently showing blank content.
  if (!post) {
    notFound();
  }

  const author = team.find((member) => member.id === post.authorId);

  const formattedDate = new Date(post.publishDate).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <>
      <section className="bg-gradient-to-br from-sage-200 via-sage-100 to-terracotta-100">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <h1 className="text-4xl font-bold tracking-tight text-sage-900">
            {post.title}
          </h1>
          <p className="mt-4 text-sm font-medium text-charcoal-600">
            <time dateTime={post.publishDate}>{formattedDate}</time>
            {author && (
              <>
                {" · By "}
                <Link
                  href={`/about#${author.id}`}
                  className="text-terracotta-600 hover:text-terracotta-700"
                >
                  {author.name}, {author.credential}
                </Link>
              </>
            )}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-2xl border border-sage-300 border-l-4 border-l-sage-500 bg-cream-100 p-6 shadow-sm">
          <div className="space-y-4 text-charcoal-700">
            {post.body.map((paragraph, index) => (
              // Paragraphs are static, ordered prose with no unique id of
              // their own — index is stable here since body content never
              // reorders at runtime.
              // eslint-disable-next-line react/no-array-index-key
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/blog"
            className="rounded-full border border-sage-400 px-6 py-3 text-center text-sm font-semibold text-sage-700 transition-colors hover:bg-sage-100"
          >
            ← Back to Health Tips
          </Link>
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
