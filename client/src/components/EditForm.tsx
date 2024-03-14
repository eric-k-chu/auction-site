"use client";

import { Lot } from "@/lib/types";
import { updateAuction } from "@/lib/utils";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useFieldArray, useForm } from "react-hook-form";

// TODO: CREATE CALENDAR FOR CHOOSING THE DATE
export function EditForm({ lot, sha }: { lot: Lot; sha: string }) {
  const form = useForm<Lot>({ defaultValues: lot });
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const { fields, append, remove } = useFieldArray({
    name: "vehicles",
    control,
  });

  async function onSubmit(newLot: Lot) {
    try {
      await updateAuction(sha, newLot);
    } catch (e) {
      alert(e);
    } finally {
      alert("Sucessfully updated!");
      redirect("/admin/dashboard");
    }
  }

  return (
    <form
      className="flex w-full max-w-4xl flex-col gap-y-8 rounded-lg bg-white px-10 py-8 shadow-sm shadow-zinc-300"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="space-y-2 text-sm md:text-base">
        <strong>Location</strong>
        <input
          className="w-full rounded-md pl-2 leading-8 shadow-sm shadow-zinc-300 ring-1 ring-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          id="location"
          {...register("location", {
            required: {
              value: true,
              message: "Location is required.",
            },
          })}
        />
        <p className="text-sm text-red-600">{errors.location?.message}</p>
      </label>
      <label className="space-y-2 text-sm md:text-base">
        <strong>Address</strong>
        <input
          className="w-full rounded-md pl-2 leading-8 shadow-sm shadow-zinc-300 ring-1 ring-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          id="address"
          {...register("address", {
            required: {
              value: true,
              message: "Address is required.",
            },
          })}
        />
        <p className="text-sm text-red-600">{errors.address?.message}</p>
      </label>
      <label className="space-y-2 text-sm md:text-base">
        <strong>Date</strong>
        <input
          className="w-full rounded-md pl-2 leading-8 shadow-sm shadow-zinc-300 ring-1 ring-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="number"
          id="date"
          {...register("date", {
            required: {
              value: true,
              message: "Date is required.",
            },
          })}
        />
        <p className="text-sm text-red-600">{errors.date?.message}</p>
      </label>
      <label className="space-y-2 text-sm md:text-base">
        <strong>About</strong>
        <textarea
          className="w-full resize-none rounded-md pl-2 leading-8 shadow-sm shadow-zinc-300 ring-1 ring-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
          id="about"
          {...register("about", {
            required: {
              value: true,
              message: "About is required.",
            },
          })}
        />
        <p className="text-sm text-red-600">{errors.about?.message}</p>
      </label>
      <label className="flex flex-col gap-y-4">
        <div className="flex items-center gap-x-4">
          <strong className="text-sm md:text-base">Vehicles</strong>
          {fields.length > 0 && (
            <button
              type="button"
              onClick={() => remove()}
              className="text-xs text-red-600 underline md:text-sm"
            >
              Delete All Vehicles?
            </button>
          )}
        </div>
        <div className="flex items-center gap-x-2 p-2 text-xs">
          <strong className="w-[6%]">Year</strong>
          <strong className="w-[12%]">Make</strong>
          <strong className="w-[12%]">Plate Number</strong>
          <strong className="w-[4%]">State</strong>
          <strong className="w-[22%]">Vehicle ID</strong>
          <strong>Lienholder</strong>
        </div>
        {fields.map((n, i) => (
          <div
            key={n.id}
            className="flex items-center gap-x-2 p-2 text-xs odd:bg-randy-eggshell even:bg-transparent md:text-sm"
          >
            <input
              type="string"
              placeholder="Year"
              className="w-[6%] flex-shrink-0 bg-transparent"
              {...register(`vehicles.${i}.year` as const)}
            />
            <input
              type="string"
              placeholder="Make"
              className="w-[12%] flex-shrink-0 bg-transparent"
              {...register(`vehicles.${i}.make` as const)}
            />
            <input
              type="string"
              placeholder="Plate Number"
              className="w-[12%] flex-shrink-0 bg-transparent"
              {...register(`vehicles.${i}.plateNumber` as const)}
            />
            <input
              type="string"
              placeholder="State"
              className="w-[4%] flex-shrink-0 bg-transparent"
              {...register(`vehicles.${i}.state` as const)}
            />
            <input
              type="string"
              placeholder="Vehicle ID"
              className="w-[22%] flex-shrink-0 bg-transparent"
              {...register(`vehicles.${i}.vehicleId` as const)}
            />
            <input
              type="string"
              placeholder="Lienholder"
              className="flex-shrink-0 bg-transparent"
              {...register(`vehicles.${i}.lienholder` as const)}
            />
            <button
              type="button"
              onClick={() => remove(i)}
              className="group ml-auto flex w-[4%] items-center justify-center rounded-md bg-transparent p-1 text-black transition-colors ease-in-out hover:bg-red-600 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="size-5 stroke-neutral-600 transition-colors ease-in-out group-hover:stroke-neutral-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
          </div>
        ))}
        <button
          type="button"
          className="mt-4 w-full rounded-md bg-randy-navy px-2 py-1 text-sm text-white hover:bg-randy-navy/85 md:text-base"
          onClick={() =>
            append({
              vehicleId: "",
              state: "",
              make: "",
              year: "",
              plateNumber: "",
              lienholder: "",
            })
          }
        >
          Click to Add More
        </button>
      </label>
      <div className="flex w-full items-center justify-between">
        <Link
          className="px-2 py-1 text-sm text-black underline md:text-base"
          href="/admin/dashboard"
        >
          Cancel
        </Link>
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
