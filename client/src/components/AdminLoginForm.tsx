"use client";

import { signIn } from "@/lib/auth";
import { redirect } from "next/navigation";
import { FormSubmitButton } from "./FormSubmitButton";
import { HomeLink } from "./HomeLink";

export function AdminLoginForm() {
  async function handleLogin(formData: FormData): Promise<void> {
    const { error } = await signIn(formData);

    if (error !== null) {
      alert(error);
    } else {
      redirect("/admin/dashboard");
    }
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-zinc-100 p-12">
      <form
        className="flex w-full min-w-[300px] max-w-[440px] flex-col gap-y-8 rounded-lg bg-white px-10 py-12 shadow-sm shadow-zinc-300"
        action={handleLogin}
      >
        <label className="space-y-2 text-sm">
          <span className="font-medium">Username</span>
          <input
            type="text"
            name="username"
            className="w-full rounded-md pl-2 leading-8 shadow-sm shadow-zinc-300 ring-1 ring-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <label className="space-y-2 text-sm">
          <span className="font-medium">Password</span>
          <input
            type="password"
            name="password"
            className="w-full rounded-md pl-2 leading-8 shadow-sm shadow-zinc-300 ring-1 ring-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <div className="mt-6 flex justify-center">
          <FormSubmitButton className="flex w-full items-center justify-center rounded-md bg-randy-navy py-2 text-sm font-semibold leading-6 text-white shadow-md shadow-zinc-300 transition-colors duration-300 ease-in-out hover:bg-randy-navy/85 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Sign In
          </FormSubmitButton>
        </div>
        <div className="mt-6 flex items-center justify-between gap-x-4">
          <hr className="h-px w-full border-0 bg-zinc-300" />
          <span className="flex-none text-sm text-zinc-400">
            Randy Mark Auctioneer
          </span>
          <hr className="h-px w-full border-0 bg-zinc-300" />
        </div>
      </form>
      <HomeLink>Home</HomeLink>
    </div>
  );
}
