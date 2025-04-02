import ErrorRespone from "@/api/error";
import ConsultationsServiceApi from "@/services/ConsultationService";
import ConsultationFormPayload from "@/types/ConsultationForm.type";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ConsultationFormPayload;
    const respon = await ConsultationsServiceApi.create(body);
    return NextResponse.json({ status: true });
  } catch (error) {
    if (error instanceof ErrorRespone) {
      return NextResponse.json(error, { status: error.statusCode });
    }
    return NextResponse.json({ status: false }, { status: 500 });
  }
}
