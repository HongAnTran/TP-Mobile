import CategoryServiceApi from '@/services/categoryService'
import { type NextRequest } from 'next/server'
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const take = Number(searchParams.get('take'))
  const skip = Number(searchParams.get('skip'))

  const data = await CategoryServiceApi.getList({
    take : take || undefined,
    skip : skip || undefined,
  })
  return Response.json(data)
}