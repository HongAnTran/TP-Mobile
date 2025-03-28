import fetchApiClient from "@/api/instances/clientInstance";
import {
  LoginPayload,
  LoginResponse,
  RegisterPayload,
} from "@/types/Auth.type";
import { Customer } from "@/types/Customer.type";

class AuthServiceClient {
  private url: string = "/auth";

  constructor() {}

  async login(payload: LoginPayload) {
    return fetchApiClient.post<LoginResponse>(this.url + "/login", payload);
  }

  async register(payload: RegisterPayload) {
    return fetchApiClient.post<Customer>(this.url + "/register", payload);
  }

  async profile() {
    return fetchApiClient.get<Customer>(this.url + "/profile");
  }

  async active(token: string) {
    return fetchApiClient.get<Customer>(this.url + "/active/" + token);
  }

  async logout() {
    return fetchApiClient.post(this.url + "/logout", {});
  }

  async refreshToken(refreshToken: string) {
    return fetchApiClient.post<{
      accessToken: string;
    }>(this.url + "/refresh", {
      refreshToken,
    });
  }
}

const AuthServiceClientApi = new AuthServiceClient();
export default AuthServiceClientApi;
