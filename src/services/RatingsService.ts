import fetchApi from "@/api/instances/baseInstance";
import { ConfigAPi } from "@/types/Api.type";
import type { ResList } from "@/types/Common.type";
import { Product } from "@/types/Product.types";
import { Rating } from "@/types/Rating.type";

class RatingsService {
  private url: string = "/ratings";
  constructor() {}
  async getRatings(id : Product["id"], init?: ConfigAPi) {
    return fetchApi.get<ResList<Rating>>(this.url  + `/${id}`, {
      ...init,
    });
  }
}

const RatingsServiceApi = new RatingsService();
export default RatingsServiceApi;
