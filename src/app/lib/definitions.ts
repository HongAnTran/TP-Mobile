interface SessionPayload {
  accessToken: string;
  refreshToken: string;
  expiresAt: Date;
}

interface Session {
  accessToken: string;
  refreshToken: string;
  iat: number;
  exp: number;
}

export type { SessionPayload, Session };
