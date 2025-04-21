import fetchApiClient from "@/api/instances/clientInstance";
import { QuestionCreate } from "@/types/Questions.type";

class QuestionsServiceClient {
  private url: string = "/questions";

  constructor() {}
  async create(data: QuestionCreate) {
    const response = await fetchApiClient.post<{ status: boolean }>(
      this.url,
      data
    );
    return response;
  }
}
const QuestionsServiceApiClient = new QuestionsServiceClient();
export default QuestionsServiceApiClient;
