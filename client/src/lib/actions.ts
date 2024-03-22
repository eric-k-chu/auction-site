"use server";

import { Octokit } from "octokit";
import { getSession } from "./auth";
import { Lot, Response204 } from "./types";
import { encode64, getCurrentDate, getErrorMessage } from "./utils";

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
