import ErrorRespone from "@/api/error";
import CartService from "@/services/cartService";
import { type NextRequest } from "next/server";
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = await CartService.saveCart(body);
    return Response.json(data);
  } catch (error) {
    console.log(error);
    if (error instanceof ErrorRespone) {
      return Response.json(error, { status: error.statusCode });
    }
    return Response.json({ status: false }, { status: 500 });
  }
}
