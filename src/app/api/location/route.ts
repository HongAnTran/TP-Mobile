import LocationServiceApi from '@/services/locationService'
import { LocationTypeCode } from '@/types/location'
import { type NextRequest } from 'next/server'
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const type = searchParams.get('type') as LocationTypeCode
  const parent_code = searchParams.get('parent_code') ||undefined
  const data = await LocationServiceApi.getList({
   type,
   parent_code
  })
  console.log(data)
  return Response.json(data)
}