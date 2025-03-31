import { PaginationParams } from "./Common.type";

interface CategoryProductFilter extends PaginationParams<CategoryProduct> {}

interface CategoryProduct {
  id: number;
  title: string;
  description: string | null;
  image: string;
  slug: string;
  published: boolean;
  meta_data: object;
}

export type { CategoryProduct, CategoryProductFilter };
