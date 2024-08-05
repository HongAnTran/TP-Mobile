import ProductsServiceApi from "@/services/productService"
import { MetadataRoute } from "next"


export async function generateSitemaps() {
  const { datas: products } = await ProductsServiceApi.getList()

  return products.map(product => ({ id: product.slug }))
}
const domain = process.env.DOMAIN || "https://tpmobile.com.vn"

export default async function sitemap({
  id,
}: {
  id: number
}): Promise<MetadataRoute.Sitemap> {
  const { datas: products } = await ProductsServiceApi.getList()
  return products.map((product) => ({
    url: `${domain}/san-pham/${product.slug}`,
    lastModified: product.updated_at || product.created_at,
    changeFrequency: "weekly"
  }))
}