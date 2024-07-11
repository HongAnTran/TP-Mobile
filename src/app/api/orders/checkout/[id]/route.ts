import OrderServiceApi from '@/services/orderService'
import { type NextRequest } from 'next/server'
export async function POST(request: NextRequest, { params }: { params: { id: number } }) {
  const res = await request.json()
  const data = await OrderServiceApi.checkout(params.id, res)
  return Response.json(data)
}