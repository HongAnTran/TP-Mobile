import QuestionsServiceApi from "@/services/QuestionsService";

export async function GET(request: Request) {
  const searchParams = new URL(request.url).searchParams;
  const product_id = searchParams.get("product_id") || undefined;
  const data = await QuestionsServiceApi.getList({
    product_id: product_id ? +product_id : undefined,
  });

  console.log("🚀 ~ file: route.ts:12 ~ GET ~ data:", data);
  return Response.json(data);
}
