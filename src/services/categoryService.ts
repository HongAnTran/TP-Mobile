
import categorysJson from "@/data/category.json"
import {  Category} from "@/types/category";


class CategoryService {
  private url: string = "/categorys";
  private categorys = JSON.parse(JSON.stringify(categorysJson)) as Category[]

  constructor() { }

  async getList(params?: { limit: number }) {

    return this.categorys
    // return fetchApi.get<Product[]>(this.url, {
    //   params: params,

    // });
  }

  async getDetail(slug: string) {
    return this.categorys.find(item => item.slug === slug)
    // return fetchApi.get<Product>(`${this.url}/${id}`, {});
  }
}

const CategoryServiceApi = new CategoryService();
export default CategoryServiceApi;
