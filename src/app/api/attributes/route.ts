import AttributeServiceApi from '@/services/AttributeService'
import { type NextRequest } from 'next/server'
export async function GET(request: NextRequest) {
  const data = await AttributeServiceApi.getList()
  return Response.json(data)
}