import fetchApi from "@/api/instances/baseInstance";
import { ConfigAPi } from "@/types/Api.type";
import { Attribute, AttributeValue } from "@/types/Attributes.type";
class AttributeService {
  url: string = "/attributes";

  constructor() {}

  async getList(init?: ConfigAPi) {
    return fetchApi.get<Attribute[]>(this.url, {
      next: { revalidate: 60 * 60 * 12 },
      ...init,
    });
  }
  async getListValue(params?: { attribute_id: number }, init?: ConfigAPi) {
    return fetchApi.get<AttributeValue[]>(this.url + "/values", {
      ...init,
      params: params,
      next: { revalidate: 60 * 60 * 12 },
    });
  }
}

const AttributeServiceApi = new AttributeService();
export default AttributeServiceApi;
