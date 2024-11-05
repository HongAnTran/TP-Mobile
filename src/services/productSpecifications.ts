import fetchApi from "@/api/instances/baseInstance";
import fetchApiPublic from "@/api/instances/baseInstance"
import { ConfigAPi } from "@/types/api";
import { ProductGroupSpecifications, ProductSpecifications, ProductTypeSpecifications } from "@/types/Product.types";
class productSpecificationsService {
  private url: string = "/specifications";

  constructor() { }

  async getList(params?: { product_id?: number , ids?: string }, init?: ConfigAPi) {
    return fetchApi.get<ProductSpecifications[]>(this.url, {
      next: { revalidate: 60 * 60 * 12 },
      params : params,
      ...init,
    });
  }
  async getListClient(init?: ConfigAPi) {
    return fetchApiPublic.get<ProductSpecifications[]>(this.url, {
      next: { revalidate: 60 * 60 * 12 },
      ...init,
    });
  }
  async getListType(init?: ConfigAPi) {
    return fetchApi.get<ProductTypeSpecifications[]>(this.url + "/types", {
      ...init,
      cache: "force-cache"
    });
  }
  async getListGroup(init?: ConfigAPi) {
    return fetchApi.get<ProductGroupSpecifications[]>(this.url + "/groups", {
      ...init,
      cache: "force-cache"
    });
  }
}

const ProductSpecificationsServiceApi = new productSpecificationsService();
export default ProductSpecificationsServiceApi;
