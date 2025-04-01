import ErrorRespone from "@/api/error";
import { getSession } from "@/app/lib/session";
import OrderServiceApi from "@/services/orderService";
import { NextResponse, type NextRequest } from "next/server";
export async function POST(
  request: NextRequest,
  { params }: { params: { token: string } }
) {
 try {
  const res = await request.json();

  const sesstion = await getSession()
   if(sesstion){
     const {token} = await OrderServiceApi.checkoutCustomer(params.token, res);
     return Response.json({
      token
     });
   }
   const {token}  = await OrderServiceApi.checkout(params.token, res);
   return Response.json({
    token
   });
 } catch (error) {
        if (error instanceof ErrorRespone) {
               return NextResponse.json(error, { status: error.statusCode });
                    }
       return NextResponse.json({ status: false }, { status: 500 });
 }
}
