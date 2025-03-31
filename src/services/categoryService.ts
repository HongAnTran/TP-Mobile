import { ResList } from "@/types/Common.type";

import fetchApi from "@/api/instances/baseInstance";
import { ConfigAPi } from "@/types/Api.type";
import {
  CategoryProduct,
  CategoryProductFilter,
} from "@/types/categoryProduct";

class CategoryService {
  private url: string = "/categories";
  constructor() {}

  async getList(params?: CategoryProductFilter, init?: ConfigAPi) {
    return fetchApi.get<ResList<CategoryProduct>>(this.url, {
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
    return fetchApi.get<CategoryProduct>(`${this.url}/${slug}`, {});
  }
}

const CategoryServiceApi = new CategoryService();
export default CategoryServiceApi;
