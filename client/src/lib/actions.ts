"use server";

import { Octokit } from "octokit";
import { decode64, encode64, getDate } from "./utils";
import { Lots, GitFile, Lot } from "./types";
import { redirect } from "next/navigation";

/*
 * function: updateAuction
 * param: sha, the sha of the file from the repo
 * param: lot, the Lot object to be sent to the repo
 *
 * Updates the json file in the Github repository which contains information about the upcoming auction.
 */
export async function updateAuction(sha: string, newLot: Lot): Promise<void> {
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
    message: `Updating Auction Data: ${getDate(Date.now() / 1000)}`,
    committer: {
      name: name.split("_").join(" "),
      email: email,
    },
    content: encode64(newLot),
    sha: sha,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  redirect("/admin/dashboard");
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
    lots: [decode64<Lot>(data.content)],
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
