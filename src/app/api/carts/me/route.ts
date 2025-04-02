import ErrorRespone from "@/api/error";
import CartService from "@/services/cartService";
import { type NextRequest } from "next/server";
export const dynamic = 'force-dynamic'


export async function GET(request: NextRequest) {
  try {
    const data = await CartService.getMyCart();
    return Response.json(data);
  } catch (error) {
    if (error instanceof ErrorRespone) {
      return Response.json(error, { status: error.statusCode });
    }
    return Response.json({ status: false }, { status: 500 });
  }
}
