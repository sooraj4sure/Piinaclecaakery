import type { Metadata } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import FrostingDivider from "../components/FrostingDivider";
import {
  ADDRESS,
  HOURS,
  INSTAGRAM,
  INSTAGRAM_HANDLE,
  PHONE_DISPLAY,
  waLink,
  WA_ORDER,
} from "../lib/data";

const display = Playfair_Display({
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Jost({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Piinacle Caakery · 100% Eggless Designer Cakes — Rohini, Delhi",
  description:
    "Piinacle Caakery by Preity Goyaal — freshly baked, 100% eggless designer cakes, wedding & birthday cakes, Diwali hampers and event dessert service in Rohini, Delhi. Order on WhatsApp.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>

        <Header />
        <div className="tagline-marquee" aria-hidden="true">
          <div className="marquee-track">
            <span>
              Freshly Baked. Eggless. Made with Love. ✦ 100% Eggless ✦ Pure
              Vegetarian ✦ Baked Fresh to Order ✦&nbsp;
            </span>
            <span>
              Freshly Baked. Eggless. Made with Love. ✦ 100% Eggless ✦ Pure
              Vegetarian ✦ Baked Fresh to Order ✦&nbsp;
            </span>
          </div>
        </div>
        <main>{children}</main>
        <FrostingDivider fill="#4a2e2b" />
        <footer className="site-footer">
          <div className="container footer-grid">
            <div>
              <p className="footer-brand">Piinacle Caakery</p>
              <p className="footer-sub">by Preity Goyaal · Rohini, Delhi</p>
              <p>
                Freshly baked. Eggless. Made with love. Custom designer cakes,
                hampers and event desserts — every cake carries a little piece
                of my heart.
              </p>
            </div>
            <div>
              <p className="footer-heading">Explore</p>
              <ul className="footer-links">
                <li><a href="/cakes">Cake menu</a></li>
                <li><a href="/hampers">Diwali hampers</a></li>
                <li><a href="/custom-orders">Custom orders</a></li>
                <li><a href="/about">About Preity</a></li>
                <li><a href="/contact">Visit us</a></li>
              </ul>
            </div>
            <div>
              <p className="footer-heading">Order &amp; enquire</p>
              <ul className="footer-links">
                <li>
                  <a href={waLink(WA_ORDER)} target="_blank" rel="noreferrer">
                    WhatsApp · {PHONE_DISPLAY}
                  </a>
                </li>
                <li>
                  <a href={INSTAGRAM} target="_blank" rel="noreferrer">
                    Instagram · {INSTAGRAM_HANDLE}
                  </a>
                </li>
                <li>{ADDRESS}</li>
                <li>Open daily · {HOURS}</li>
              </ul>
            </div>
          </div>
          <div className="container footer-note">
            Demo preview crafted by Evenlyn Studio. Photos are samples — final
            cakes, flavours and prices are confirmed with Preity on WhatsApp.
            Piinacle Caakery · Rohini, Delhi.
          </div>
        </footer>
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
