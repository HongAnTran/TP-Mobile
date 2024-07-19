import { CategoryArtice } from "./categoryArtice";
import { ResList } from "./common";

enum ArticleStatus {
  DRAFT,
  SHOW,
}
interface Article {
  id: number; // ID của bài viết
  title: string; // Tiêu đề của bài viết
  slug: string;
  content: string; // Nội dung của bài viết
  authorId: number; // ID của tác giả (khóa ngoại)
  category_id: number; // ID của danh mục bài viết (khóa ngoại)
  category: CategoryArtice
  created_at: string; // Ngày và giờ tạo bài viết
  updated_at: string; // Ngày và giờ cập nhật gần đây nhất
  published_date: string;
  description: string;
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


export type { Article, Articles }
export { ArticleStatus }