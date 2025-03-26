import { CategoryArtice } from "./categoryArtice";
import { PaginationParams, ResList } from "./Common.type";

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
  author: any;
  category_id: number;
  category: CategoryArtice;
  created_at: string;
  updated_at: string | null;
  description: string | null;
  thumnal_url: string;
  status: ArticleStatus;
  meta_data: {
    meta_title: string | null;
    meta_description: string | null;
    meta_keywords: string | null;
  } | null;
}
type Articles = ResList<Article>;

interface ArticlesParams extends PaginationParams<Article> {
  status?: ArticleStatus;
  categoryId?: number;
  ids?: string;
  keyword?: string;
}
export type { Article, Articles, ArticlesParams };
export { ArticleStatus };
