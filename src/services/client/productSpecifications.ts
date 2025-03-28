import fetchApiPublic from "@/api/instances/baseInstance";
import { ConfigAPi } from "@/types/Api.type";
import {
  ProductGroupSpecifications,
  ProductSpecifications,
  ProductTypeSpecifications,
} from "@/types/Product.types";
class productSpecificationsServiceClient {
  private url: string = "/specifications";

  constructor() {}

  async getList(
    params?: { product_id?: number; ids?: string },
    init?: ConfigAPi
  ) {
    return fetchApiPublic.get<ProductSpecifications[]>(this.url, {
      next: { revalidate: 60 * 60 * 12 },
      params: params,
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
    return fetchApiPublic.get<ProductTypeSpecifications[]>(
      this.url + "/types",
      {
        ...init,
        cache: "force-cache",
      }
    );
  }
  async getListGroup(init?: ConfigAPi) {
    return fetchApiPublic.get<ProductGroupSpecifications[]>(
      this.url + "/groups",
      {
        ...init,
        cache: "force-cache",
      }
    );
  }
}

const ProductSpecificationsServiceClientApi =
  new productSpecificationsServiceClient();
export default ProductSpecificationsServiceClientApi;
