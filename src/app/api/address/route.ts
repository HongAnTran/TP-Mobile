import ErrorRespone from "@/api/error";
import AuthServiceApi from "@/services/customerService";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const respon = await AuthServiceApi.getListAddress();
    return NextResponse.json(respon);
  } catch (error) {
    if (error instanceof ErrorRespone) {
      return NextResponse.json(error, { status: error.statusCode });
    }
    return NextResponse.json({ status: false }, { status: 500 });
  }
}
