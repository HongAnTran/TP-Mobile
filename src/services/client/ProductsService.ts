import fetchClientApi from "@/api/instances/clientInstance";
import { ConfigAPi } from "@/types/Api.type";
import {
  Product,
  ProductRating,
  ProductRatingResponse,
  Products,
  ProductsParams,
  ProductStatus,
} from "@/types/Product.types";
class ProductsServiceClient {
  private url: string = "/products";

  constructor() {}

  async getList(params?: ProductsParams, init?: ConfigAPi) {
    const paramsDefault: ProductsParams = {
      sortBy: "created_at",
      sortType: "desc",
      ...params,
      status: ProductStatus.SHOW,
    };
    return fetchClientApi.get<Products>(this.url, {
      params: paramsDefault,
      next: { revalidate: 60 * 5 },
      ...init,
    });
  }

  async getDetail(slug: string) {
    const product = await fetchClientApi.get<Product>(`${this.url}/${slug}`, {
      next: { tags: [this.url, slug], revalidate: 60 * 60 * 24 * 3 },
    });
    return product;
  }

  async getRating(slug : Product["slug"], init?: ConfigAPi) {
    return fetchClientApi.get<ProductRating[]>(this.url + '/ratings/' + slug, {
      ...init,
    });
  }
}

const ProductsServiceClientApi = new ProductsServiceClient();
export default ProductsServiceClientApi;
