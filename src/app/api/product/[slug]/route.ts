import productsJson from "@/data/product.json"
import { Product } from "@/types/product"


export async function GET(request: Request,{ params }: { params: { slug: string } }) {
  const slug = params.slug
  const products = JSON.parse(JSON.stringify(productsJson)) as Product[]
  const product = products.find(item => item.slug === slug)
  return Response.json(product)
}