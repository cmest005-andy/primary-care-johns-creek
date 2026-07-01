/**
 * New Patient / FAQ content for Primary Care of Johns Creek.
 *
 * Pure typed data only — no JSX, no rendering logic, no framework imports.
 * Mirrors the convention established in `practice.ts` and `team.ts`: the
 * `/new-patient` page imports this module and is responsible only for
 * layout/presentation, keeping content and rendering decoupled per
 * hexagonal architecture.
 */

/** A single item in the "what to bring" checklist for a first visit. */
export interface ChecklistItem {
  title: string;
  description: string;
}

/** A single question/answer pair in the FAQ section. */
export interface FaqEntry {
  question: string;
  answer: string;
}

/** Aggregate shape of all new-patient-facing content. */
export interface NewPatientContent {
  /** Short welcoming intro paragraph for prospective new patients. */
  intro: string;
  /** Checklist of items/info to bring to a first visit. */
  whatToBring: ChecklistItem[];
  /**
   * Representative list of insurance providers we accept. This is an
   * invented, illustrative list for demo content — not a claim of actual
   * contracted payers.
   */
  insuranceAccepted: string[];
  /** Frequently asked questions from prospective and current patients. */
  faqs: FaqEntry[];
}

export const newPatient: NewPatientContent = {
  intro:
    "Welcome! We're so glad you're considering Primary Care of Johns Creek for you and your family. " +
    "Becoming a new patient here is simple and unhurried — from your very first phone call to your first " +
    "appointment, our goal is to make you feel like you've been coming here for years. Below you'll find " +
    "everything you need to get started, what to bring to your first visit, the insurance plans we accept, " +
    "and answers to the questions new patients ask us most.",

  whatToBring: [
    {
      title: "Photo ID",
      description:
        "A valid driver's license, state ID, or passport for anyone 18 or older establishing care.",
    },
    {
      title: "Insurance Card",
      description:
        "Your current insurance card (front and back) so we can verify benefits before your visit.",
    },
    {
      title: "Current Medication List",
      description:
        "A list of all prescriptions, over-the-counter medications, vitamins, and supplements you take.",
    },
    {
      title: "Referral (if applicable)",
      description:
        "If your insurance plan requires a referral to see a primary care provider, please bring that paperwork.",
    },
    {
      title: "Relevant Medical Records",
      description:
        "Any recent lab results, imaging reports, or records from a previous provider that may be helpful.",
    },
    {
      title: "Method of Payment",
      description:
        "A credit card, debit card, or check to cover any copay, deductible, or self-pay balance due at check-in.",
    },
  ],

  insuranceAccepted: [
    "Aetna",
    "Blue Cross Blue Shield",
    "Cigna",
    "UnitedHealthcare",
    "Medicare",
    "Humana",
    "Ambetter",
  ],

  faqs: [
    {
      question: "How do I schedule my first appointment?",
      answer:
        "Simply call our front desk or use our online contact form. We keep same-week openings available " +
        "for new patients, and our team will help you find a time that works with your schedule.",
    },
    {
      question: "Do you offer telehealth visits?",
      answer:
        "Yes. We offer secure video appointments for follow-ups, medication management, and many minor " +
        "concerns. Your provider will let you know if a telehealth visit is appropriate for your needs.",
    },
    {
      question: "How do I request a prescription refill?",
      answer:
        "Prescription refill requests can be sent through your pharmacy or by calling our office directly. " +
        "Please allow up to 48 hours for routine refill requests to be processed.",
    },
    {
      question: "Can I be seen the same day if I'm sick?",
      answer:
        "Absolutely. We reserve same-week — and often same-day — sick visit slots for colds, flu, " +
        "infections, and other everyday illnesses, so you don't have to wait weeks to be seen.",
    },
    {
      question: "What if I need care after office hours?",
      answer:
        "Our answering service is available around the clock to reach an on-call provider for urgent " +
        "questions. For true emergencies, please call 911 or go to your nearest emergency room.",
    },
    {
      question: "How long will my first visit take?",
      answer:
        "First visits typically run 45–60 minutes so your provider has time to review your history, " +
        "understand your goals, and answer any questions — no need to rush.",
    },
    {
      question: "Do you see children as well as adults?",
      answer:
        "Yes, we welcome patients of all ages, from newborns through seniors, and offer dedicated " +
        "pediatric and adolescent care alongside adult and geriatric medicine.",
    },
    {
      question: "What if my insurance isn't on your accepted list?",
      answer:
        "Give our front desk a call — we work with a wide range of plans and can quickly verify your " +
        "specific coverage, or discuss self-pay options if needed.",
    },
  ],
};
