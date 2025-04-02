import ErrorRespone from "@/api/error";
import {  deleteSession } from "@/app/lib/session";
import AuthServiceApi from "@/services/authService";
import { NextRequest, NextResponse } from "next/server";
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
     await AuthServiceApi.logout();
    await deleteSession();
    return NextResponse.json({ status: true });
  } catch (error) {
    if (error instanceof ErrorRespone) {
      return NextResponse.json(error, { status: error.statusCode });
    }
    return NextResponse.json({ status: false }, { status: 500 });
  }
}
