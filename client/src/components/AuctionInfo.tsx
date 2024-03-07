"use client";

import { Lot } from "@/lib/types";
import { useState } from "react";
import { Vehicles } from "./Vehicles";
import { About } from "./About";

type Props = {
  lot: Lot;
};

type Tab = "vehicles" | "about";

export function AuctionInfo({ lot }: Props) {
  const [tab, setTab] = useState<Tab>("vehicles");
  const { vehicles, about } = lot;

  return (
    <div>
      <div className="flex items-center">
        {["vehicles", "about"].map((n) => (
          <button
            type="button"
            key={n}
            onClick={() => setTab(n as Tab)}
            className={`border-b-4 px-2 text-lg capitalize transition-colors duration-300 ease-in-out ${n === tab ? "border-b-randy-orange font-semibold text-black" : "border-b-randy-turquoise font-normal text-randy-turquoise"}`}
          >
            {n}
          </button>
        ))}
      </div>
      <Vehicles isOpen={tab === "vehicles"} vehicles={vehicles} />
      <About isOpen={tab === "about"} about={about} />
    </div>
  );
}
