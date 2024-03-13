"use client";

import { Lot } from "@/lib/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function EditForm({ lot }: { lot: Lot }) {
  const [location, setLocation] = useState(lot.location);
  const [address, setAddress] = useState(lot.address);
  const [date, setDate] = useState(lot.date);
  const [vehicles, setVehicles] = useState(lot.vehicles);
  const router = useRouter();

  // TODO: Dynamic form, put data in separate repo for faster update

  function handleEdit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Form submitted");
    router.push("/admin/dashboard");
  }

  return (
    <form
      className="flex w-full max-w-3xl flex-col gap-y-8 rounded-lg bg-white px-10 py-8 shadow-sm shadow-zinc-300"
      onSubmit={handleEdit}
    >
      <Link href="/admin/dashboard" className="w-fit underline">
        Cancel
      </Link>
      <label className="space-y-2 text-sm">
        <span className="font-medium">Location</span>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.currentTarget.value)}
          className="w-full rounded-md pl-2 leading-8 shadow-sm shadow-zinc-300 ring-1 ring-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <label className="space-y-2 text-sm">
        <span className="font-medium">Address</span>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.currentTarget.value)}
          className="w-full rounded-md pl-2 leading-8 shadow-sm shadow-zinc-300 ring-1 ring-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <label className="space-y-2 text-sm">
        <span className="font-medium">Date</span>
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(Number(e.currentTarget.value))}
          className="w-full rounded-md pl-2 leading-8 shadow-sm shadow-zinc-300 ring-1 ring-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <div className="flex w-full items-center justify-between">
        <button
          className="rounded-md bg-red-600 px-2 py-1 text-sm text-white hover:bg-red-600/85 md:text-base"
          type="button"
        >
          Delete
        </button>
        <button
          type="submit"
          className="rounded-md bg-green-600 px-2 py-1 text-sm text-white hover:bg-green-600/85 md:text-base"
        >
          Confirm
        </button>
      </div>
    </form>
  );
}
