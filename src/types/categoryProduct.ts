import { PaginationParams } from "./Common.type";

interface CategoryProductFilter extends PaginationParams<CategoryProduct> {}

interface CategoryProduct {
  id: number;
  title: string;
  description: string | null;
  image: string;
  slug: string;
  published: boolean;
  meta_data: {
    meta_title?: string;
    meta_description?: string; 
    meta_keywords?: string;
    meta_image?: string;
  } | null; 
}

export type { CategoryProduct, CategoryProductFilter };
