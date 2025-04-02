import ErrorRespone from '@/api/error'
import { getSession } from '@/app/lib/session'
import OrderServiceApi from '@/services/orderService'
import { NextResponse, type NextRequest } from 'next/server'
const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
 try {
  const res = await request.json()
  const sesstion = await getSession()
  console.log(sesstion)
  if(sesstion){
    const {token} = await OrderServiceApi.createOrderCustomer(res)
    return Response.json({
      token,
    })
  }

  const {token}  = await OrderServiceApi.createOrder(res)
  return Response.json({
    token,
  })
 } catch (error) {
        if (error instanceof ErrorRespone) {
              return NextResponse.json(error, { status: error.statusCode });
            }
            return NextResponse.json({ status: false }, { status: 500 });
 }
 
}