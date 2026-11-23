import Link from "next/link";
import { Icon } from "@/components/ui";
const SERVICES = [
  [
    "Find a home to buy",
    "Explore prices, photos and property details, then enquire about a home that fits your plans.",
    "home",
    "/search?p=sale",
    "Explore homes",
  ],
  [
    "Discover your next rental",
    "Browse rental homes by location, budget and space. Contact the property desk about availability.",
    "pin",
    "/search?p=rent",
    "Browse rentals",
  ],
  [
    "Experience it in person",
    "Choose a property or project and request a site visit. Our team will coordinate the details with you.",
    "map",
    "/#properties",
    "Find a property to visit",
  ],
  [
    "Explore loan assistance",
    "Tell us the loan type and amount you need. Submit an enquiry to discuss the next steps with our team.",
    "calc",
    "/services#enquire",
    "Request loan assistance",
  ],
];

export default function OurServices() {
  return (
    <section id="our-services" className="home-section space-y-7">
      <div>
        <p className="home-eyebrow">OUR SERVICES</p>
        <h2 className="home-heading mt-3">More support for your next move.</h2>
        <p className="mt-4 text-mute">
          Start with a search. Take the next step with a conversation.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map(([title, body, icon, href, label]) => (
          <div
            key={title}
            className="home-service-card flex flex-col rounded-3xl border border-line bg-white p-6"
          >
            <span className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-brand-soft text-brand">
              <Icon name={icon} className="h-6 w-6" />
            </span>
            <h3 className="text-lg font-extrabold">{title}</h3>
            <p className="mb-6 mt-3 text-sm leading-7 text-mute">{body}</p>
            <Link href={href} className="mt-auto text-sm font-bold text-brand">
              {label} <span aria-hidden="true">→</span>
            </Link>
          </div>
        ))}
      </div>
      <p className="text-xs leading-6 text-mute">
        Loan assistance begins with an enquiry. Eligibility, terms and approval
        are determined by the lending provider.
      </p>
    </section>
  );
}
