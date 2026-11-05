import Image from "next/image";
import { HAMPER_RANGES, waLink, WA_HAMPER } from "../../lib/data";
import HamperCard from "../../components/HamperCard";

export default function HampersPage() {
  return (
    <>
      <section className="section" style={{ paddingBottom: "1rem" }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Festive gifting</p>
            <h2>Diwali hampers 2026</h2>
            <p>
              Eleven hand-packed hampers for Diwali gifting — chocolates,
              cookies, cakes, candles and more, in reusable boxes, jars and
              metal baskets. Pick a ready hamper, or build your own.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container">
          <div className="hamper-grid">
            {HAMPER_RANGES.map((h) => (
              <HamperCard key={h.name} hamper={h} />
            ))}
          </div>

          <div className="note-box">
            <b>Festive hampers — please ask about current availability.</b>{" "}
            Hampers are packed fresh to order, and the Diwali range is
            seasonal. Message us on WhatsApp and we&apos;ll confirm
            what&apos;s available for your date.
          </div>
        </div>
      </section>

      {/* Featured basket */}
      <section className="section section-tint">
        <div className="container split">
          <div style={{ position: "relative" }}>
            <Image
              src="https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=1000&q=80"
              alt="Hand-packed gift basket with jars of cookies and treats"
              width={1000}
              height={720}
              loading="lazy"
            />
            <span className="sample-tag">Sample photo</span>
          </div>
          <div>
            <p className="eyebrow">Make your own hamper</p>
            <h2>Build a hamper your way</h2>
            <p>
              Start with a white woven basket with gold trim, then fill it
              with your favourites — like our most-loved combination of four
              jars: Indian Spice Cookies, Oats Cranberry Cookies, Grown Up
              Cereal and Vita Crunch.
            </p>
            <ul className="check-list">
              <li>Choose your treats — cookies, chocolates, cakes &amp; more</li>
              <li>Reusable boxes, jars and metal baskets</li>
              <li>Perfect for Diwali, weddings and corporate gifting</li>
            </ul>
            <a
              className="btn btn-rose"
              href={waLink(
                `${WA_HAMPER} I'd like to build my own hamper.`
              )}
              target="_blank"
              rel="noreferrer"
            >
              Build my hamper on WhatsApp →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
