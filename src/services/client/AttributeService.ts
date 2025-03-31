import fetchApiClient from "@/api/instances/clientInstance";
import { ConfigAPi } from "@/types/Api.type";
import { Attribute, AttributeValue } from "@/types/Attributes.type";
class AttributeServiceClient {
  url: string = "/attributes";
  url_value: string = "/attribute-values";

  constructor() {}

  async getList(init?: ConfigAPi) {
    return fetchApiClient.get<Attribute[]>(this.url, {
      next: { revalidate: 60 * 60 * 12 },
      ...init,
    });
  }
  async getListValue(params?: { attribute_id: number }, init?: ConfigAPi) {
    return fetchApiClient.get<AttributeValue[]>(this.url_value, {
      ...init,
      params: params,
      next: { revalidate: 60 * 60 * 12 },
    });
  }
}

const AttributeServiceClientApi = new AttributeServiceClient();
export default AttributeServiceClientApi;
