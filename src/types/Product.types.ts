import { Attribute, AttributeValue } from "./Attributes.type";
import { Brand } from "./Brand.type";
import { CategoryProduct } from "./categoryProduct";
import { ResList } from "./Common.type";

type ProductId = number;

export enum ProductStatus {
  DRAFT,
  SHOW,
}

interface Product {
  id: ProductId;
  title: string;
  slug: string;
  description_html: string | null;
  brand_id: number | null;
  available: boolean;
  status: ProductStatus;
  created_at: string;
  updated_at: string | null;
  published_at: string | null;
  barcode: string | null;
  short_description: string | null;
  price: number;
  compare_at_price: number;
  price_min: number;
  price_max: number;
  related: number[];
  category_id: number;
  category: CategoryProduct;
  sub_categories: ProductCategories[];
  brand: Brand | null;
  tags: Tags[];
  attributes: ProductAttribute[];
  // metadata
  images: ProductImage[];
  variants: ProductVariant[];
  meta_data: {
    meta_title?: string;
    meta_description?: string;
    meta_keywords?: string;
  } | null;
  meta_tags: object | null;
}

interface ProductAttribute {
  id: number;
  position: number;
  attribute: Attribute;
  values: {
    position: number;
    attributeValue: AttributeValue;
  }[];
}

interface Tags {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  published: boolean;
}
interface ProductCategories {
  id: number;
  category: CategoryProduct;
  categoryId: number;
  priority: number;
}

interface ProductVariant {
  id: number;
  barcode: null | string;
  position: number;
  compare_at_price: number;
  price: number;
  sku: string;
  title: string;
  created_at: string;
  updated_at: null | string;
  inventory_quantity: number;
  sold_quantity: number;
  image_id: number | null;
  product_id: number;
  image: ProductImage | null;
  available: boolean;
  attribute_values: AttributeValue[];
}
interface ProductImage {
  id: number;
  created_at: null | string;
  alt_text: string | null;
  position: number;
  product_id: ProductId;
  updated_at: null | string;
  url: string;
  is_featured: boolean;
  productVariant: { id: number }[];
}

interface ProductSpecifications {
  id: number;
  group_id: number;
  link: string | null;
  value: string;
}
interface ProductTypeSpecifications {
  id: number;
  name: string;
}
interface ProductGroupSpecifications {
  id: number;
  name: string;
  type_id: number;
}

type ProductOrder = {
  id: number;
  line_price: number;
  price: number;
  price_original: number;
  line_price_original: number;
  variant_id: number;
  product_id: ProductId;
  quantity: number;
  selected: boolean;
  product: Product;
  variant: ProductVariant;
};
interface ProductRating {
  id: number;
  count: number;
  rate: number;
  content: string;
  images: string[];
  customer_id: number;
  like_count: number;
}

interface ProductsParams {
  include?: string[];
  status?: ProductStatus;
  category_id?: number;
  categories?: string;
  ids?: string;
  keyword?: string;
  color?: string;
  capacity?: string;
  price?: string;
  ram?: string;
  page?: number;
  limit?: number;
  sortBy?: keyof Product;
  sortType?: "desc" | "asc";
}

type ProductInList = Pick<
  Product,
  | "id"
  | "available"
  | "compare_at_price"
  | "images"
  | "price"
  | "price_max"
  | "price_min"
  | "slug"
  | "title"
  | "status"
  | "brand"
  | "updated_at"
  | "meta_tags"
  | "tags"
  | "category"
  | "category_id"
  | "created_at"
>;
type Products = ResList<ProductInList>;

type ProductRatingResponse = {
  id : Product['id'],
  ratings : ProductRating[],
}

export type {
  Product,
  ProductCategories,
  ProductInList,
  Products,
  ProductsParams,
  ProductOrder,
  ProductVariant,
  ProductRating,
  ProductTypeSpecifications,
  ProductSpecifications,
  ProductImage,
  ProductGroupSpecifications,
  ProductAttribute,
  ProductId,
  Tags,
  ProductRatingResponse
};
