import FetchApi from "@/api/fetch";

const fetchApiPublic = new FetchApi({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5 * 1000,
});

export default fetchApiPublic;
