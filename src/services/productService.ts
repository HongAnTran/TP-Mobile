import fetchApi from "@/api/instances/baseInstance";
import { Product } from "@/types/product";
import productsJson from "@/data/product.json"
import { sleep } from "@/utils";


class ProductsService {
  private url: string = "/products";
  private products: Product[] = JSON.parse(JSON.stringify(productsJson)) as Product[]

  constructor() { }

  async getList(params?: { limit?: number, category_id?: number, keyword?: string, ids?: Product["id"][] }) {

    let resuilt = [...this.products]
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
        const data: Product[] = []
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

    return this.products.find(item => item.slug === slug)
    // return fetchApi.get<Product>(`${this.url}/${id}`, {});
  }
}

const ProductsServiceApi = new ProductsService();
export default ProductsServiceApi;
