import ErrorRespone from "@/api/error";
import CategoryServiceApi from "@/services/categoryService";
import { type NextRequest } from "next/server";
export async function GET(request: NextRequest) {
  try {
    const data = await CategoryServiceApi.getList();
    return Response.json(data);
  } catch (error) {
    if (error instanceof ErrorRespone) {
      return Response.json(error, { status: error.statusCode });
    }
  }
}
