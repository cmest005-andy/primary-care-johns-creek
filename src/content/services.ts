/**
 * Clinical services content for Primary Care of Johns Creek.
 *
 * Pure typed data only — no JSX, no rendering logic, no framework imports.
 * This is the single source of truth for the practice's service catalog
 * (previously duplicated inside `practice.ts`); both the home page summary
 * cards and the dedicated `/services` and `/services/[slug]` pages import
 * from here, keeping content and presentation decoupled per hexagonal
 * architecture.
 */

/** A single offered clinical service, with enough detail to power both a
 * brief summary card and a full dedicated detail page. */
export interface Service {
  /** URL-safe identifier used for routing, e.g. `/services/[slug]`. */
  slug: string;
  title: string;
  /** Existing one-line summary, used on brief/card treatments. */
  shortDescription: string;
  /** Expanded, 2-3 sentence explanation shown on the service's detail page. */
  longDescription: string;
  /** Bullet points describing what a typical visit for this service involves. */
  whatToExpect: string[];
}

export const services: Service[] = [
  {
    slug: "annual-wellness-preventive-care",
    title: "Annual Wellness & Preventive Care",
    shortDescription:
      "Comprehensive physicals, screenings, and personalized prevention plans to keep you and your family healthy year-round.",
    longDescription:
      "Our annual wellness visits go beyond a quick check of vitals — we review your full health history, " +
      "run age- and risk-appropriate screenings, and build a personalized prevention plan aimed at catching " +
      "small issues before they become big ones. It's the foundation of proactive, whole-family primary care.",
    whatToExpect: [
      "A full review of your medical history, medications, and lifestyle factors",
      "Age- and risk-appropriate screenings (bloodwork, vitals, cancer screenings, etc.)",
      "A personalized prevention plan covering diet, exercise, and risk reduction",
      "Time to ask questions and discuss any new or ongoing health concerns",
      "A clear summary of next steps and any recommended follow-up care",
    ],
  },
  {
    slug: "chronic-disease-management",
    title: "Chronic Disease Management",
    shortDescription:
      "Ongoing, coordinated care for diabetes, hypertension, high cholesterol, asthma, and other long-term conditions.",
    longDescription:
      "Living with a chronic condition requires more than an occasional check-in — it requires a consistent, " +
      "coordinated plan. Our team partners with you over time to monitor your condition, adjust treatment as " +
      "needed, and coordinate with specialists so nothing falls through the cracks.",
    whatToExpect: [
      "Review of recent labs, vitals, and symptom changes since your last visit",
      "Medication review and adjustments as needed",
      "Coordination with any specialists involved in your care",
      "Practical guidance on diet, activity, and self-monitoring at home",
      "A plan for your next check-in and any needed testing",
    ],
  },
  {
    slug: "same-week-sick-visits",
    title: "Same-Week Sick Visits",
    shortDescription:
      "Fast, friendly care for colds, flu, infections, and other everyday illnesses — no need to wait weeks for an appointment.",
    longDescription:
      "When you're feeling unwell, waiting weeks for an appointment isn't an option. We reserve same-week — " +
      "and often same-day — slots so you can be seen quickly, get an accurate diagnosis, and start feeling " +
      "better sooner.",
    whatToExpect: [
      "A prompt appointment, typically within the same week you call",
      "A focused exam targeting your current symptoms",
      "On-site testing when appropriate (e.g. rapid strep, flu, or urinalysis)",
      "A treatment plan and, if needed, a prescription sent to your pharmacy",
      "Guidance on when to follow up or seek further care if symptoms persist",
    ],
  },
  {
    slug: "pediatric-adolescent-care",
    title: "Pediatric & Adolescent Care",
    shortDescription:
      "Well-child checkups, immunizations, and growth monitoring for patients from early childhood through the teen years.",
    longDescription:
      "From newborn checkups to teen sports physicals, our pediatric team provides attentive, unhurried care " +
      "at every stage of childhood. We focus on growth, development, and immunizations, while keeping parents " +
      "informed and involved every step of the way.",
    whatToExpect: [
      "Growth and development tracking appropriate to your child's age",
      "Immunizations administered on the recommended schedule",
      "Age-specific screenings (vision, hearing, behavioral, etc.)",
      "Time for parents to ask questions about development, nutrition, or behavior",
      "School, sports, or camp physical forms completed as needed",
    ],
  },
  {
    slug: "womens-mens-health",
    title: "Women's & Men's Health",
    shortDescription:
      "Preventive screenings, hormone health, and personalized wellness guidance tailored to every stage of life.",
    longDescription:
      "Every stage of life brings different health needs. Our providers offer preventive screenings, hormone " +
      "health evaluations, and personalized wellness guidance tailored specifically to you, whether you're " +
      "focused on reproductive health, midlife changes, or long-term wellness.",
    whatToExpect: [
      "A private conversation about your health history and current concerns",
      "Preventive screenings appropriate to your age and risk factors",
      "Discussion of hormone health and any related symptoms",
      "Personalized guidance on nutrition, activity, and long-term wellness",
      "Referrals to specialists when more focused care is needed",
    ],
  },
  {
    slug: "telehealth-visits",
    title: "Telehealth Visits",
    shortDescription:
      "Secure video appointments for follow-ups, medication management, and minor concerns — from wherever you are.",
    longDescription:
      "Not every visit requires a trip to the office. Our secure telehealth platform lets you connect with " +
      "your provider by video for follow-ups, medication management, and many minor concerns, saving you time " +
      "without sacrificing the personal attention you expect from us.",
    whatToExpect: [
      "A secure video link sent to your phone, tablet, or computer ahead of time",
      "A focused conversation about your symptoms, follow-up, or medications",
      "Prescription changes or refills sent directly to your pharmacy when appropriate",
      "Guidance on whether an in-person visit is needed for further evaluation",
      "A summary of the visit added to your medical record",
    ],
  },
];
