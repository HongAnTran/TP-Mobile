import fetchApi from "@/api/instances/baseInstance";
import { Product } from "@/types/product";


class ProductsService {
  url: string = "/products";
  constructor() {}

  async getList(params?: { limit: number }) {
    return fetchApi.get<Product[]>(this.url, {
      params: params,
      
    });
  }

  async getDetail(id: number) {
    return  fetchApi.get<Product>(`${this.url}/${id}`, {});
  }
}

const ProductsServiceApi = new ProductsService();
export default ProductsServiceApi;
