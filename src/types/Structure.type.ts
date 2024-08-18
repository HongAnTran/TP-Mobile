import { Feedback } from "./feedback";

// Định nghĩa các loại Card Type
export type CardType = 'default' | 'mini'

// Định nghĩa các kiểu dữ liệu riêng cho từng zone

export interface BannerZone {
  zone: 'BANNERS';
  isLazy?: boolean
  data: ZoneData<BannerRow>;
}

export interface ProductZone {
  zone: 'PRODUCTS';
  isLazy?: boolean

  data: ZoneData<ProductRow>;
}

export interface CategoryZone {
  zone: 'CATEGORIES';
  isLazy?: boolean
  data: ZoneData<ProductRow>; // Bạn có thể sử dụng ProductRow hoặc tạo một interface riêng
}

export interface FeedbackZone {
  zone: 'FEEDBACKS';
  isLazy?: boolean
  data: ZoneData<Feedback>;
}

export interface ArticleZone {
  zone: 'ARTICLES';
  isLazy?: boolean
  data: ZoneData<ProductRow>; // Bạn có thể sử dụng ProductRow hoặc tạo một interface riêng
}
export interface ColSettings {
  // Cấu hình số cột tại từng breakpoint giống như trong Tailwind
  xs?: number;  // Extra small devices (<640px)
  sm?: number;  // Small devices (≥640px)
  md?: number;  // Medium devices (≥768px)
  lg?: number;  // Large devices (≥1024px)
  xl?: number;  // Extra large devices (≥1280px)
  xxl?: number; // Extra extra large devices (≥1536px)
}


// Định nghĩa cấu trúc cho tag
export interface Tag {
  name: string;
  link: string;
}

// Định nghĩa cấu trúc cho các hàng trong Banners
export interface BannerRow {
  title?: string;
  link: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }
}

// Định nghĩa cấu trúc cho các hàng trong Products và Categories
export type ProductRow = number



// Định nghĩa cấu trúc cho phần dữ liệu chung
export interface ZoneData<T> {
  type: 'grid' | 'slider';
  typeCard?: CardType;
  title?: string;
  button?: {
    link?: string;
    label: string
  }
  tags?: Tag[];
  rows: T[];
  col: ColSettings;
}

export type Zone = BannerZone | ProductZone | CategoryZone | FeedbackZone | ArticleZone;
// Định nghĩa cấu trúc tổng thể cho toàn bộ JSON
export interface PageStructure {
  zones: Zone[];
  metadata?: {
    title: string,
    description: string,
    keywords: string
  }
}
// Định nghĩa các giá trị hợp lệ cho zone
// Tạo một union type để kết hợp tất cả các zone
