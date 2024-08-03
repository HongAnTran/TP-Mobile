import AttributeServiceApi from '@/services/AttributeService'
import { type NextRequest } from 'next/server'
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const attribute_id = Number(searchParams.get('attribute_id'))
  const data = await AttributeServiceApi.getListValue({ attribute_id })
  return Response.json(data)
}