import { CategoryArtice } from "./categoryArtice";
import { ResList } from "./Common.type";

enum ArticleStatus {
  DRAFT,
  SHOW,
}
interface Article {
  id: number; 
  title: string;
  slug: string;
  content: string; 
  author_id: number; 
  author : null
  category_id: number; 
  category: CategoryArtice
  created_at: string;
  updated_at: string | null; 
  description: string | null;
  thumnal_url: string
  status: ArticleStatus
  meta_data: {
    meta_title: string | null
    meta_description: string | null
    meta_keywords: string | null
  } | null
}
type Articles = ResList<Article>


interface ArticlesParams {
  status?: ArticleStatus
  categoryId?: number
  ids?: string
  keyword?: string
  page?: number,
  limit?: number
  sort_by?: keyof Article
  sort_type?: "desc" | "asc"
}

export type { Article, Articles , ArticlesParams }
export { ArticleStatus }