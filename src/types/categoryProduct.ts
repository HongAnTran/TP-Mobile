enum CategoryProductStatus {
  DRAFT,
  SHOW
}


interface CategoryProduct {
  id: number
  title: string
  description: string | null
  image: string
  slug: string
  status: CategoryProductStatus
}

export type { CategoryProduct }
export {
  CategoryProductStatus
}
