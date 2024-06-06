import fetchApi from "@/api/instances/baseInstance";
import { ConfigAPi } from "@/types/api";
import { Product, Products, ProductsParams, ProductStatus } from "@/types/product";
class ProductsService {
  private url: string = "/products";

  constructor() { }

  async getList(params?: ProductsParams, init?: ConfigAPi) {
    const paramsDefault: ProductsParams = {
      ...params,
      status: ProductStatus.SHOW
    }
    return fetchApi.get<Products>(this.url, {
      params: paramsDefault,
      cache: "no-cache",
      ...init
    });
  }

  async getDetail(slug: string) {
    const product = await fetchApi.get<Product>(`${this.url}/${slug}`, {
      cache: "no-cache"
    });
    return {
      ...product,
      image: product.images[0]
    }

  }
}

const ProductsServiceApi = new ProductsService();
export default ProductsServiceApi;
