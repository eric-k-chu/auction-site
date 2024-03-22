"use client";

import { Lot } from "@/lib/types";
import { useState } from "react";
import { Vehicles } from "./Vehicles";
import { About } from "./About";

type Props = {
  lot?: Lot;
};

type Tab = "vehicles" | "about";

export function AuctionInfo({ lot }: Props) {
  const [tab, setTab] = useState<Tab>("vehicles");

  return (
    <div>
      <div className="flex items-center">
        {["vehicles", "about"].map((n) => (
          <button
            type="button"
            key={n}
            onClick={() => setTab(n as Tab)}
            className={`border-b-4 px-2 text-base capitalize transition-colors duration-300 ease-in-out md:text-lg ${n === tab ? "border-b-randy-orange font-semibold text-black" : "border-b-randy-turquoise font-normal text-randy-turquoise"}`}
          >
            {n}
          </button>
        ))}
      </div>
      <Vehicles
        isOpen={tab === "vehicles"}
        vehicles={lot ? lot.vehicles : undefined}
      />
      <About isOpen={tab === "about"} about={lot ? lot.about : undefined} />
    </div>
  );
}
