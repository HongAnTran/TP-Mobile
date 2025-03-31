import FetchApi from "@/api/fetch";
import { getSession } from "@/app/lib/session";
import { checkIsClient } from "@/utils";

const fetchApiAuth = new FetchApi({
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5 * 1000,
});

fetchApiAuth.use({
  request: async (config) => {
    if (config.isLogger) {
      console.log(config);
    }
    if (!checkIsClient()) {
      const session = await getSession();
      if (session) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${session.accessToken}`,
        };
      }
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
export default fetchApiAuth;
