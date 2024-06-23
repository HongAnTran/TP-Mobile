
import fetchApi from "@/api/instances/baseInstance";
import categorysJson from "@/data/categoryProduct.json";
import { ConfigAPi } from "@/types/api";
import { CategoryProduct, CategoryProductFilter } from "@/types/categoryProduct";


class CategoryService {
  private url: string = "/category-product";
  constructor() { }

  async getList(params?: CategoryProductFilter, init?: ConfigAPi) {
    return fetchApi.get<CategoryProduct[]>(this.url, {
      params: params,
      next: {
        revalidate: 3600
      },
      ...init
    });
  }

  async getDetail(slug: string) {
    return fetchApi.get<CategoryProduct>(`${this.url}/${slug}`, {});
  }
}

const CategoryServiceApi = new CategoryService();
export default CategoryServiceApi;
