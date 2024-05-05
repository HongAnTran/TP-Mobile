import fetchApi from "@/api/instances/baseInstance";
import { Product } from "@/types/product";
import productsJson from "@/data/product.json"


class ProductsService {
  private url: string = "/products";
  private products: Product[] = JSON.parse(JSON.stringify(productsJson)) as Product[]

  constructor() { }

  async getList(params?: { limit?: number, category_id?: number, keyword?: string }) {
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

      if (params.limit) {
        resuilt = resuilt.slice(0, params.limit)

      }


    }
    return resuilt
    // return fetchApi.get<Product[]>(this.url, {
    //   params: params,

    // });
  }

  async getDetail(slug: string) {
    return this.products.find(item => item.slug === slug)
    // return fetchApi.get<Product>(`${this.url}/${id}`, {});
  }
}

const ProductsServiceApi = new ProductsService();
export default ProductsServiceApi;
