import fetchApi from "@/api/instances/baseInstance";
import { Article, Articles, ArticlesParams } from "@/types/Article.type";

class ArticeService {
  private url: string = "/articles";

  constructor() {}

  async getList(params?: ArticlesParams) {
    return fetchApi.get<Articles>(this.url, {
      params: params,
      next: {
        tags: [this.url],
        revalidate: 1000 * 5,
      },
    });
  }
  async getDetail(slug: string) {
    return fetchApi.get<Article>(`${this.url}/${slug}`, {
      next: { tags: [this.url, slug], revalidate: 1000 * 60 * 60 },
    });
  }
}
const ArticeServiceApi = new ArticeService();
export default ArticeServiceApi;
