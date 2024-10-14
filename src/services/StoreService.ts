import fetchApi from "@/api/instances/baseInstance";
import { ConfigAPi } from "@/types/api";
import { Store } from "@/types/store";

class StoreService {
  private url: string = "/store";

  constructor() { }
  async getDetail(id: number , init?:ConfigAPi) {
    const product = await fetchApi.get<Store>(`${this.url}/${id}`, {
      ...init
    });
    return product
  }

  async getList(init?:ConfigAPi) {
    const stores = await fetchApi.get<Store[]>(`${this.url}`, {
      ...init
    });
    return stores
  }
}

const StoreServiceApi = new StoreService();
export default StoreServiceApi;
