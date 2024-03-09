"use client";

import { type Faq } from "@/lib/types";
import Image from "next/image";
import { useState } from "react";

/*
How do NYC car auctions work?
Bidders pick the lot number of the vehicle they'd like to bid on. Vehicles are sold to the highest bidder, if there is a dispute between bidders, the process will begin again.

What happens when you bid at an auction?
The highest bidder must pay with cash at the final sale. The winner may need to tow the car from the New York car auction and can't be driven until it's properly registered with license plates.

Do you pay if you lose a bid?
No, only the winning bidder at a car auction will pay.

What happens if you win a bid at a car auction but don't want it?
Bidders are obligated to pay for the item once they've been the determined winner. Bidders should only participate in New York car auctions if they intend to purchase the vehicle.

What happens if nobody bids?
If no one bids on a car at the auction, it generally means the vehicle doesn't meet the minimum acceptable price or reserve set by the seller. In these cases, the auctioneer may pass the vehicle meaning it remains unsold and may be reentered into future auctions.

If the car doesn't work can I get a better price?
No, you purchase the vehicle in its current condition.

How old do car auction bidders have to be?
New York car auction bidders must be at least 18 years of age.

*/

const faqs: Faq[] = [
  {
    title: "How do NYC car auctions work?",
    description:
      "Bidders pick the lot number of the vehicle they'd like to bid on. Vehicles are sold to the highest bidder, if there is a dispute between bidders, the process will begin again.",
  },
  {
    title: "What happens when you bid at an auction?",
    description:
      "The highest bidder must pay with cash at the final sale. The winner may need to tow the car from the New York car auction and can't be driven until it's properly registered with license plates.",
  },
  {
    title: "Do you pay if you lose a bid?",
    description: "No, only the winning bidder at a car auction will pay.",
  },
  {
    title: "What happens if you win a bid at a car auction but don't want it?",
    description:
      "Bidders are obligated to pay for the item once they've been the determined winner. Bidders should only participate in New York car auctions if they intend to purchase the vehicle.",
  },
  {
    title: "What happens if nobody bids?",
    description:
      "If no one bids on a car at the auction, it generally means the vehicle doesn't meet the minimum acceptable price or reserve set by the seller. In these cases, the auctioneer may pass the vehicle meaning it remains unsold and may be reentered into future auctions.",
  },
  {
    title: "If the car doesn't work can I get a better price?",
    description: "No, you purchase the vehicle in its current condition.",
  },
  {
    title: "How old do car auction bidders have to be?",
    description:
      "New York car auction bidders must be at least 18 years of age.",
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
    <section className="bg-randy-eggshell" id="faq">
      <div className="mx-auto max-w-7xl space-y-6 p-12">
        <h2 className="text-2xl font-bold md:text-4xl">FAQ</h2>
        {faqs.map((n, i) => (
          <div key={i} className="rounded-xl bg-white shadow-md">
            <button
              className="flex w-full items-center gap-6 px-6 py-10 text-left text-sm md:gap-10 md:px-10 md:text-base"
              type="button"
              onClick={() => setFaq(n)}
            >
              <Image
                src="arrow-down.svg"
                alt="arrow down"
                width={0}
                height={0}
                className="size-4 md:size-5"
              />
              <strong className="font-semibold">{n.title}</strong>
            </button>
            {currentFaq === n && (
              <p className="p-10 pt-2 text-sm leading-6 md:text-base">
                {n.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
