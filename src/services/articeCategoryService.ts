import fetchApi from "@/api/instances/baseInstance";
import { CategoryArtice } from "@/types/categoryArtice";
import { ResList } from "@/types/Common.type";

class ArticeCategoryService {
  private url: string = "/category-article";

  constructor() {}

  async getList() {
    return fetchApi.get<ResList<CategoryArtice>>(this.url);
  }

  async getDetail(slug: string) {
    return fetchApi.get<CategoryArtice>(`${this.url}/${slug}`);
  }
}

const ArticeCategoryServiceApi = new ArticeCategoryService();
export default ArticeCategoryServiceApi;
