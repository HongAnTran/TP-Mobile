import StoreServiceApi from '@/services/StoreService'
import { type NextRequest } from 'next/server'
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const latitude = searchParams.get('latitude') || undefined
  const longitude = searchParams.get('longitude') || undefined
  const data = await StoreServiceApi.getList({ latitude,longitude })
  return Response.json(data)
}