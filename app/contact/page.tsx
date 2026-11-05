import {
  ADDRESS,
  HOURS,
  INSTAGRAM,
  INSTAGRAM_HANDLE,
  MAP_URL,
  PHONE_DISPLAY,
  waLink,
  WA_ORDER,
} from "../../lib/data";

export default function ContactPage() {
  return (
    <>
      <section className="section" style={{ paddingBottom: "1rem" }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Visit us · Order · Enquire</p>
            <h2>Come say hello</h2>
            <p>
              We&apos;re a home bakery, so every order starts with a message.
              WhatsApp us your occasion and date — we&apos;ll take it from
              there.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container contact-grid">
          <div className="contact-card">
            <h3>Order &amp; enquire</h3>
            <div className="contact-row">
              <p className="label">WhatsApp / Call</p>
              <p>
                <a href={waLink(WA_ORDER)} target="_blank" rel="noreferrer">
                  {PHONE_DISPLAY}
                </a>
              </p>
            </div>
            <div className="contact-row">
              <p className="label">Instagram</p>
              <p>
                <a href={INSTAGRAM} target="_blank" rel="noreferrer">
                  {INSTAGRAM_HANDLE}
                </a>
              </p>
              <p style={{ fontSize: "0.9rem", color: "#7a5c58" }}>
                DM us for custom orders — we reply on WhatsApp too.
              </p>
            </div>
            <div className="contact-row">
              <p className="label">Hours</p>
              <p>Open daily · {HOURS}</p>
            </div>
            <a
              className="btn btn-rose"
              href={waLink(WA_ORDER)}
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp →
            </a>
          </div>

          <div className="contact-card">
            <h3>Visit the studio</h3>
            <div className="contact-row">
              <p className="label">Address</p>
              <p>{ADDRESS}</p>
            </div>
            <div className="contact-row">
              <p className="label">Pickup</p>
              <p>
                Cakes are collected from our Rohini studio. Ask us about
                delivery on WhatsApp.
              </p>
            </div>
            <div className="contact-row">
              <p className="label">Pre-orders only</p>
              <p>
                Every cake is baked fresh to order — please message us ahead
                so your date is locked in.
              </p>
            </div>
            <a
              className="btn btn-gold"
              href={MAP_URL}
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
