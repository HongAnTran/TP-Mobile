import ErrorRespone from "@/api/error";
import { createSession } from "@/app/lib/session";
import AuthServiceApi from "@/services/authService";
import { LoginPayload, RegisterPayload } from "@/types/Auth.type";
import { NextRequest, NextResponse } from "next/server";
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as RegisterPayload;
    const respon = await AuthServiceApi.register(body);
    return NextResponse.json(respon);
  } catch (error) {
    if (error instanceof ErrorRespone) {
      return NextResponse.json(error, { status: error.statusCode });
    }
    return NextResponse.json({ status: false }, { status: 500 });
  }
}
