import fetchApi from "@/api/instances/baseInstance";
import ConsultationForm from "@/types/ConsultationForm.type";

class ConsultationsService {
  private url: string = "/consultations";

  constructor() {}
    async create(data: ConsultationForm): Promise<any> {
        const response = await fetchApi.post(this.url, data);
        return response;
    }
}
const ConsultationsServiceApi = new ConsultationsService();
export default ConsultationsServiceApi;
