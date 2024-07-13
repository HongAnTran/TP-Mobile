import fetchApi from "@/api/instances/baseInstance";
import { Article, Articles } from "@/types/article";

class ArticeService {
  private url: string = "/articles";

  constructor() { }

  async getList(params?: { take?: number, skip?: number, cateSlug?: string }) {
    return fetchApi.get<Articles>(this.url, {
      params: params,
      cache: "force-cache"

    });
  }

  async getDetail(slug: string) {
    return fetchApi.get<Article>(`${this.url}/${slug}`, {
      cache: "force-cache"
    });
  }
}

const ArticeServiceApi = new ArticeService();
export default ArticeServiceApi;
