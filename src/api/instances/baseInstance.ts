import FetchApi from "@/api/fetch";
const fetchApi = new FetchApi({
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10 * 1000,
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
