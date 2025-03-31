import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { SessionPayload, Session } from "@/app/lib/definitions";
import { cookies } from "next/headers";
import { getCookie, setCookie, deleteCookie } from "cookies-next";
const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);
const KEY = "auth-session";

const options = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  maxAge: 60 * 60 * 24 * 30,
  path: "/",
  cookies,
};

export async function createSession(accessToken: string) {
  const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ accessToken, expiresAt });
  setCookie(KEY, session, options);
}

export async function getSession() {
  const session = getCookie(KEY, options);
  if (!session) {
    return null;
  }
  const payload = await decrypt(session);
  return payload;
}

export async function deleteSession() {
  deleteCookie(KEY, options);
}
export async function encrypt(payload: SessionPayload) {
  return new SignJWT({
    accessToken: payload.accessToken,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("30d")
    .sign(encodedKey);
}

export async function decrypt(
  session: string | undefined = ""
): Promise<Session | null> {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    if (!payload) {
      return null;
    }
    return payload as unknown as Session;
  } catch (error) {
    return null;
  }
}
