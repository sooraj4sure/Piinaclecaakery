"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { waLink, hamperWaMessage, type HamperRange } from "../lib/data";

/**
 * Hamper card — tapping the card opens a detail view with the full contents
 * list and a per-product WhatsApp order button carrying this hamper's name,
 * range and price.
 */
export default function HamperCard({ hamper }: { hamper: HamperRange }) {
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

  const wa = waLink(hamperWaMessage(hamper));

  return (
    <>
      <article
        className="hamper-card"
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen(true);
          }
        }}
        aria-label={`${hamper.name} — tap for details`}
      >
        <div style={{ position: "relative" }}>
          <Image
            src={hamper.img}
            alt={hamper.name}
            width={900}
            height={560}
            loading="lazy"
          />
          <span className="sample-tag">Sample photo</span>
          <span className="tap-hint">Tap for details</span>
        </div>
        <div className="hamper-body">
          <h3>{hamper.name}</h3>
          <p className="hamper-price">{hamper.price}</p>
          <p className="hamper-tag">{hamper.tag}</p>
          <ul>
            {hamper.contents.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a
            className="btn btn-rose btn-small"
            href={wa}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            Order this hamper →
          </a>
        </div>
      </article>

      {open && (
        <div
          className="modal-overlay"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={hamper.name}
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
                src={hamper.img}
                alt={hamper.name}
                width={900}
                height={560}
                className="modal-img"
              />
              <span className="sample-tag">Sample photo</span>
            </div>
            <div className="modal-body">
              <p className="cake-occasion">Festive Gifting</p>
              <h3>{hamper.name}</h3>
              <p className="hamper-price">{hamper.price}</p>
              <p className="modal-desc">
                {hamper.tag} — hand-packed with the treats below, in reusable
                boxes, jars and metal baskets.
              </p>
              <ul className="modal-list">
                {hamper.contents.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a
                className="btn btn-rose"
                href={wa}
                target="_blank"
                rel="noreferrer"
              >
                Order this hamper on WhatsApp →
              </a>
              <p className="modal-note">
                Hampers are packed fresh to order — please ask about current
                availability, as the Diwali range is seasonal.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
