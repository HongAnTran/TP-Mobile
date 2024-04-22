enum CategoryStatus {
  HIDDEN,
  SHOW,
  DRAFT,
}

enum CategoryType {
  PRODUCT,
  ARTICLE
}

interface Category {
  id: number
  title: string
  description: string | null
  image: string
  slug: string
  status: CategoryStatus
  type: CategoryType
}

export type { Category }
export {
  CategoryType,
  CategoryStatus
}
