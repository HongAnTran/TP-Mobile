type ProductId = number
enum ProductStatus {
  HIDDEN,
  SHOW,
  DRAFT,
}
interface Product {
  id: ProductId;
  title: string;
  slug: string
  body_html: string
  product_type: string
  vendor: string
  available: boolean
  status: ProductStatus,
  tags: string
  created_at: string
  updated_at: string
  published_at: string
  barcode: string | null
  options: ProductOption[]
  // metadata
  create_id: number
  store_id: number
  category_id: number
  images: ProductImage[]
  image: ProductImage,
  variants: ProductVariant[]
  category_title: string
  rating : ProductRating
}

interface ProductVariant {
  barcode: null | string,
  compare_at_price: number,
  id: number,
  option1: string,
  option2: string,
  option3: string,
  position: number,
  price: number,
  sku: string,
  title: string,
  updated_at: null | string,
  inventory_management: null,
  inventory_quantity: number,
  old_inventory_quantity: number,
  image_id: number,
  available: boolean,
}
interface ProductImage {
  created_at: null | string,
  id: number,
  position: number,
  product_id: ProductId,
  updated_at: null | string,
  src: string,
  variant_ids: number[]
}

interface ProductOption {
  name: string,
  position: number,
  product_id: ProductId,
  values: string[]
}

type ProductOrder = Pick<Product, "title" | "slug" | "product_type" | "vendor" | "barcode" | "body_html"> & {
  line_price: number
  price: number
  price_original: number
  line_price_orginal: number
  variant_id: number
  product_id: ProductId
  url: string
  image: string
  product_title: string
  variant_title: string
  variant_options: string[]
  quantity: number
}
interface ProductRating {
  id: number,
  count: number
  rate : number
}
export { ProductStatus }
export type { Product, ProductImage, ProductOption, ProductOrder, ProductVariant , ProductRating };
