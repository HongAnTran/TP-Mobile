import fetchApi from "@/api/instances/baseInstance";
import {
  QuestionCreate,
  QuestionDetail,
  QuestionParams,
} from "@/types/Questions.type";

class QuestionsService {
  private url: string = "/questions";

  constructor() {}
  async create(data: QuestionCreate) {
    const response = await fetchApi.post(this.url, data);
    return response;
  }

  async getList(data: QuestionParams) {
    const response = await fetchApi.get<QuestionDetail[]>(this.url, {
      params: data,
    });
    return response;
  }
}
const QuestionsServiceApi = new QuestionsService();
export default QuestionsServiceApi;
