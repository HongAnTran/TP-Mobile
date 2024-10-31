import fetchApi from "@/api/instances/baseInstance";
import { ConfigAPi } from "@/types/api";
import { Store, StoreParams } from "@/types/store";

class StoreService {
  private url: string = "/store";

  constructor() { }
  async getDetail(id: number , init?:ConfigAPi) {
    const product = await fetchApi.get<Store>(`${this.url}/${id}`, {
      ...init
    });
    return product
  }

  async getList(params?: StoreParams ,init?:ConfigAPi) {
    const stores = await fetchApi.get<Store[]>(`${this.url}`, {
      ...init,
      params : params,
    });
    return stores
  }
}

const StoreServiceApi = new StoreService();
export default StoreServiceApi;
