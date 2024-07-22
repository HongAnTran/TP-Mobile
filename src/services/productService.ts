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
      next: { revalidate: 60 },
      ...init,
    });
  }
  async getDetail(slug: string) {
    const product = await fetchApi.get<Product>(`${this.url}/${slug}`, {
      next: { revalidate: 60 },
    });
    return product
  }
  // async getListClient(params?: ProductsParams, init?: ConfigAPi) {
  //   const paramsDefault: ProductsParams = {
  //     ...params,
  //     status: ProductStatus.SHOW
  //   }
  //   return fetchApiPublic.get<Products>(this.url, {
  //     params: paramsDefault,
  //     ...init,
  //   });
  // }


  // async getDetailClient(slug: string) {
  //   const product = await fetchApiPublic.get<Product>(`${this.url}/${slug}`);
  //   return product
  // }


}

const ProductsServiceApi = new ProductsService();
export default ProductsServiceApi;
