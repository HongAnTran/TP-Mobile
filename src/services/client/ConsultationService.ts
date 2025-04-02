import fetchApiClient from "@/api/instances/clientInstance";
import ConsultationForm from "@/types/ConsultationForm.type";

class ConsultationsServiceClient {
  private url: string = "/consultations";

  constructor() {}
    async create(data: ConsultationForm): Promise<any> {
        const response = await fetchApiClient.post(this.url, data);
        return response;
    }
}
const ConsultationsServiceApiClient = new ConsultationsServiceClient();
export default ConsultationsServiceApiClient;
