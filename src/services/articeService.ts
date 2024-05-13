import fetchApi from "@/api/instances/baseInstance";

import articeJson from "@/data/article.json"
import { sleep } from "@/utils";
import { Article } from "@/types/article";

class ArticeService {
  private url: string = "/artice";
  private artice: Article[] = JSON.parse(JSON.stringify(articeJson)) as Article[]

  constructor() { }

  async getList(params?: { limit?: number, category_id?: number, keyword?: string, ids?: Article["id"][] }) {

    let resuilt = [...this.artice]
    if (params) {

      if (params.category_id) {
        resuilt = resuilt.filter(item => item.category_id === params.category_id)
      }

      if (typeof params.keyword === "string") {
        if (!params.keyword) {
          resuilt = []
        } else {
          resuilt = resuilt.filter(item => item.title.toLocaleLowerCase().includes(params.keyword?.toLocaleLowerCase() || ""))
        }
      }
      if (params.ids) {
        const data: Article[] = []
        params.ids.forEach(id => {
          const find = resuilt.find(item => id === item.id)
          if (find) {
            data.push(find)
          }
        })
        resuilt = data
      }

      if (params.limit) {
        resuilt = resuilt.slice(0, params.limit)
      }


    }


    // await sleep(3000)
    return resuilt
    // return fetchApi.get<Product[]>(this.url, {
    //   params: params,

    // });
  }

  async getDetail(slug: string) {
    // await sleep(3000)

    return this.artice.find(item => item.slug === slug)
    // return fetchApi.get<Product>(`${this.url}/${id}`, {});
  }
}

const ArticeServiceApi = new ArticeService();
export default ArticeServiceApi;
