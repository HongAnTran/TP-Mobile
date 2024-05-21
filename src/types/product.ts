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
  description_html: string
  vendor: string
  available: boolean
  status: ProductStatus,
  created_at: string
  updated_at: string
  published_at: string
  barcode: string | null
  options: ProductOption[]
  short_description: string
  tags : ProductTags[]
  // metadata
  create_id: number
  store_id: number
  category_id: number
  images: ProductImage[]
  image: ProductImage,
  variants: ProductVariant[]
  category_title: string
  rating: ProductRating | null
  specifications: ProductSpecifications[]
  // meta
  meta_title: string
  meta_description: string
  meta_keywords: string
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

interface ProductTags {
  id: number
  value: string | number
  type_id: number
}
interface ProductSpecifications {
  id: number
  type_id: number
  name: string
  value: string | number
  description?: string
}
interface ProductTypeSpecifications {
  id: number
  name: string
  description?: string
}


type ProductOrder = Pick<Product, | "title" | "slug" | "category_title" | "category_id" | "vendor" | "barcode" > & {
  id: number,
  line_price: number
  price: number
  price_original: number
  line_price_original: number
  variant_id: number
  product_id: ProductId
  product_title: string
  variant_title: string
  variant_options: string[]
  quantity: number
  image: string
  selected : boolean
}
interface ProductRating {
  id: number,
  count: number
  rate: number
}
export { ProductStatus }
export type { Product, ProductImage, ProductOption, ProductOrder, ProductVariant, ProductRating, ProductTypeSpecifications, ProductSpecifications };
