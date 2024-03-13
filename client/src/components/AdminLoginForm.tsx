"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function AdminLoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  function handleSignIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert(`${username} and ${password}`);
    setUsername("");
    setPassword("");
    router.push("/admin/dashboard");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 p-12">
      <form
        className="flex w-full min-w-[300px] max-w-[440px] flex-col gap-y-8 rounded-lg bg-white px-10 py-12 shadow-sm shadow-zinc-300"
        onSubmit={handleSignIn}
      >
        <label className="space-y-2 text-sm">
          <span className="font-medium">Username</span>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
            className="w-full rounded-md pl-2 leading-8 shadow-sm shadow-zinc-300 ring-1 ring-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <label className="space-y-2 text-sm">
          <span className="font-medium">Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            className="w-full rounded-md pl-2 leading-8 shadow-sm shadow-zinc-300 ring-1 ring-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <div className="mt-6 flex justify-center">
          <button
            disabled={username.length === 0 || password.length === 0}
            className={`w-full rounded-md py-2 text-sm font-semibold leading-6 text-white shadow-md shadow-zinc-300 transition-colors duration-300 ease-in-out ${username.length > 0 && password.length > 0 ? "bg-randy-navy hover:bg-randy-navy/85 focus:outline-none focus:ring-2 focus:ring-blue-500" : "pointer-events-none bg-randy-grey"}`}
          >
            Sign in
          </button>
        </div>
        <div className="mt-6 flex items-center justify-between gap-x-4">
          <hr className="h-px w-full border-0 bg-zinc-300" />
          <span className="flex-none text-sm text-zinc-400">
            Randy Mark Auctioneer
          </span>
          <hr className="h-px w-full border-0 bg-zinc-300" />
        </div>
      </form>
    </div>
  );
}
