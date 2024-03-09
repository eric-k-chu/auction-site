"use client";

import { Vehicle } from "@/lib/types";
import Image from "next/image";
import { useState } from "react";

type Props = {
  isOpen: boolean;
  vehicles: Vehicle[];
  displayAmount?: number;
};

export function Vehicles({ isOpen, vehicles, displayAmount = 9 }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div
      className={`overflow-auto rounded-xl shadow-lg ${isOpen ? "block" : "hidden"}`}
    >
      <div className="p-4 md:p-6">
        <table className="text-sm md:text-base">
          <thead>
            <tr>
              <th scope="col">&#35;</th>
              <th scope="col">Year</th>
              <th scope="col">Make</th>
              <th scope="col">Plate &#35;</th>
              <th scope="col">ST</th>
              <th scope="col">Vehicle ID</th>
              <th scope="col">Lienholder</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((n, i) => (
              <tr
                key={n.vehicleId}
                className={`${!isExpanded && i > displayAmount ? "hidden" : "table-row"}`}
              >
                <td>{i + 1}</td>
                <td>{n.year}</td>
                <td className="uppercase">{n.make}</td>
                <td>{n.plateNumber}</td>
                <td className="uppercase">{n.state}</td>
                <td>{n.vehicleId}</td>
                <td className="uppercase">{n.lienholder || ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <a
        className="flex w-full items-center justify-center bg-randy-eggshell py-1.5"
        role="button"
        href="#auction"
        rel="noopener"
        aria-label="click to expand"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <Image
          src="arrow-down.svg"
          alt="click to expand"
          width={0}
          height={0}
          className={`size-5 transition-transform duration-300 ease-in-out md:size-6 ${!isExpanded ? "rotate-0" : "rotate-180"}`}
        />
      </a>
    </div>
  );
}
