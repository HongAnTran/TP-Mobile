import fetchApi from "@/api/instances/baseInstance";
import { Page } from "@/types/Page.type";
import pagesJson from "@/data/pages.json";

class PageService {
  private url: string = "/pages";
  private pages: Page[] = JSON.parse(JSON.stringify(pagesJson)) as Page[];

  constructor() {}

  async getDetail(slug: string) {
    // await sleep(3000)

    return this.pages.find((item) => item.slug === slug);
    // return fetchApi.get<Product>(`${this.url}/${id}`, {});
  }
}

const PageServiceApi = new PageService();
export default PageServiceApi;
