"use client";

import { type Faq } from "@/lib/types";
import Image from "next/image";
import { useState } from "react";

const faqs: Faq[] = [
  {
    title: "Where do I buy a car?",
    description: "TODO: DESCRIPTION HERE",
  },
  {
    title: "How do I pay for it?",
    description: "TODO: DESCRIPTION HERE",
  },
  {
    title: "What is your refund policy?",
    description: "TODO: DESCRIPTION HERE",
  },
  {
    title: "Where do your cars come from?",
    description: "TODO: DESCRIPTION HERE",
  },
  {
    title: "How long does the auction usually last?",
    description: "TODO: DESCRIPTION HERE",
  },
  {
    title: "Is there a fee to enter the auction?",
    description: "TODO: DESCRIPTION HERE",
  },
];

export function Faq() {
  const [currentFaq, setCurrentFaq] = useState<Faq>();

  function setFaq(faq: Faq): void {
    if (currentFaq === faq) {
      setCurrentFaq(undefined);
    } else {
      setCurrentFaq(faq);
    }
  }

  return (
    <section className="bg-randy-eggshell py-6">
      <div className="mx-auto max-w-7xl space-y-6 p-4">
        <h2 className="text-4xl font-bold">FAQ</h2>
        {faqs.map((n, i) => (
          <div key={i} className="rounded-xl bg-white shadow-md">
            <button
              className="flex items-center gap-10 p-10"
              type="button"
              onClick={() => setFaq(n)}
            >
              <Image
                src="arrow-down.svg"
                alt="arrow down"
                width={0}
                height={0}
                className="size-5"
              />
              <strong className="font-semibold">{n.title}</strong>
            </button>
            {currentFaq === n && <p className="p-10">{n.description}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
