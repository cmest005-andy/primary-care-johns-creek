/**
 * Practice-level content for Primary Care of Johns Creek.
 *
 * This file is a pure data module — no JSX, no rendering logic, no
 * framework imports. It acts as the "port"/data contract that page and
 * component modules consume, keeping business content decoupled from
 * presentation (hexagonal architecture applied to content).
 */

/** A single operating-hours entry for one day (or day range). */
export interface OperatingHours {
  /** e.g. "Monday – Friday" or "Saturday" */
  days: string;
  /** e.g. "8:00 AM – 5:00 PM" or "Closed" */
  hours: string;
}

/** A single core value the practice holds. */
export interface PracticeValue {
  title: string;
  description: string;
}

/** A single offered clinical service. */
export interface Service {
  title: string;
  description: string;
}

/** Physical mailing/visit address. */
export interface PracticeAddress {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  zip: string;
}

/** Aggregate shape of all practice-level content. */
export interface PracticeInfo {
  name: string;
  tagline: string;
  foundingStory: string;
  mission: string;
  values: PracticeValue[];
  services: Service[];
  address: PracticeAddress;
  phone: string;
  email: string;
  hours: OperatingHours[];
  /** Human-readable directions blurb shown alongside the embedded map. */
  directions: string;
}

export const practice: PracticeInfo = {
  name: "Primary Care of Johns Creek",
  tagline: "Compassionate, whole-family care — right here in Johns Creek.",

  foundingStory:
    "Primary Care of Johns Creek was founded in 2011 by Dr. Maya Okonkwo-Reyes, who set out to build " +
    "the kind of practice she wished her own family had growing up: unhurried, genuinely attentive, and " +
    "easy to reach when it matters most. What began as a single exam room above a Johns Creek coffee shop " +
    "has grown into a full primary care team, but the founding promise hasn't changed — every patient is " +
    "treated like a neighbor, because most of them are.",

  mission:
    "Our mission is to provide accessible, personalized primary care that treats the whole person — body " +
    "and peace of mind — while building lasting relationships with the families and individuals of Johns " +
    "Creek and the greater North Fulton community.",

  values: [
    {
      title: "Warmth First",
      description:
        "Every visit starts with listening. We take the time to understand your story before we talk about treatment.",
    },
    {
      title: "Whole-Person Care",
      description:
        "We treat people, not just symptoms — considering physical, emotional, and lifestyle factors in every plan of care.",
    },
    {
      title: "Real Access",
      description:
        "Same-week appointments, responsive messaging, and a team that actually picks up the phone.",
    },
    {
      title: "Community Roots",
      description:
        "We're your neighbors. We sponsor local youth sports, host free wellness workshops, and show up for Johns Creek.",
    },
  ],

  services: [
    {
      title: "Annual Wellness & Preventive Care",
      description:
        "Comprehensive physicals, screenings, and personalized prevention plans to keep you and your family healthy year-round.",
    },
    {
      title: "Chronic Disease Management",
      description:
        "Ongoing, coordinated care for diabetes, hypertension, high cholesterol, asthma, and other long-term conditions.",
    },
    {
      title: "Same-Week Sick Visits",
      description:
        "Fast, friendly care for colds, flu, infections, and other everyday illnesses — no need to wait weeks for an appointment.",
    },
    {
      title: "Pediatric & Adolescent Care",
      description:
        "Well-child checkups, immunizations, and growth monitoring for patients from early childhood through the teen years.",
    },
    {
      title: "Women's & Men's Health",
      description:
        "Preventive screenings, hormone health, and personalized wellness guidance tailored to every stage of life.",
    },
    {
      title: "Telehealth Visits",
      description:
        "Secure video appointments for follow-ups, medication management, and minor concerns — from wherever you are.",
    },
  ],

  address: {
    line1: "3175 Buice Road, Suite 210",
    city: "Johns Creek",
    state: "GA",
    zip: "30097",
  },

  phone: "(678) 555-0142",
  email: "frontdesk@primarycarejohnscreek.example",

  hours: [
    { days: "Monday – Friday", hours: "8:00 AM – 5:00 PM" },
    { days: "Saturday", hours: "9:00 AM – 12:00 PM (by appointment)" },
    { days: "Sunday", hours: "Closed" },
  ],

  directions:
    "We're located just off Medlock Bridge Road in the Johns Creek Medical Commons, across from the " +
    "Newtown Park entrance — plenty of free parking is available directly in front of the building.",
};
