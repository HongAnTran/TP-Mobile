import AuthServiceApi from "@/services/authService";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const respon = await AuthServiceApi.register(body);
  return respon;
}
