import fetchApiClient from "@/api/instances/clientInstance";
import {
  QuestionCreate,
  QuestionDetail,
  QuestionParams,
} from "@/types/Questions.type";

class QuestionsServiceClient {
  private url: string = "/questions";

  constructor() {}
  async create(data: QuestionCreate) {
    const response = await fetchApiClient.post<{ status: boolean }>(
      this.url + "/create",
      data
    );
    return response;
  }
  async getList(data: QuestionParams) {
    const response = await fetchApiClient.get<QuestionDetail[]>(this.url, {
      params: data,
    });
    return response;
  }
}
const QuestionsServiceApiClient = new QuestionsServiceClient();
export default QuestionsServiceApiClient;
