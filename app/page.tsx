import Image from "next/image";
import Link from "next/link";
import { CAKES, waLink, WA_ORDER, WA_ENQUIRE, WA_HAMPER, HOURS } from "../lib/data";
import CakeCard from "../components/CakeCard";
import FrostingDivider from "../components/FrostingDivider";

export default function Home() {
  const signatures = CAKES.filter((c) => c.signature);
  const featured = CAKES.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-img-wrap">
            <div className="sprinkles" aria-hidden="true">
              <span className="sprinkle s1" />
              <span className="sprinkle s2" />
              <span className="sprinkle s3" />
              <span className="sprinkle s4" />
              <span className="sprinkle s5" />
              <span className="sprinkle s6" />
              <span className="sprinkle s7" />
              <span className="sprinkle s8" />
            </div>
            <Image
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1000&q=80"
              alt="Designer chocolate layer cake"
              width={1000}
              height={760}
              className="hero-img"
              priority
            />
            <span className="sample-tag">Sample photo</span>
            <div className="hero-card">
              <span className="stars">★★★★★ 4.9</span>
              <p>
                5★ across 8 reviews on bakerias.com — Rohini&apos;s trusted home
                baker for birthdays, weddings &amp; anniversaries.
              </p>
            </div>
          </div>
          <div>
            <p className="eyebrow">Rohini · Delhi — Home Baker</p>
            <h1>
              Freshly Baked. Eggless. <em>Made with Love.</em>
            </h1>
            <p className="hero-sub">
              Custom designer cakes, wedding cakes and festive hampers from
              Preity&apos;s home kitchen in Rohini — 100% eggless, pure
              vegetarian, and baked to order for your celebration.
            </p>
            <div className="hero-cta">
              <a
                className="btn btn-rose"
                href={waLink(WA_ORDER)}
                target="_blank"
                rel="noreferrer"
              >
                Order on WhatsApp →
              </a>
              <Link className="btn btn-ghost" href="/cakes">
                See the cake menu
              </Link>
            </div>
            <div className="hero-badges">
              <span className="pill">🥚 100% Eggless</span>
              <span className="pill">🌱 Pure Vegetarian</span>
              <span className="pill">
                <b>★ 4.9</b> · loved by Rohini
              </span>
              <span className="pill">🎂 Custom designs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Occasions */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Made for your occasion</p>
            <h2>One baker, every celebration</h2>
            <p>
              Tell us the occasion and the design you&apos;re dreaming of —
              we&apos;ll bake it fresh, eggless and exactly how you imagined.
            </p>
          </div>
          <div className="occasions">
            <Link className="occasion" href="/cakes">
              <span className="emoji">🎂</span>
              <h3>Birthdays</h3>
              <p>Vintage, theme &amp; buttercream cakes</p>
            </Link>
            <Link className="occasion" href="/cakes">
              <span className="emoji">💍</span>
              <h3>Weddings</h3>
              <p>Tiered cakes &amp; matching cupcakes</p>
            </Link>
            <Link className="occasion" href="/cakes">
              <span className="emoji">💛</span>
              <h3>Anniversaries</h3>
              <p>Two-tier classics, 60-year milestones</p>
            </Link>
            <Link className="occasion" href="/cakes">
              <span className="emoji">🧸</span>
              <h3>Baby Milestones</h3>
              <p>First-month &amp; first-birthday cakes</p>
            </Link>
            <Link className="occasion" href="/custom-orders">
              <span className="emoji">✨</span>
              <h3>Custom Orders</h3>
              <p>Your design, your flavours</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Signature cakes */}
      <FrostingDivider fill="#fbeeea" />
      <section className="section section-tint">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Only at Piinacle</p>
            <h2>Signature cakes</h2>
            <p>
              Two creations our customers ask for by name — festive, indulgent
              and unmistakably homemade.
            </p>
          </div>
          <div className="cake-grid">
            {signatures.map((c) => (
              <CakeCard key={c.name} cake={c} />
            ))}
            <article className="cake-card">
              <div className="cake-img-wrap">
                <Image
                  src="https://images.unsplash.com/photo-1488477181946-6428a0291777?w=900&q=80"
                  alt="Eggless dessert served in martini glasses"
                  width={900}
                  height={640}
                  className="cake-img"
                  loading="lazy"
                />
                <span className="sample-tag">Sample photo</span>
                <span className="sig-tag">Events</span>
              </div>
              <div className="cake-body">
                <p className="cake-occasion">Event Dessert Service</p>
                <h3>Dessert Tower</h3>
                <p className="cake-desc">
                  Eggless desserts poured into stacked martini glasses — a
                  showpiece dessert service for banquets and big gatherings.
                </p>
                <p className="cake-price">
                  Price on request — enquire on WhatsApp
                </p>
                <a
                  className="btn btn-rose btn-small"
                  href={waLink(
                    `${WA_ENQUIRE} I'd like to book the dessert tower for an event.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Enquire on WhatsApp →
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Featured cakes */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Fresh from the kitchen</p>
            <h2>Customer favourites</h2>
            <p>
              A taste of what we bake — every cake is made to order, so yours
              will look exactly the way you want it.
            </p>
          </div>
          <div className="cake-grid">
            {featured.map((c) => (
              <CakeCard key={c.name} cake={c} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link className="btn btn-gold" href="/cakes">
              Browse the full cake menu →
            </Link>
          </div>
        </div>
      </section>

      {/* Hampers teaser */}
      <FrostingDivider fill="#fbeeea" />
      <section className="section section-tint">
        <div className="container split">
          <div style={{ position: "relative" }}>
            <Image
              src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=1000&q=80"
              alt="Festive cookies and treats for gifting hampers"
              width={1000}
              height={720}
              loading="lazy"
            />
            <span className="sample-tag">Sample photo</span>
          </div>
          <div>
            <p className="eyebrow">Festive gifting</p>
            <h2>Diwali hampers, from ₹500</h2>
            <p>
              Eleven hand-packed hampers — chocolate boxes, Patakha
              Chocolates, Choco Lava Cookie Tins, Shahi Gulab Jamun Cake,
              cookies, candles and more — in reusable boxes, jars and metal
              baskets.
            </p>
            <ul className="check-list">
              <li>Hampers 1–6 · ₹500 – ₹850</li>
              <li>Hampers 7–11 · ₹900 – ₹1,900</li>
              <li>Make Your Own Hamper — pick your favourites</li>
            </ul>
            <div className="hero-cta">
              <Link className="btn btn-rose" href="/hampers">
                See all 11 hampers →
              </Link>
              <a
                className="btn btn-ghost"
                href={waLink(WA_HAMPER)}
                target="_blank"
                rel="noreferrer"
              >
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How to order */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Simple as a message</p>
            <h2>How to order</h2>
            <p>
              No apps, no forms — just WhatsApp us. We confirm your design and
              quote, then bake it fresh for your date.
            </p>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <h3>Message us</h3>
              <p>
                WhatsApp your occasion, date and design idea — a photo
                reference works perfectly.
              </p>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <h3>We confirm</h3>
              <p>
                We confirm the design, size and quote with you before we start
                baking.
              </p>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <h3>Pick up &amp; celebrate</h3>
              <p>
                Your cake is baked fresh and ready at our Rohini studio — ask
                us about delivery on WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit */}
      <FrostingDivider fill="#fbeeea" />
      <section className="section section-tint">
        <div className="container split">
          <div>
            <p className="eyebrow">Visit the studio</p>
            <h2>Find us in Rohini, Sector 24</h2>
            <p>
              Plot No 51-52, Pocket 7, Sector 24, Rohini, Delhi 110085.
              We&apos;re open daily, {HOURS}. Pre-orders only — message us on
              WhatsApp to book your date.
            </p>
            <div className="hero-cta">
              <a
                className="btn btn-rose"
                href={waLink(WA_ORDER)}
                target="_blank"
                rel="noreferrer"
              >
                Order on WhatsApp →
              </a>
              <Link className="btn btn-ghost" href="/contact">
                Get directions
              </Link>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <Image
              src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=1000&q=80"
              alt="Freshly baked dessert, ready to serve"
              width={1000}
              height={720}
              loading="lazy"
            />
            <span className="sample-tag">Sample photo</span>
          </div>
        </div>
      </section>
    </>
  );
}
