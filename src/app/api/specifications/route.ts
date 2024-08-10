import ProductSpecificationsServiceApi from '@/services/productSpecifications'
import { type NextRequest } from 'next/server'
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const id = searchParams.get('product_id')
  const data = await ProductSpecificationsServiceApi.getList({ product_id: Number(id) })
  return Response.json(data)
}