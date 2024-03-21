"use server";

import { Octokit } from "octokit";
import { GitFile, Lot, Lots, Response200, Response204 } from "./types";
import { decode64, encode64, getCurrentDate, getErrorMessage } from "./utils";
import { getSession } from "./auth";

/*
 * function: updateAuction
 * param: sha, the sha of the file from the repo
 * param: lot, the Lot object to be sent to the repo
 *
 * Updates the json file in the Github repository which contains information about the upcoming auction.
 */
export async function updateAuction(
  sha: string,
  newLot: Lot,
): Promise<Response204> {
  const username = process.env.GITHUB_USERNAME;
  const pat = process.env.GITHUB_PAT;
  const email = process.env.GITHUB_EMAIL;
  const name = process.env.NAME;

  try {
    if (!username || !pat || !email || !name) {
      throw new Error(
        "Missing environment variables. Please check your Vercel dashboard.",
      );
    }

    const session = await getSession();

    if (session === null) {
      throw new Error("Your session has expired. Please login once again.");
    }

    const octokit = new Octokit({
      auth: pat,
    });

    // TODO: CHANGE repo and path
    await octokit.request("PUT /repos/{owner}/{repo}/contents/{path}", {
      owner: username,
      repo: "githubdb",
      path: "sample.json",
      message: `Updating Auction Data: ${getCurrentDate()}`,
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

    return { error: null };
  } catch (e) {
    return { error: getErrorMessage(e) };
  }
}

/*
 * function: getAuctions
 * return: promise of Lots
 *
 * Pulls json file from the Github repository and decodes it into a Lots object along with sha of the json file.
 */
export async function getAuctions(): Promise<Response200<Lots>> {
  // TODO: CHANGE TEMP REPO NAME githubdb AND FILE NAME sample.json
  const repo = "githubdb";
  const dataFile = "sample.json";
  try {
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

    const lots = {
      lots: [decode64<Lot>(data.content)],
      sha: data.sha,
    };

    return {
      data: lots,
      error: null,
    };
  } catch (e) {
    return {
      data: null,
      error: getErrorMessage(e),
    };
  }
}

/*
 * function: getAuctionById
 * param: id, the id of the auction
 * return: promise containing the lot and the sha of the json file
 *
 * Pulls auctions from the Github repository and finds the associated lot given the id.
 */
export async function getAuctionById(id: string): Promise<
  Response200<{
    lot: Lot;
    sha: string;
  }>
> {
  const { data, error } = await getAuctions();

  if (error !== null) {
    return { data: null, error };
  }

  const lot = data?.lots.find((n) => n.id === id);
  if (lot === undefined) {
    return { data: null, error: `Unable to find auction with id: ${id}` };
  }

  if (data?.sha === undefined) {
    return { data: null, error: "Unable to get SHA of file." };
  }

  return {
    data: { lot, sha: data.sha },
    error: null,
  };
}
