"use client";

import { Lot } from "@/lib/types";
import Image from "next/image";
import { useState } from "react";
import { VehicleTable } from "./VehicleTable";

type Props = {
  lot: Lot;
};

type Tab = "vehicles" | "address" | "about";

export function LotInfo({ lot }: Props) {
  const [tab, setTab] = useState<Tab>("vehicles");
  const [isExpanded, setIsExpanded] = useState(false);
  const { vehicles, address, about } = lot;

  return (
    <div>
      <div className="flex items-center">
        {["vehicles", "address", "about"].map((n) => (
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
      <div className={`shadow-md ${tab === "vehicles" ? "block" : "hidden"}`}>
        <div
          className={`overflow-y-hidden p-6 ${isExpanded ? "h-fit" : "h-[400px]"}`}
        >
          <VehicleTable vehicles={vehicles} />
        </div>
        <button
          className="flex w-full items-center justify-center bg-randy-eggshell py-1.5"
          type="button"
          aria-label="click to expand"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <Image
            src="arrow-down.svg"
            alt="click to expand"
            width={0}
            height={0}
            className={`size-6 transition-transform duration-300 ease-in-out ${isExpanded ? "rotate-180" : "rotate-0"}`}
          />
        </button>
      </div>
      <div className={`shadow-md ${tab === "address" ? "block" : "hidden"}`}>
        <p className="p-6">{address}</p>
      </div>
      <div className={`shadow-md ${tab === "about" ? "block" : "hidden"}`}>
        <p className="p-6">
          {about}
          <span className="px-2">
            <button
              type="button"
              onClick={() => setTab("vehicles")}
              className="text-blue-500 underline"
            >
              View Here
            </button>
          </span>
        </p>
      </div>
    </div>
  );
}
