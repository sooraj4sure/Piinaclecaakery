import { CAKES } from "../../lib/data";
import CakeCard from "../../components/CakeCard";

const SECTIONS = [
  { title: "Birthday Cakes", occasion: "Birthday" },
  { title: "Wedding Cakes", occasion: "Wedding" },
  { title: "Anniversary Cakes", occasion: "Anniversary" },
  { title: "Baby Milestones", occasion: "Baby Milestone" },
  { title: "Theme Cakes", occasion: "Theme Cake" },
  { title: "Signature Cakes", occasion: "Signature" },
];

export default function CakesPage() {
  return (
    <>
      <section className="section" style={{ paddingBottom: "1rem" }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">The cake menu</p>
            <h2>Cakes, baked to order</h2>
            <p>
              Every cake is 100% eggless, pure vegetarian and made fresh for
              your celebration. Prices are confirmed on WhatsApp — share your
              occasion, size and design, and we&apos;ll quote you before we
              bake.
            </p>
          </div>
        </div>
      </section>

      {SECTIONS.map((section) => {
        const cakes = CAKES.filter((c) => c.occasion === section.occasion);
        if (cakes.length === 0) return null;
        return (
          <section key={section.title} className="section" style={{ paddingTop: "1.2rem", paddingBottom: "1.2rem" }}>
            <div className="container">
              <div className="section-head left">
                <h2 style={{ fontSize: "1.6rem" }}>{section.title}</h2>
              </div>
              <div className="cake-grid">
                {cakes.map((c) => (
                  <CakeCard key={c.name} cake={c} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <h2>Don&apos;t see your cake yet?</h2>
            <p>
              If you have a design in mind — a theme, a colour, a photo —
              send it to us on WhatsApp. If it can be baked, we&apos;ll bake
              it.
            </p>
            <a
              className="btn btn-gold"
              href="https://wa.me/919312836397?text=Hi%20Preity!%20I%20have%20a%20custom%20cake%20design%20in%20mind."
              target="_blank"
              rel="noreferrer"
            >
              Send your design on WhatsApp →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
