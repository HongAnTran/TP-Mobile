import { CategoryArtice } from "./categoryArtice";
import { ResList } from "./common.type";

enum ArticleStatus {
  DRAFT,
  SHOW,
}
interface Article {
  id: number; // ID của bài viết
  title: string; // Tiêu đề của bài viết
  slug: string;
  content: string; // Nội dung của bài viết
  author_id: number; // ID của tác giả (khóa ngoại)
  author : null
  category_id: number; // ID của danh mục bài viết (khóa ngoại)
  category: CategoryArtice
  created_at: string; // Ngày và giờ tạo bài viết
  updated_at: string | null; // Ngày và giờ cập nhật gần đây nhất
  description: string | null;
  thumnal_url: string
  status: ArticleStatus
  // meta
  meta_data: {
    meta_title: string | null
    meta_description: string | null
    meta_keywords: string | null
  }
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