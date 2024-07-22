import FetchApi from "@/api/fetch";
import { checkIsClient } from "@/utils";

const fetchApi = new FetchApi({
  baseURL: checkIsClient() ? process.env.NEXT_PUBLIC_BASE_URL : process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5 * 1000,
});

fetchApi.use({
  request: async (config) => {
    if (config.isLogger) {
      console.log(config);
    }
    return config;
  },
  response: async (response, data, req) => {
    if (req.isLogger) {
      console.log({ response, data: JSON.stringify(data) });
    }
    return response;
  },
});
export default fetchApi;
