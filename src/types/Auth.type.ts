import { Gender } from "./Customer.type";

interface LoginPayload {
  email: string;
  password: string;
  callbackUrl?: string;
}

interface LoginResponse {
  profile: {
    email: string;
  };
  accessToken: string;
  refreshToken: string;
}

interface RegisterPayload {
  email: string;
  password: string;
  name: string;
  gender: Gender;
  phone?: string;
  birthday?: Date;
}

export type { LoginPayload, RegisterPayload, LoginResponse };
