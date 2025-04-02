import ErrorRespone from "@/api/error";
import { createSession } from "@/app/lib/session";
import AuthServiceApi from "@/services/authService";
import { LoginPayload } from "@/types/Auth.type";
import { NextRequest, NextResponse } from "next/server";
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as LoginPayload;
    const { callbackUrl, ...payload } = body;
    const respon = await AuthServiceApi.login(payload);
    const { accessToken } = respon;
    console.log(respon)
    await createSession(accessToken);
    return NextResponse.json({ status: true });
  } catch (error) {
    if (error instanceof ErrorRespone) {
      return NextResponse.json(error, { status: error.statusCode });
    }
    return NextResponse.json({ status: false }, { status: 500 });
  }
}
