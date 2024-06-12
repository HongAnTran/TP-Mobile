import FetchApi from "@/api/fetch";

const fetchApiPublic = new FetchApi({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5 * 1000,
});

export default fetchApiPublic;
