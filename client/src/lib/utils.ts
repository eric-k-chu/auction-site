import { promises as fs } from "fs";
import { GitFile, Lot, Lots } from "./types";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function getDate(timestamp: EpochTimeStamp) {
  const date = new Date(timestamp * 1000);

  const dayName = days[date.getDay()];
  const monthName = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return dayName + " " + monthName + " " + day + ", " + year;
}

export function decode64<T>(b64: string): T {
  return JSON.parse(atob(b64));
}

export function encode64<T>(obj: T): string {
  return btoa(JSON.stringify(obj));
}

// TODO: TEMP REPO NAME githubdb
export async function readAuctions(): Promise<Lots> {
  const repo = "githubdb";
  const dataFile = "sample.json";
  const res = await fetch(
    `https://api.github.com/repos/${process.env.GITHUB_USERNAME}/${repo}/contents/${dataFile}`,
    {
      headers: {
        authorization: `token ${process.env.GITHUB_PAT}`,
      },
    },
  );
  if (!res.ok) throw new Error(`${res.status}: An error has occured.`);
  const data = (await res.json()) as GitFile;
  return decode64(data.content);
}

export async function getAuctionById(id: string): Promise<Lot> {
  const { lots } = await readAuctions();

  const lot = lots.find((n) => n.id === id);

  if (lot === undefined) throw new Error("Unable to find lot.");
  return lot;
}
