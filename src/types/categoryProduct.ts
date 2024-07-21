


interface CategoryProductFilter {
  take?: number
  skip?: number
  orderBy?: keyof CategoryProduct
  orderType?: "desc" | "asc"
}

interface CategoryProduct {
  id: number
  title: string
  description: string | null
  image: string
  slug: string
  published: boolean
  meta_data : object
}

export type { CategoryProduct, CategoryProductFilter }
