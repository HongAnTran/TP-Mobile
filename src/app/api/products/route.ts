import ProductsServiceApi from '@/services/productService'
import { type NextRequest } from 'next/server'
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const keyword = searchParams.get('keyword')
  const take = Number(searchParams.get('take'))
  // const keyword = searchParams.get('keyword')

  const data = await ProductsServiceApi.getList({
    take : take || undefined,
    keyword : keyword || undefined
  })
  return Response.json(data)
}