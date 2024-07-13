import routes from "@/routes"
import ProductsServiceApi from "@/services/productService"
import { MetadataRoute } from "next"

const domain = process.env.DOMAIN || "https://tpmobile.com.vn"

export default async function sitemap({
  slug,
}: {
  slug: string
}): Promise<MetadataRoute.Sitemap> {
  const {products} = await ProductsServiceApi.getList()
  return products.map((product) => ({
    url: `${domain}/${routes.products}/${product.slug}`,
    lastModified: product.updated_at || product.created_at,
  }))
}