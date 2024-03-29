import { readFile } from "fs/promises";
import { GitFile, Lot, Lots, Response200 } from "./types";
import { decode64, getErrorMessage } from "./utils";

/*
 * function: getAuctions
 * return: promise of Lots
 *
 * Pulls json file from the Github repository and decodes it into a Lots object along with sha of the json file.
 */
export async function getAuctions(): Promise<Response200<Lots>> {
  const username = process.env.GITHUB_USERNAME;
  const pat = process.env.GITHUB_PAT;
  const repo = process.env.GITHUB_REPO;
  const path = process.env.GITHUB_AUCTION_PATH;

  try {
    const res = await fetch(
      `https://api.github.com/repos/${username}/${repo}/contents/${path}`,
      {
        cache: "no-cache",
        headers: {
          authorization: `token ${pat}`,
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

/*
 * function: readAuctions
 * return: promise containing the lots from the json file
 *
 * Gets the lots from the auction.json file
 */
export async function readAuctions(): Promise<Response200<Lots>> {
  try {
    const file = await readFile(
      process.cwd() + "/src/data/auction.json",
      "utf8",
    );

    const lot = (await JSON.parse(file)) as Lot;

    const lots = {
      lots: [lot],
      sha: "",
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
