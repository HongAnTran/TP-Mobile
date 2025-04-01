import ErrorRespone from "@/api/error";
import AuthServiceApi from "@/services/customerService";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const respon = await AuthServiceApi.createAddress(body);
    return NextResponse.json(respon);
  } catch (error) {
 if (error instanceof ErrorRespone) {
       return NextResponse.json(error, { status: error.statusCode });
     }
    return NextResponse.json({ status: false }, { status: 500 });
  }
}
