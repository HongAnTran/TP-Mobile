import ErrorRespone from "@/api/error";
import { getSession } from "@/app/lib/session";
import CustomerServiceApi from "@/services/customerService";
import QuestionsServiceApi from "@/services/QuestionsService";
import { NextResponse, type NextRequest } from "next/server";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const res = await request.json();
    const secstion = await getSession();
    if (secstion) {
      const customer = await CustomerServiceApi.profile();
      await QuestionsServiceApi.create({
        ...res,
        customer_id: customer.id,
      });
      return Response.json({
        status: true,
      });
    }
    await QuestionsServiceApi.create({
      ...res,
    });
    return Response.json({
      status: true,
    });
  } catch (error) {
    if (error instanceof ErrorRespone) {
      return NextResponse.json(error, { status: error.statusCode });
    }
    return NextResponse.json({ status: false }, { status: 500 });
  }
}
