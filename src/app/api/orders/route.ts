import OrderServiceApi from '@/services/orderService'
import { type NextRequest } from 'next/server'
export async function POST(request: NextRequest) {
  const res = await request.json()
  const data = await OrderServiceApi.createOrder(res)
  return Response.json(data)
}