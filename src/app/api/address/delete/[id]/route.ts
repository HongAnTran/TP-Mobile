import ErrorRespone from "@/api/error";
import AuthServiceApi from "@/services/customerService";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest , {params}: { params: { id: string } }) {
  try {
    const id = Number(params.id);
    if (!id) {
      return NextResponse.json({ message: "ID not number" }, { status: 400 });
    }
    const respon = await AuthServiceApi.deleteAddress(id);
    return NextResponse.json(respon);
  } catch (error) {
    if (error instanceof ErrorRespone) {
      return NextResponse.json(error, { status: error.statusCode });
    }
    return NextResponse.json({ status: false }, { status: 500 });
  }
}
