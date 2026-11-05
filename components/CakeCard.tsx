"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { waLink, cakeWaMessage, type Cake } from "../lib/data";

/**
 * Cake card — tapping anywhere on the card opens a detail view (photo,
 * occasion, description, eggless note, price-on-request) with the
 * per-product WhatsApp order button. The button itself goes straight to
 * WhatsApp with a pre-filled message for this exact cake.
 */
export default function CakeCard({ cake }: { cake: Cake }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open ]);

  const wa = waLink(cakeWaMessage(cake));

  return (
    <>
      <article
        className="cake-card"
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen(true);
          }
        }}
        aria-label={`${cake.name} — tap for details`}
      >
        <div className="cake-img-wrap">
          <Image
            src={cake.img}
            alt={cake.name}
            width={900}
            height={640}
            className="cake-img"
            loading="lazy"
          />
          <span className="sample-tag">Sample photo</span>
          {cake.signature && <span className="sig-tag">Signature</span>}
          <span className="tap-hint">Tap for details</span>
        </div>
        <div className="cake-body">
          <p className="cake-occasion">{cake.occasion}</p>
          <h3>{cake.name}</h3>
          <p className="cake-desc">{cake.desc}</p>
          <p className="cake-price">Price on request — enquire on WhatsApp</p>
          <a
            className="btn btn-rose btn-small"
            href={wa}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            Order this cake →
          </a>
        </div>
      </article>

      {open && (
        <div
          className="modal-overlay"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={cake.name}
        >
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setOpen(false)}
              aria-label="Close details"
            >
              ✕
            </button>
            <div className="modal-img-wrap">
              <Image
                src={cake.img}
                alt={cake.name}
                width={900}
                height={640}
                className="modal-img"
              />
              <span className="sample-tag">Sample photo</span>
              {cake.signature && <span className="sig-tag">Signature</span>}
            </div>
            <div className="modal-body">
              <p className="cake-occasion">{cake.occasion}</p>
              <h3>{cake.name}</h3>
              <p className="modal-desc">{cake.desc}</p>
              <p className="modal-eggless">
                🥚 100% Eggless · 🌱 Pure Vegetarian · Baked fresh to order
              </p>
              <p className="cake-price">
                Price on request — we confirm the price &amp; sizes on WhatsApp
              </p>
              <a
                className="btn btn-rose"
                href={wa}
                target="_blank"
                rel="noreferrer"
              >
                Order this cake on WhatsApp →
              </a>
              <p className="modal-note">
                Share your date and any design reference on WhatsApp — we
                confirm the design and quote before we bake.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
