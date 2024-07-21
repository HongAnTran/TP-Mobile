

interface CategoryArtice {
  id: number
  title: string
  description: string | null
  image: string
  slug: string
  published: boolean
  meta_data : object
}

export type { CategoryArtice }
