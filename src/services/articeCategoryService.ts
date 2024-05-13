import { CategoryArtice } from '@/types/categoryArtice';

import categorysJson from "@/data/categoryArtice.json";



class ArticeCategoryService {
  private url: string = "/categorys";
  private categorys = JSON.parse(JSON.stringify(categorysJson)) as CategoryArtice[]

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

const ArticeCategoryServiceApi = new ArticeCategoryService();
export default ArticeCategoryServiceApi;
