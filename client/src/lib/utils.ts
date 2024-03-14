import { Octokit } from "octokit";
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

/*
 * function: getDate
 * param: timestamp, an EpochTimeStamp
 * return: returns a string with the format <Day of the Week> <Month> <Day>, <Year>
 *
 * converts a timestamp into a readable string
 */
export function getDate(timestamp: EpochTimeStamp) {
  const date = new Date(timestamp * 1000);

  const dayName = days[date.getDay()];
  const monthName = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return dayName + " " + monthName + " " + day + ", " + year;
}

/*
 * function: decode64
 * param: b64, a based-64 encoded string
 * return: the decoded b64 object
 *
 * Decodes a based-64 string back into an object
 */
export function decode64<T>(b64: string): T {
  return JSON.parse(atob(b64));
}

/*
 * function: encode64
 * param: obj, an object to decode
 * return: based-64 encoded string of the given object
 *
 * Encodes an object to base 64 and returns the encoded string
 */
export function encode64<T>(obj: T): string {
  return btoa(JSON.stringify(obj));
}

/*
 * function: getAuctions
 * return: promise of Lots
 *
 * Pulls json file from the Github repository and decodes it into a Lots object along with sha of the json file.
 */
export async function getAuctions(): Promise<Lots> {
  // TODO: TEMP REPO NAME githubdb
  const repo = "githubdb";
  const dataFile = "sample.json";
  const res = await fetch(
    `https://api.github.com/repos/${process.env.GITHUB_USERNAME}/${repo}/contents/${dataFile}`,
    {
      cache: "no-cache",
      headers: {
        authorization: `token ${process.env.GITHUB_PAT}`,
      },
    },
  );
  if (!res.ok) throw new Error(`${res.status}: An error has occured.`);
  const data = (await res.json()) as GitFile;
  return {
    ...decode64<Lots>(data.content),
    sha: data.sha,
  };
}

/*
 * function: getAuctionById
 * param: id, the id of the auction
 * return: promise of a tuple containing the lot and the sha of the json file
 *
 * Pulls auctions from the Github repository and finds the associated lot given the id.
 */
export async function getAuctionById(id: string): Promise<[Lot, string]> {
  const { lots, sha } = await getAuctions();

  const lot = lots.find((n) => n.id === id);

  if (lot === undefined) throw new Error("Unable to find lot.");
  return [lot, sha] as const;
}

/*
 * function: updateAuction
 * param: sha, the sha of the file from the repo
 * param: lot, the Lot object to be sent to the repo
 *
 * Updates the json file in the Github repository which contains information about the upcoming auction.
 */
export async function updateAuction(sha: string, lot: Lot): Promise<void> {
  const username = process.env.GITHUB_USERNAME;
  if (!username) throw new Error("need to add GITHUB_USERNAME in .env file.");

  const pat = process.env.GITHUB_PAT;
  if (!pat) throw new Error("need to add GITHUB_PAT in .env file.");

  const email = process.env.GITHUB_EMAIL;
  if (!email) throw new Error("need to add GITHUB_EMAIL in .env file.");

  const name = process.env.NAME;
  if (!name) throw new Error("need to add NAME in .env file.");

  const octokit = new Octokit({
    auth: pat,
  });

  // TODO: CHANGE repo and path
  await octokit.request("PUT /repos/{owner}/{repo}/contents/{path}", {
    owner: username,
    repo: "githubdb",
    path: "sample.json",
    message: `Updating Auction Data: ${getDate(Date.now())}`,
    committer: {
      name: name.split("_").join(" "),
      email: email,
    },
    content: encode64(lot),
    sha: sha,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
}
