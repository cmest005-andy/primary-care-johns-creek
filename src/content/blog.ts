/**
 * Health Tips blog content for Primary Care of Johns Creek.
 *
 * Pure typed data only — no JSX, no rendering logic, no framework imports.
 * Follows the same content-data pattern established by
 * `src/content/services.ts`: this file is the single source of truth for
 * blog articles, consumed by both the `/blog` index page and the
 * `/blog/[slug]` static detail route, keeping content and presentation
 * decoupled per hexagonal architecture.
 *
 * `authorId` values must match an existing `id` from `src/content/team.ts`
 * so pages can look up author name/credential/role and deep-link back to
 * that team member's profile card on `/about#<authorId>`.
 */

/** A single Health Tips blog article. */
export interface BlogPost {
  /** URL-safe identifier used for routing, e.g. `/blog/[slug]`. */
  slug: string;
  title: string;
  /** 1-2 sentence teaser shown on the blog index/listing page. */
  excerpt: string;
  /** ISO 8601 date string (YYYY-MM-DD) for the article's publish date. */
  publishDate: string;
  /** Must match a `TeamMember.id` from `src/content/team.ts`. */
  authorId: string;
  /** Full article content, one string per paragraph. */
  body: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "flu-season-prevention-tips",
    title: "Flu Season Prevention Tips",
    excerpt:
      "Simple, practical steps you can take now to lower your family's risk of the flu this season — " +
      "starting with the single most effective one.",
    publishDate: "2025-10-14",
    authorId: "leon-marchetti",
    body: [
      "Flu season in Georgia typically ramps up in late fall and peaks between December and February, " +
      "but the best time to prepare is now, before cases start climbing in our community.",
      "The single most effective step you can take is getting your annual flu vaccine. It's reformulated " +
      "each year to match the strains expected to circulate, and it significantly reduces both your risk " +
      "of getting sick and the severity of illness if you do. We recommend it for nearly everyone six " +
      "months and older, especially young children, adults over 65, and anyone with a chronic condition " +
      "like asthma or diabetes.",
      "Beyond vaccination, the basics still matter: wash your hands frequently, especially after being in " +
      "public spaces; avoid touching your face; and stay home from work or school if you're running a " +
      "fever so you don't pass illness on to coworkers, classmates, or vulnerable family members.",
      "Keeping your immune system strong also helps. Prioritize sleep, stay hydrated, and don't let a busy " +
      "fall schedule crowd out regular meals and exercise — all of these make a real difference in how " +
      "well your body fights off seasonal viruses.",
      "If you do start feeling under the weather, don't wait it out for a week before calling us. We hold " +
      "same-week sick visit slots specifically for situations like this, and starting treatment early can " +
      "shorten how long you're miserable and reduce the risk of complications like pneumonia.",
    ],
  },
  {
    slug: "why-annual-wellness-visits-matter",
    title: "Why Annual Wellness Visits Matter, Even When You Feel Fine",
    excerpt:
      "Feeling healthy is exactly why an annual wellness visit is worth keeping on the calendar — here's " +
      "what it can catch that you can't feel yet.",
    publishDate: "2025-09-22",
    authorId: "maya-okonkwo-reyes",
    body: [
      "I hear a version of the same sentence in my exam room almost every week: \"I feel completely fine, " +
      "so I almost cancelled this appointment.\" I understand the instinct, but it's exactly why I want to " +
      "see you.",
      "Many of the most common conditions we manage in primary care — high blood pressure, prediabetes, " +
      "early kidney changes, cholesterol imbalances — produce no symptoms at all in their early stages. " +
      "The only way to catch them while they're still easy to manage is to look, on a regular schedule, " +
      "before symptoms force the issue.",
      "An annual wellness visit isn't just a quick check of your vitals. We review your full medical " +
      "history and any medications, run age- and risk-appropriate screenings, and talk honestly about how " +
      "your lifestyle, stress, and sleep have actually been, not just how you think they should be.",
      "It's also simply good practice to have an established relationship with a physician who knows your " +
      "baseline. When something does come up unexpectedly, whether it's a new symptom or an abnormal lab " +
      "result, we're comparing it against years of your own history rather than starting from zero.",
      "So if you feel great this year, that's genuinely wonderful news, and it's also the ideal time to " +
      "come in. Prevention is always easier, cheaper, and less stressful than treatment, and an annual " +
      "visit is the single best tool we have for staying ahead of problems instead of reacting to them.",
    ],
  },
  {
    slug: "living-well-with-a-chronic-condition",
    title: "Living Well with a Chronic Condition: Practical Tips for Diabetes and Hypertension",
    excerpt:
      "A diabetes or hypertension diagnosis isn't the end of feeling well — a few consistent habits make " +
      "the biggest difference in day-to-day management.",
    publishDate: "2025-08-18",
    authorId: "samuel-whitfield",
    body: [
      "A new diagnosis of diabetes or hypertension can feel overwhelming, especially with so much " +
      "conflicting advice online. In my experience managing these conditions with patients over many " +
      "years, a handful of consistent habits matter far more than any single dramatic change.",
      "For blood pressure, home monitoring is one of the most useful tools you have. Checking at the same " +
      "time each day, seated and rested, gives us a far more accurate picture than the single reading we " +
      "get during an office visit, and it helps us fine-tune medication doses instead of guessing.",
      "For blood sugar management, consistency in meal timing matters nearly as much as what you eat. " +
      "Spacing meals evenly through the day and pairing carbohydrates with protein or fiber helps avoid " +
      "the sharp spikes and crashes that make diabetes harder to control and leave you feeling drained.",
      "Movement doesn't need to mean an intense gym routine. A 20-30 minute daily walk lowers blood " +
      "pressure, improves insulin sensitivity, and is sustainable for most people long-term, which matters " +
      "far more than a workout plan you abandon after two weeks.",
      "Most importantly, don't manage a chronic condition alone. Regular follow-up visits let us adjust " +
      "your treatment plan as your numbers change, catch early signs of complications, and coordinate with " +
      "any specialists involved in your care, so small issues get addressed before they become big ones.",
    ],
  },
  {
    slug: "parents-guide-to-childhood-vaccination-schedule",
    title: "A Parent's Guide to the Childhood Vaccination Schedule",
    excerpt:
      "Vaccination schedules can look overwhelming on paper — here's a plain-language overview of why the " +
      "timing matters and what to expect at each stage.",
    publishDate: "2025-07-30",
    authorId: "priya-nandakumar",
    body: [
      "New parents are often handed a printed vaccination schedule at their first well-child visit, and I " +
      "understand why it can look intimidating. The good news is that the schedule isn't arbitrary — each " +
      "vaccine's timing is based on when a child's immune system can best respond and when they're most " +
      "vulnerable to a particular illness.",
      "In the first few months of life, we focus on protecting against diseases that are especially " +
      "dangerous for infants, like whooping cough, hepatitis B, and rotavirus. Spacing these out across " +
      "well-child visits at 2, 4, and 6 months allows your baby's immune system to build protection " +
      "gradually rather than all at once.",
      "Between 12 and 18 months, we typically add vaccines like MMR (measles, mumps, rubella) and " +
      "varicella (chickenpox), timed to when maternal antibodies your baby was born with have naturally " +
      "faded and your child's own immune system is ready to respond effectively.",
      "As children move into school age and adolescence, boosters and additional vaccines like Tdap, HPV, " +
      "and meningococcal vaccines are added, aligned with school entry requirements and the ages at which " +
      "protection is most valuable.",
      "If your family has fallen behind on the schedule for any reason, please don't let that stop you " +
      "from coming in. There's almost always a safe way to catch up, and I'd much rather work with you on " +
      "a realistic plan than have a gap in the schedule go unaddressed. Bring your questions to your " +
      "child's next well visit; that conversation is exactly what those appointments are for.",
    ],
  },
  {
    slug: "when-a-telehealth-visit-makes-sense",
    title: "When a Telehealth Visit Makes Sense (and When It Doesn't)",
    excerpt:
      "Telehealth is a great fit for a lot of common concerns, but not every visit can safely happen over " +
      "video — here's how to tell the difference.",
    publishDate: "2025-11-04",
    authorId: "marcus-oyelaran",
    body: [
      "Since we started offering telehealth visits, I've had a lot of patients ask the same reasonable " +
      "question: how do I know if my concern is a good fit for video, or if I actually need to come in?",
      "Telehealth works well for follow-up appointments where we're reviewing labs or adjusting a " +
      "medication you're already on, for straightforward prescription refills, and for many minor, " +
      "non-urgent concerns like mild rashes, allergy symptoms, or questions about a chronic condition " +
      "that's stable. It's also convenient for quick questions that don't require a physical exam.",
      "It's a much better fit than an in-person visit if you're simply short on time, dealing with " +
      "transportation challenges, or trying to avoid unnecessary exposure to others while managing a minor " +
      "illness. You still get real, personalized attention from your provider, just without the drive or " +
      "the waiting room.",
      "On the other hand, some situations genuinely need to be seen in person. Anything involving chest " +
      "pain, difficulty breathing, a new or worsening injury, or a condition that requires listening to " +
      "your heart and lungs, checking your reflexes, or otherwise physically examining you isn't something " +
      "we can safely assess over video. New, undiagnosed symptoms also usually warrant an in-person visit " +
      "so we can be thorough.",
      "If you're ever unsure which category your concern falls into, just call us. Our front desk team is " +
      "trained to help you choose the right visit type, and if a telehealth appointment reveals that you " +
      "actually need to be seen in person, we'll get you scheduled right away rather than leaving you " +
      "guessing.",
    ],
  },
];
