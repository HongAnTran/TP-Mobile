import { number } from "yup";
import { Brand } from "./brand";
import { CategoryProduct } from "./categoryProduct";
import { ResList } from "./common";

type ProductId = number
enum ProductStatus {
  DRAFT,
  SHOW,
}

interface Product {
  id: ProductId;
  title: string;
  slug: string
  description_html: string | null
  brand: Brand | null
  brand_id: number | null
  short_description: string | null
  available: boolean
  status: ProductStatus,
  created_at: string
  updated_at: string | null
  published_at: string | null
  barcode: string | null
  options: ProductOption[]
  // tags: ProductTags[] | null
  compare_at_price: number
  price: number
  price_min: number
  price_max: number
  // metadata
  images: ProductImage[]
  categories: ProductCategories[]
  variants: ProductVariant[]
  specifications: ProductSpecifications[]
  ratings: any
  // meta
  meta_data: {
    meta_title?: string
    meta_description?: string
    meta_keywords?: string
  }
}
interface ProductCategories {
  id: number
  category: CategoryProduct
  categoryId: number
  priority: number

}
// type ProductList = Pick<Product, "id"|"title" | "slug" |"">

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
  inventory_quantity: number,
  image_id: number | null,
  available: boolean,
}
interface ProductImage {
  created_at: null | string,
  id: number,
  alt_text: string | null
  position: number,
  product_id: ProductId,
  updated_at: null | string,
  url: string,
  is_featured: boolean
  productVariant: number[]
}

interface ProductOption {
  name: string,
  position: number,
  product_id: ProductId,
  values: string[]
}

interface ProductSpecifications {
  id: number
  group_id: number
  name: string
  value: string[]
}
interface ProductTypeSpecifications {
  id: number
  name: string
}
interface ProductGroupSpecifications {
  id: number
  name: string
  type_id: number
}


type ProductOrder = Pick<Product, | "title" | "slug" | "categories" | "brand" | "barcode"> & {
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
  selected: boolean
  category_title: string
}
interface ProductRating {
  id: number,
  count: number
  rate: number
  content: string
  images: string[]
  customer_id: number
  like_count: number
}



interface ProductsParams {
  include?: string[],
  status?: ProductStatus
  category_id?: number
  categories?: string
  ids?: string
  keyword?: string
  color?: string
  capacity?: string
  price?: string
  ram?: string
  page?: number,
  limit?: number
  sortBy?: keyof Product
  sortType?: "desc" | "asc"
}

type ProductInList = Pick<Product, "id" | "available" | "barcode" | "categories" | "compare_at_price" | "created_at"  | "images" | "price" | "price_max" | "price_min" | "slug" | "title" | "status" | "brand" | "updated_at">
type Products = ResList<ProductInList>

export { ProductStatus }
export type {
  Product,
  ProductCategories,
  ProductInList,
  Products,
  ProductsParams,
  ProductOption,
  ProductOrder,
  ProductVariant,
  ProductRating,
  ProductTypeSpecifications,
  ProductSpecifications
};
