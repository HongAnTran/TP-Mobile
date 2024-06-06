
import fetchApi from "@/api/instances/baseInstance";
import categorysJson from "@/data/categoryProduct.json";
import {  CategoryProduct} from "@/types/categoryProduct";


class CategoryService {
  private url: string = "/category-product";
  constructor() { }

  async getList(params?: { limit: number }) {
    return fetchApi.get<CategoryProduct[]>(this.url, {
      params: params,
    });
  }

  async getDetail(slug: string) {
    return fetchApi.get<CategoryProduct>(`${this.url}/${slug}`, {});
  }
}

const CategoryServiceApi = new CategoryService();
export default CategoryServiceApi;
