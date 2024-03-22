import { GitFile, Lot, Lots, Response200 } from "./types";
import { decode64, getErrorMessage } from "./utils";

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
