import CategoryServiceApi from "@/services/categoryService"
import ProductsServiceApi from "@/services/ProductService"
import { MetadataRoute } from "next"


export async function generateSitemaps() {
  const { datas } = await CategoryServiceApi.getList()


  return datas.map(data => ({ id: data.slug }))
}
const domain = process.env.DOMAIN || "https://tpmobile.com.vn"

export default async function sitemap({
  id,
}: {
  id: number
}): Promise<MetadataRoute.Sitemap> {
  const { datas } = await CategoryServiceApi.getList()
  return datas.map((data) => ({
    url: `${domain}/danh-muc/${data.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly"
  }))
}