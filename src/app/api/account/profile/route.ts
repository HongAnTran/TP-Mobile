import { getSession } from "@/app/lib/session";
import AuthServiceApi from "@/services/authService";
import CategoryServiceApi from "@/services/categoryService";
import { type NextRequest } from "next/server";
export async function GET(request: NextRequest) {
  const session = await getSession();
  if (!session) {
    return Response.json({ message: "Unauthor" }, { status: 401 });
  }
  const profile = await AuthServiceApi.profile();
  return Response.json(profile);
}
