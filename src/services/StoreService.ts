import fetchApi from "@/api/instances/baseInstance";
import { ConfigAPi } from "@/types/Api.type";
import { Store, StoreParams } from "@/types/Store.type";

class StoreService {
  private url: string = "/stores";

  constructor() {}
  async getDetail(id: number, init?: ConfigAPi) {
    const product = await fetchApi.get<Store>(`${this.url}/${id}`, {
      ...init,
    });
    return product;
  }

  async getList(params?: StoreParams, init?: ConfigAPi) {
    const stores = await fetchApi.get<Store[]>(`${this.url}`, {
      next: { revalidate: 60 * 60 * 12, tags: [this.url] },
      ...init,
      params: params,
    });
    return stores;
  }
}
const StoreServiceApi = new StoreService();
export default StoreServiceApi;
