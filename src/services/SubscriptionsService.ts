import fetchApi from "@/api/instances/baseInstance";

class SubscriptionService {
  private url: string = "/subscriptions";

  constructor() {}
    async create(data: {email : string}): Promise<any> {
        const response = await fetchApi.post(this.url, data);
        return response;
    }
}
const SubscriptionServiceApi = new SubscriptionService();
export default SubscriptionServiceApi;
