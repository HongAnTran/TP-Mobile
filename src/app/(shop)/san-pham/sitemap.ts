import ProductsServiceApi from "@/services/productService"
import { MetadataRoute } from "next"

const domain = process.env.DOMAIN || "https://tpmobile.com.vn"

export async function generateSitemaps() {
  // Fetch the total number of products and calculate the number of sitemaps needed
  return [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }]
}
 
export default async function sitemap({
  id,
}: {
  id: number
}): Promise<MetadataRoute.Sitemap> {
  const {products} = await ProductsServiceApi.getList()
  return products.map((product) => ({
    url: `${domain}/product/${id}`,
    lastModified: product.updated_at || product.created_at,
  }))
}