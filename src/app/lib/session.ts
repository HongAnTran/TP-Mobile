import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { SessionPayload, Session } from "@/app/lib/definitions";
import { cookies } from "next/headers";
const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);
const KEY = "auth-session";
export async function createSession(accessToken: string, refreshToken: string) {
  const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ refreshToken, accessToken, expiresAt });
  cookies().set(KEY, session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
  });
}

export async function getSession() {
  const session = cookies().get(KEY);
  if (!session?.value) {
    return null;
  }
  const payload = await decrypt(session.value);
  return payload;
}

export async function deleteSession() {
  cookies().delete(KEY);
}
export async function encrypt(payload: SessionPayload) {
  return new SignJWT({
    accessToken: payload.accessToken,
    refreshToken: payload.refreshToken,
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
