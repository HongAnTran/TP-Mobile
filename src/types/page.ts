enum PageStatus {
  DRAFT,
  PUBLISHED,
}



interface Page {
  id: number
  title: string
  slug: string
  content_html: string
  created_at: Date
  updated_at: Date | null
  status: PageStatus
  meta_data: {
    meta_title?: string
    meta_description?: string
    meta_keywords?: string
  } | null

}

export { PageStatus }
export type { Page }