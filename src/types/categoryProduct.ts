enum CategoryProductStatus {
  DRAFT,
  SHOW
}



interface CategoryProductFilter{
  take ? :number
  skip ? : number

}

interface CategoryProduct {
  id: number
  title: string
  description: string | null
  image: string
  slug: string
  status: CategoryProductStatus
}

export type { CategoryProduct , CategoryProductFilter }
export {
  CategoryProductStatus
}
