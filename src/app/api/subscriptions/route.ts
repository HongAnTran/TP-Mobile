import ErrorRespone from "@/api/error";
import SubscriptionsServiceApi from "@/services/SubscriptionsService";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {email: string };
    const respon = await SubscriptionsServiceApi.create(body);
    return NextResponse.json({ status: true });
  } catch (error) {
    if (error instanceof ErrorRespone) {
      return NextResponse.json(error, { status: error.statusCode });
    }
    return NextResponse.json({ status: false }, { status: 500 });
  }
}
