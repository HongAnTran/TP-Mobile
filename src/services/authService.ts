import fetchApi from "@/api/instances/baseInstance";
import { Page } from "@/types/page";
import pagesJson from "@/data/pages.json"
import { Customer } from "@/types/customer";



class AuthService {
  private url: string = "/auth";
  // private pages: Page[] = JSON.parse(JSON.stringify(pagesJson)) as Page[]

  constructor() { }



  async getCustomer(id: Customer["id"]) {
    // await sleep(3000)

    // return this.pages.find(item => item.slug === slug)
    // return fetchApi.get<Product>(`${this.url}/${id}`, {});
  }

  async login(email: string, password: string) {
    return true
  }
  async register(email: string, password: string) {
    return true
  }
}

const AuthServiceApi = new AuthService();
export default AuthServiceApi;
