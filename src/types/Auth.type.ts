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
  first_name: string;
  last_name: string;
  gender?: string;
  phone?: string;
  birthday?: Date;
}

export type { LoginPayload, RegisterPayload, LoginResponse };
