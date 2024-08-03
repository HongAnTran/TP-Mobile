import fetchApi from "@/api/instances/baseInstance";
import { ConfigAPi } from "@/types/api";
import { Attribute, AttributeStyle, AttributeValue } from "@/types/Attributestypes";
class AttributeService {
  url: string = "/attributes";
  url_value: string = "/attribute-values";

  constructor() { }



  async getList(init?: ConfigAPi) {
    return fetchApi.get<Attribute[]>(this.url, {
      next: { revalidate: 60 * 60 * 12 },
      ...init,
    });
  }
  async getListValue(params?: { attribute_id: number }, init?: ConfigAPi) {
    return fetchApi.get<AttributeValue[]>(this.url_value, {
      ...init,
      params:params,
      next: { revalidate: 60 * 60 * 12 },
    });
  }
}

const AttributeServiceApi = new AttributeService();
export default AttributeServiceApi;
