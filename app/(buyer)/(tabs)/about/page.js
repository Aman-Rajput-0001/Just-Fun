import { Icon, btn } from "@/components/ui";
import { businessInfo } from "@/lib/business";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "About Brickbaaz",
  "Learn about Brickbaaz property discovery and assistance in Gurugram.",
  "/about",
);
export default function AboutPage() {
  const business = businessInfo();
  return (
    <div className="p-4 md:p-8">
      <section
        id="about"
        className="home-section grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
      >
        <div className="space-y-6">
          <div>
            <p className="home-eyebrow">ABOUT BRICKBAAZ</p>
            <h1 className="home-heading mt-3">
              A clearer path to your next address.
            </h1>
            <p className="mt-4 text-sm leading-7 text-mute">{business.intro}</p>
          </div>
          <div className="space-y-3">
            {[
              [
                "Real listing details",
                "Explore the photos, pricing and information added by our property desk.",
              ],
              [
                "A conversation, not a guess",
                "Send your questions and discuss availability before planning a visit.",
              ],
              [
                "Your shortlist, in one place",
                "Save the properties you like and return when you are ready.",
              ],
            ].map(([title, body]) => (
              <div key={title} className="flex gap-3">
                <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-sm font-bold">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-mute">{body}</p>
                </div>
              </div>
            ))}
          </div>
          <a href="/#contact" className={btn("primary")}>
            Talk to Brickbaaz <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="about-panel relative overflow-hidden rounded-[32px] bg-navy p-7 text-white md:p-10">
          <div className="relative z-10">
            <p className="text-xs font-bold tracking-widest text-[#f2bc87]">
              FOCUSED ON GURUGRAM
            </p>
            <p className="mt-5 text-3xl font-extrabold leading-tight md:text-4xl">
              A place to live.
              <br />
              Space to grow.
              <br />
              <span className="text-[#f2bc87]">A move that feels right.</span>
            </p>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/70">
              Homes, builder floors, plots and commercial spaces. Discover your
              options at your own pace.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-3">
              {[
                ["home", "Properties"],
                ["building", "Builder projects"],
                ["map", "Site visits"],
                ["calc", "Loan enquiries"],
              ].map(([icon, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <Icon name={icon} className="mb-3 h-5 w-5 text-[#f2bc87]" />
                  <p className="text-xs font-semibold">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
