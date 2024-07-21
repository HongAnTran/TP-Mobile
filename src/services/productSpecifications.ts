import fetchApi from "@/api/instances/baseInstance";
import fetchApiPublic from "@/api/instances/routerhandlersInstance"
import { ConfigAPi } from "@/types/api";
import { ProductSpecifications, ProductTypeSpecifications } from "@/types/product";
class productSpecificationsService {
  private url: string = "/specifications";

  constructor() { }

  async getList(init?: ConfigAPi) {
    return fetchApi.get<ProductSpecifications[]>(this.url, {
      next: { revalidate: 60 * 3 },
      ...init,
    });
  }
  async getListClient(init?: ConfigAPi) {
    return fetchApiPublic.get<ProductSpecifications[]>(this.url, {
      next: { revalidate: 60 * 3 },
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
    return fetchApi.get<ProductTypeSpecifications[]>(this.url + "/groups", {
      ...init,
      cache: "force-cache"
    });
  }
}

const ProductSpecificationsServiceApi = new productSpecificationsService();
export default ProductSpecificationsServiceApi;
