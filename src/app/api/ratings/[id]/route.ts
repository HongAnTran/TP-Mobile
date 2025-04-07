import RatingsServiceApi from "@/services/RatingsService"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = params.id

  const data = await RatingsServiceApi.getRatings(+id)
  const { datas } = data
  const dataMap = datas.map((item) => {
    return {
      id : item.id,
      rate : item.rate,
      content: item.content,
      created_at: item.created_at,
      images : item.images,
      like_count: item.like_count,
      tags : item.tags,
      customer: item.customer ? {
        full_name : item.customer.full_name || "Khách hàng",
        avatar : item.customer.avatar
      } : {
        full_name : item.customer_seed?.name || "Khách hàng",
      },
    }
  })
  if(dataMap.length === 0) {
    return Response.json({
      datas: [],
      count: 0,
    })
  }
  return Response.json({
    datas: dataMap,
    total: data.total})
}