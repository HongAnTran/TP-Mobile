import { Feedback } from "./feedback";


export interface PageStructure {
  zones: Zone[];
  metadata?: {
    title: string,
    description: string,
    keywords: string
  }
}

export type CardType = 'default' | 'mini'
export interface BannerZone {
  zone: 'BANNERS';
  isLazy?: boolean
  active:boolean
  data: ZoneData<BannerRow>;
}
export interface CategoryZone {
  zone: 'NAVIGATION';
  isLazy?: boolean
  active:boolean
  data: ZoneData<BannerRow>;
}

export interface ProductZone {
  zone: 'PRODUCTS';
  isLazy?: boolean
  active:boolean
  data: ZoneData<ProductRow>;
}

export interface NavigationZone {
  zone: 'NAVIGATION';
  isLazy?: boolean
  active:boolean
  data: ZoneData<NavigationRow>; 
}
export interface BenefitsZone {
  zone: 'BENEFITS';
  isLazy?: boolean
  active:boolean
  data: ZoneData<BenefitsRow>; 
}
export interface CardsZone {
  zone: 'CARDS';
  isLazy?: boolean
  active:boolean
  data: ZoneData<CardsRow>; 
}
export interface FeedbackZone {
  zone: 'FEEDBACKS';
  isLazy?: boolean
  active:boolean
  data: ZoneData<Feedback>;
}

export interface ArticleZone {
  zone: 'ARTICLES';
  isLazy?: boolean
  active:boolean
  data: ZoneData<ProductRow>; 
}
export interface ColSettings {
  xs?: number;  // Extra small devices (<640px)
  sm?: number;  // Small devices (≥640px)
  md?: number;  // Medium devices (≥768px)
  lg?: number;  // Large devices (≥1024px)
  xl?: number;  // Extra large devices (≥1280px)
  xxl?: number; // Extra extra large devices (≥1536px)
}


export interface Tag {
  name: string;
  link: string;
}

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
export interface NavigationRow {
  title?: string;
  link: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }
}
export interface BenefitsRow {
  description: string;
  title: string;
  icon: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }
}

export interface CardsRow {
  description?: string;
  title: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }
  link ?: string;
}

export type ProductRow = number



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

export type Zone = BannerZone | ProductZone | CategoryZone | FeedbackZone | ArticleZone | NavigationZone | BenefitsZone | CardsZone


