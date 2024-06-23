import fetchApi from '@/api/instances/baseInstance';
import { CategoryArtice } from '@/types/categoryArtice';



class ArticeCategoryService {
  private url: string = "/category-article";

  constructor() { }

  async getList() {
    return fetchApi.get<CategoryArtice[]>(this.url);
  }

  async getDetail(slug: string) {
    return fetchApi.get<CategoryArtice>(`${this.url}/${slug}`);
  }
}

const ArticeCategoryServiceApi = new ArticeCategoryService();
export default ArticeCategoryServiceApi;
