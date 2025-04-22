import QuestionsServiceApi from "@/services/QuestionsService";

export async function GET(request: Request) {
  const searchParams = new URL(request.url).searchParams;
  const product_id = searchParams.get("product_id") || undefined;
  const data = await QuestionsServiceApi.getList({
    product_id: product_id ? +product_id : undefined,
  });
  return Response.json(data);
}
