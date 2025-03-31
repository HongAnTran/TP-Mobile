
interface Rating {
  id: number
  rate: number
  content: string,
  images: string[],
  product_id: number
  customer_id: string,
  like_count: number
}
export type { Rating }