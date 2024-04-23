import fetchApi from "@/api/instances/baseInstance";
import { Product } from "@/types/product";
import productsJson from "@/data/product.json"


class ProductsService {
  private url: string = "/products";
  private products: Product[] = JSON.parse(JSON.stringify(productsJson)) as Product[]

  constructor() { }

  async getList(params?: { limit: number }) {

    return this.products
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
