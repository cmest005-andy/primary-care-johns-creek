import { practice } from "@/content/practice";

/**
 * Approximate coordinates for 3175 Buice Road, Suite 210, Johns Creek, GA
 * 30097, used to center the embedded OpenStreetMap and place a marker.
 *
 * Kept as named constants (rather than inline magic numbers) so the map's
 * center/marker and its bounding box stay easy to find and adjust together
 * if the practice ever relocates.
 */
const PRACTICE_LOCATION = {
  latitude: 34.0288,
  longitude: -84.1986,
};

/**
 * Neighborhood-scale bounding box around the practice location, expressed
 * as degrees of padding from the center point. A ~0.01° longitude / 0.005°
 * latitude pad gives a reasonably zoomed-in view (roughly a mile or two
 * across) without requiring an API key or client-side map library.
 */
const MAP_BOUNDS_PADDING = {
  longitude: 0.01,
  latitude: 0.005,
};

/** Public OpenStreetMap embed URL (no API key required) centered on the practice. */
const OSM_EMBED_URL = (() => {
  const { latitude, longitude } = PRACTICE_LOCATION;
  const minLon = longitude - MAP_BOUNDS_PADDING.longitude;
  const maxLon = longitude + MAP_BOUNDS_PADDING.longitude;
  const minLat = latitude - MAP_BOUNDS_PADDING.latitude;
  const maxLat = latitude + MAP_BOUNDS_PADDING.latitude;

  const bbox = `${minLon},${minLat},${maxLon},${maxLat}`;
  const marker = `${latitude},${longitude}`;

  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${marker}`;
})();

/**
 * Contact page — address, phone, email, hours, and a directions/map
 * section. All data sourced from `src/content/practice.ts`; this file is
 * presentation only.
 *
 * Visual treatment: contact detail cards use a tinted cream surface with a
 * bold sage left accent bar (matching the site-wide card pattern) instead
 * of flat white boxes with a thin border.
 */
export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <h1 className="text-4xl font-bold tracking-tight text-sage-900">
        Visit or Reach Us
      </h1>
      <p className="mt-4 max-w-2xl text-charcoal-700">
        We&rsquo;d love to welcome you to {practice.name}. Here&rsquo;s
        everything you need to find us or get in touch.
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        {/* Contact details */}
        <div className="space-y-8">
          <div className="rounded-2xl border border-sage-300 border-l-4 border-l-sage-500 bg-cream-100 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-sage-800">Address</h2>
            <p className="mt-2 text-charcoal-600">
              {practice.address.line1}
              {practice.address.line2 ? `, ${practice.address.line2}` : ""}
              <br />
              {practice.address.city}, {practice.address.state}{" "}
              {practice.address.zip}
            </p>
          </div>

          <div className="rounded-2xl border border-sage-300 border-l-4 border-l-sage-500 bg-cream-100 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-sage-800">
              Phone &amp; Email
            </h2>
            <p className="mt-2 text-charcoal-600">
              <a
                href={`tel:${practice.phone.replace(/[^\d+]/g, "")}`}
                className="hover:text-terracotta-600"
              >
                {practice.phone}
              </a>
              <br />
              <a
                href={`mailto:${practice.email}`}
                className="hover:text-terracotta-600"
              >
                {practice.email}
              </a>
            </p>
          </div>

          <div className="rounded-2xl border border-sage-300 border-l-4 border-l-sage-500 bg-cream-100 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-sage-800">
              Hours of Operation
            </h2>
            <ul className="mt-2 space-y-1 text-charcoal-600">
              {practice.hours.map((entry) => (
                <li key={entry.days} className="flex justify-between gap-4">
                  <span>{entry.days}</span>
                  <span className="font-medium">{entry.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Directions / map */}
        <div className="rounded-2xl border border-sage-300 border-l-4 border-l-terracotta-400 bg-cream-100 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-sage-800">
            Getting Here
          </h2>
          <p className="mt-2 text-charcoal-600">{practice.directions}</p>

          <div className="relative mt-4 h-64 w-full overflow-hidden rounded-xl bg-sage-200 sm:h-80">
            <iframe
              src={OSM_EMBED_URL}
              title={`Map showing the location of ${practice.name}`}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
