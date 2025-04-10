import fetchApiClient from "@/api/instances/clientInstance";

class SubscriptionServiceClient {
  private url: string = "/subscriptions";

  constructor() {}
    async create(data: {email : string}): Promise<any> {
        const response = await fetchApiClient.post(this.url, data);
        return response;
    }
}
const SubscriptionServiceApiClient = new SubscriptionServiceClient();
export default SubscriptionServiceApiClient;
