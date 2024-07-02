import ProductsServiceApi from '@/services/productService'
import { type NextRequest } from 'next/server'
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const keyword = searchParams.get('keyword')
  const limit = Number(searchParams.get('limit'))
  // const keyword = searchParams.get('keyword')

  const data = await ProductsServiceApi.getList({
    limit : limit || undefined,
    keyword : keyword || undefined
  })
  return Response.json(data)
}