/**
 * Care team content for Primary Care of Johns Creek.
 *
 * Pure typed data only — no JSX, no rendering logic. Components (e.g.
 * TeamProfileCard) receive this data as props and remain presentation-only,
 * keeping content and rendering decoupled per hexagonal architecture.
 *
 * Headshots are local files stored under public/images/team/, named to
 * match each member's `id` (e.g. /images/team/maya-okonkwo-reyes.jpg).
 */

/** Supported credential types for care team members. */
export type Credential = "MD" | "PA-C" | "RN";

/** A single care team member. */
export interface TeamMember {
  /** Stable identifier, e.g. for React keys or future deep-linking. */
  id: string;
  name: string;
  credential: Credential;
  /** Role or clinical specialty, e.g. "Family Medicine Physician". */
  role: string;
  bio: string;
  imageUrl: string;
}

export const team: TeamMember[] = [
  {
    id: "maya-okonkwo-reyes",
    name: "Dr. Maya Okonkwo-Reyes",
    credential: "MD",
    role: "Founder & Family Medicine Physician",
    bio:
      "Dr. Okonkwo-Reyes founded Primary Care of Johns Creek in 2011 after training in family medicine " +
      "at Emory. She believes the best medicine happens when patients feel truly heard, and she still " +
      "carves out extra time for new patients on her schedule every week.",
    imageUrl: "/images/team/maya-okonkwo-reyes.jpg",
  },
  {
    id: "samuel-whitfield",
    name: "Dr. Samuel Whitfield",
    credential: "MD",
    role: "Internal Medicine Physician",
    bio:
      "Dr. Whitfield specializes in adult chronic disease management, with a particular focus on diabetes " +
      "and cardiovascular health. He's known for translating complex lab results into plans patients can " +
      "actually follow.",
    imageUrl: "/images/team/samuel-whitfield.jpg",
  },
  {
    id: "priya-nandakumar",
    name: "Dr. Priya Nandakumar",
    credential: "MD",
    role: "Pediatric & Adolescent Medicine Physician",
    bio:
      "Dr. Nandakumar leads our pediatric care, from newborn checkups to teen sports physicals. Parents " +
      "regularly praise her calm, unhurried approach with anxious first-time visitors of all ages.",
    imageUrl: "/images/team/priya-nandakumar.jpg",
  },
  {
    id: "leon-marchetti",
    name: "Dr. Leon Marchetti",
    credential: "MD",
    role: "Geriatric & Adult Medicine Physician",
    bio:
      "Dr. Marchetti focuses on care for older adults, coordinating closely with specialists to keep " +
      "treatment plans simple and manageable for patients and their families alike.",
    imageUrl: "/images/team/leon-marchetti.jpg",
  },
  {
    id: "hannah-decosta",
    name: "Hannah DeCosta",
    credential: "PA-C",
    role: "Physician Assistant, Urgent & Acute Care",
    bio:
      "Hannah handles many of our same-week sick visits, from seasonal illness to minor injuries. Patients " +
      "love how quickly she can diagnose and get them back on their feet.",
    imageUrl: "/images/team/hannah-decosta.jpg",
  },
  {
    id: "marcus-oyelaran",
    name: "Marcus Oyelaran",
    credential: "PA-C",
    role: "Physician Assistant, Preventive Care",
    bio:
      "Marcus focuses on wellness visits and preventive screenings, helping patients build sustainable " +
      "habits around nutrition, movement, and long-term health.",
    imageUrl: "/images/team/marcus-oyelaran.jpg",
  },
  {
    id: "carla-jimenez",
    name: "Carla Jimenez",
    credential: "RN",
    role: "Lead Nurse, Care Coordination",
    bio:
      "Carla is often the first friendly voice patients hear when they call. She coordinates referrals, " +
      "follow-ups, and makes sure nothing falls through the cracks between visits.",
    imageUrl: "/images/team/carla-jimenez.jpg",
  },
  {
    id: "derek-holloway",
    name: "Derek Holloway",
    credential: "RN",
    role: "Nurse, Immunizations & Chronic Care",
    bio:
      "Derek manages our immunization program and supports patients managing chronic conditions with " +
      "check-ins between appointments, so small issues don't become big ones.",
    imageUrl: "/images/team/derek-holloway.jpg",
  },
  {
    id: "renee-abrams",
    name: "Renee Abrams",
    credential: "RN",
    role: "Nurse, Pediatric Support",
    bio:
      "Renee works alongside Dr. Nandakumar in pediatric care, known throughout Johns Creek for her gentle " +
      "touch with even the most nervous young patients.",
    imageUrl: "/images/team/renee-abrams.jpg",
  },
];
