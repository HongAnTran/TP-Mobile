import fetchApi from "@/api/instances/baseInstance";
import fetchApiClient from "@/api/instances/clientInstance";
import {
  LoginPayload,
  LoginResponse,
  RegisterPayload,
} from "@/types/Auth.type";
import { Customer } from "@/types/Customer.type";

class AuthService {
  private url: string = "/auth";

  constructor() {}

  async login(payload: LoginPayload) {
    return fetchApi.post<LoginResponse>(this.url + " /login", payload);
  }
  async loginClient(payload: LoginPayload) {
    return fetchApiClient.post<LoginResponse>(this.url + " /login", payload);
  }
  async register(payload: RegisterPayload) {
    return fetchApi.post<Customer>(this.url + "/register-public", payload);
  }
  async profile() {
    return fetchApi.get<Customer>(this.url + "/profile");
  }

  async logout() {
    return fetchApi.post(this.url + "/logout", {});
  }

  async refreshToken(refreshToken: string) {
    return fetchApi.post<{
      accessToken: string;
    }>(this.url + "/refresh", {
      refreshToken,
    });
  }
}

const AuthServiceApi = new AuthService();
export default AuthServiceApi;
