import ProductsServiceApi from "@/services/ProductsService"

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const slug = params.slug

  const data = await ProductsServiceApi.getDetail(slug)
  return Response.json(data)
}