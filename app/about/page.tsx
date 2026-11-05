import Image from "next/image";
import Link from "next/link";
import { waLink, WA_ORDER } from "../../lib/data";

export default function AboutPage() {
  return (
    <>
      <section className="section">
        <div className="container split">
          <div style={{ position: "relative" }}>
            <Image
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1000&q=80"
              alt="A freshly baked designer cake"
              width={1000}
              height={760}
              loading="lazy"
            />
            <span className="sample-tag">Sample photo</span>
          </div>
          <div>
            <p className="eyebrow">About the baker</p>
            <h2>Hi, I&apos;m Preity — and I bake with heart</h2>
            <p>
              Piinacle Caakery is my home bakery in Rohini, Sector 24. What
              started as baking for family celebrations became a little studio
              where every cake is made by hand, fresh to order — never
              off a shelf, never rushed.
            </p>
            <p>
              Everything I bake is 100% eggless and pure vegetarian, because
              the best celebrations are the ones everyone at the table can
              enjoy. From a baby&apos;s first-month cake to a 60th
              anniversary, from a Bigg Boss theme cake to a wedding tier — I
              love the moment a cake makes someone&apos;s day.
            </p>
            <p className="quote">
              &ldquo;Every cake I create carries a little piece of my
              heart.&rdquo;
            </p>
            <p>
              Elegant, timeless and handcrafted — that&apos;s the promise
              behind every order.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Why Rohini trusts us</p>
            <h2>Baked the homemade way</h2>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-num">🥚</div>
              <h3>100% Eggless</h3>
              <p>
                Every single cake, dessert and hamper is eggless — no
                exceptions, ever.
              </p>
            </div>
            <div className="step">
              <div className="step-num">💛</div>
              <h3>Made to Order</h3>
              <p>
                Baked fresh for your date — your cake is never sitting in a
                display case.
              </p>
            </div>
            <div className="step">
              <div className="step-num">★</div>
              <h3>4.9★ Loved Locally</h3>
              <p>
                5★ across 8 reviews on bakerias.com, and trusted for community
                celebrations — including a dessert service for Brahma Kumaris.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <h2>Let&apos;s bake your celebration</h2>
            <p>
              Tell us the occasion — we&apos;ll take care of the cake.
            </p>
            <div className="hero-cta" style={{ justifyContent: "center" }}>
              <a
                className="btn btn-gold"
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
          </div>
        </div>
      </section>
    </>
  );
}
