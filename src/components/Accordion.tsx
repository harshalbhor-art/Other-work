"use client";

import { useState } from "react";

export type AccordionEntry = { q: string; a: string };

export default function Accordion({ items }: { items: AccordionEntry[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq-list">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div className={`faq-item${open ? " is-open" : ""}`} key={item.q}>
            <button
              type="button"
              className="faq-trigger"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : i)}
            >
              {item.q}
              <span className="plus mono">+</span>
            </button>
            <div className="faq-panel">
              <p className="body2">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
