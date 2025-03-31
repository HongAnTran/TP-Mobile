interface SessionPayload {
  accessToken: string;
  expiresAt: Date;
}

interface Session {
  accessToken: string;
  iat: number;
  exp: number;
}

export type { SessionPayload, Session };
