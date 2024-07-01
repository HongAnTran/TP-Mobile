import fetchApi from "@/api/instances/baseInstance";
import fetchApiPublic from "@/api/instances/routerhandlersInstance"
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
      // next: { revalidate: 60 * 3 },
      ...init,
 
    });
  }
  async getListClient(params?: ProductsParams, init?: ConfigAPi) {
    const paramsDefault: ProductsParams = {
      ...params,
      status: ProductStatus.SHOW
    }
    return fetchApiPublic.get<Products>(this.url, {
      params: paramsDefault,
      // next: { revalidate: 60 * 3 },
      ...init,
      isLogger: true
    });
  }

  async getDetail(slug: string) {
    const product = await fetchApi.get<Product>(`${this.url}/${slug}`, {
      // next: { revalidate: 30 },
    });
    return product
  }
  async getDetailClient(slug: string) {
    const product = await fetchApiPublic.get<Product>(`${this.url}/${slug}`, {
      // next: { revalidate: 30 },
    });
    return product
  }


}

const ProductsServiceApi = new ProductsService();
export default ProductsServiceApi;
