import { ResList } from "@/types/Common.type";

import fetchApiClient from "@/api/instances/clientInstance";
import { ConfigAPi } from "@/types/Api.type";
import {
  CategoryProduct,
  CategoryProductFilter,
} from "@/types/categoryProduct";

class CategoryServiceClient {
  private url: string = "/category-product";
  constructor() {}

  async getList(params?: CategoryProductFilter, init?: ConfigAPi) {
    return fetchApiClient.get<ResList<CategoryProduct>>(this.url, {
      params: {
        orderBy: "id",
        orderType: "asc",
        ...params,
      },
      next: {
        revalidate: 60 * 10,
      },
      ...init,
    });
  }
  async getDetail(slug: string) {
    return fetchApiClient.get<CategoryProduct>(`${this.url}/${slug}`, {});
  }
}

const CategoryServiceClientApi = new CategoryServiceClient();
export default CategoryServiceClientApi;
