import Image from "next/image";
import { waLink, WA_CUSTOM, WA_ENQUIRE } from "../../lib/data";

export default function CustomOrdersPage() {
  return (
    <>
      <section className="section" style={{ paddingBottom: "1rem" }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Made just for you</p>
            <h2>Custom orders</h2>
            <p>
              A birthday theme, a wedding tier, a cake that looks like your
              favourite thing — if you can describe it (or send a photo), we
              can bake it. Every custom cake is 100% eggless and made to
              order.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container">
          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <h3>WhatsApp your idea</h3>
              <p>
                Send us your occasion, date and design idea — a reference
                photo works perfectly.
              </p>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <h3>We confirm &amp; quote</h3>
              <p>
                We confirm the design, size and price with you before we
                start baking — no surprises.
              </p>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <h3>Pre-order &amp; collect</h3>
              <p>
                Your cake is baked fresh for your date and ready at our
                Rohini studio — ask us about delivery on WhatsApp.
              </p>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <a
              className="btn btn-rose"
              href={waLink(WA_CUSTOM)}
              target="_blank"
              rel="noreferrer"
            >
              Start my custom order →
            </a>
          </div>
        </div>
      </section>

      {/* Dessert tower */}
      <section className="section section-tint">
        <div className="container split">
          <div style={{ position: "relative" }}>
            <Image
              src="https://images.unsplash.com/photo-1488477181946-6428a0291777?w=1000&q=80"
              alt="Eggless dessert served in martini glasses"
              width={1000}
              height={720}
              loading="lazy"
            />
            <span className="sample-tag">Sample photo</span>
          </div>
          <div>
            <p className="eyebrow">For big gatherings</p>
            <h2>The dessert tower</h2>
            <p>
              Our event dessert service — eggless desserts poured into stacked
              martini glasses, served live at your banquet or celebration. A
              centrepiece your guests will remember (and photograph).
            </p>
            <ul className="check-list">
              <li>Perfect for weddings, receptions &amp; large parties</li>
              <li>100% eggless, made fresh for your event</li>
              <li>Styled on-site for the occasion</li>
            </ul>
            <a
              className="btn btn-rose"
              href={waLink(
                `${WA_ENQUIRE} I'd like to book the dessert tower for an event.`
              )}
              target="_blank"
              rel="noreferrer"
            >
              Book the dessert tower →
            </a>
          </div>
        </div>
      </section>

      {/* Occasions we cover */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">We bake for</p>
            <h2>Every kind of celebration</h2>
          </div>
          <div className="occasions">
            <div className="occasion">
              <span className="emoji">🎂</span>
              <h3>Birthdays</h3>
              <p>Themes, vintage &amp; buttercream</p>
            </div>
            <div className="occasion">
              <span className="emoji">💍</span>
              <h3>Weddings</h3>
              <p>Tiered cakes &amp; cupcakes</p>
            </div>
            <div className="occasion">
              <span className="emoji">💛</span>
              <h3>Anniversaries</h3>
              <p>From 1st to 60th year</p>
            </div>
            <div className="occasion">
              <span className="emoji">🧸</span>
              <h3>Baby Milestones</h3>
              <p>First month &amp; first birthday</p>
            </div>
            <div className="occasion">
              <span className="emoji">🎁</span>
              <h3>Gifting</h3>
              <p>Hampers &amp; festive boxes</p>
            </div>
          </div>
          <div className="note-box" style={{ textAlign: "center" }}>
            <b>Planning ahead?</b> Custom cakes are pre-order — message us as
            early as you can so your date is locked in. Lead time, delivery
            and payment details are confirmed on WhatsApp.
          </div>
        </div>
      </section>
    </>
  );
}
