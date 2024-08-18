import ProductsServiceApi from '@/services/ProductService'
import { type NextRequest } from 'next/server'
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const keyword = searchParams.get('keyword')
  const limit = Number(searchParams.get('limit'))
  const ids = searchParams.get('ids')

  const data = await ProductsServiceApi.getList({
    limit: limit || undefined,
    keyword: keyword || undefined,
    ids: ids || undefined
  })
  return Response.json(data)
}