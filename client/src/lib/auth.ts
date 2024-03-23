"use server";

import bcrypt from "bcryptjs";
import { JWTPayload, SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { GitFile, Response204, User } from "./types";
import { decode64, getErrorMessage } from "./utils";

/*
 * function: encrypt
 * param: payload, an object to be encryted
 * return: The encrypted payload stringified and signed with the secret key.
 *
 * Encrypts a payload using the secret key and the HS256 algorithm
 */
async function encrypt(payload: JWTPayload): Promise<string> {
  const secret = process.env.SECRET_KEY;
  if (!secret) throw new Error("secret key is missing from .env.");
  const key = new TextEncoder().encode(secret);

  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("30 minutes")
    .sign(key);
}

/*
 * function: decrypt
 * param: session, the encrypted payload from the cookie
 * return: The decrypted payload that was attached to the cookie
 *
 * Decrypts the payload of the session cookie.
 */
async function decrypt(session: string): Promise<JWTPayload> {
  const secret = process.env.SECRET_KEY;
  if (!secret) throw new Error("secret key is missing from .env.");
  const key = new TextEncoder().encode(secret);

  const { payload } = await jwtVerify(session, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

/*
 * function: getSession
 * return: The encrypted payload that was attached to the cookie, or null if no cookie with the given key is found.
 *
 * Creates a session cookie given the username of the user. The cookie expires after 60 minutes.
 */
export async function getSession(): Promise<JWTPayload | null> {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}

/*
 * function: createSession
 * param: username, the username of the user
 * return: The stringified cookie that was created.
 *
 * Creates a session cookie given the username of the user. The cookie expires after 60 minutes.
 */
export async function createSession(username: string): Promise<string> {
  const expires = new Date(Date.now() + 60 * 60 * 1000);
  const session = await encrypt({ username });

  cookies().set("session", session, { expires, httpOnly: true });

  return session;
}

/*
 * function: login
 * param: formData, the FormData object from a <form> tag
 *
 * Signs in the user.
 */
export async function login(formData: FormData): Promise<Response204> {
  const repo = process.env.GITHUB_REPO;
  const path = process.env.GITHUB_ADMIN_PATH;
  const ghUser = process.env.GITHUB_USERNAME;
  const pat = process.env.GITHUB_PAT;

  try {
    // Fetch user credentials from repo
    if (!repo || !path || !ghUser || !pat) {
      throw new Error(
        "Missing environment variables. Please check your Vercel dashboard.",
      );
    }

    const res = await fetch(
      `https://api.github.com/repos/${ghUser}/${repo}/contents/${path}`,
      {
        cache: "no-cache",
        headers: {
          authorization: `token ${pat}`,
        },
      },
    );
    if (!res.ok) throw new Error(`${res.status}: An error has occured.`);
    const data = (await res.json()) as GitFile;

    // Comparing username and password from the login form with the credentials from the repo
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const repoUser = decode64<User>(data.content);
    const doesUsernameMatch = username === repoUser.username;
    const doesPasswordMatch = await bcrypt.compare(password, repoUser.password);

    if (!doesUsernameMatch || !doesPasswordMatch) {
      return { error: "Incorrect username or password." };
    }

    await createSession(username);

    return { error: null };
  } catch (e) {
    return { error: getErrorMessage(e) };
  }
}

/*
 * function: signOut
 *
 * Signs out the user.
 */
export async function logOut(): Promise<void> {
  cookies().set("session", "", { expires: new Date(0) });
}
