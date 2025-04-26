import React from 'react'
import ArticeDetail from './ArticeDetail'
import ArticeServiceApi from '@/services/articeService'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import routes from '@/routes'
import { Metadata } from 'next'
import { Article } from '@/types/Article.type'
export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  try {
    const slug = params.slug
    const artice = await ArticeServiceApi.getDetail(slug)
    const { meta_data } = artice
    const titleShow = meta_data?.meta_title || artice.title
    const desShow = meta_data?.meta_description || artice.description || undefined
    const keywords = meta_data?.meta_keywords || titleShow || undefined
    const DOMAIN = process.env.DOMAIN
    const imageUrl = artice.thumnal_url
    return {
      title: titleShow,
      description: desShow,
      keywords: keywords,
      alternates: {
        canonical: `${DOMAIN}${routes.artice}/${artice.slug}`
      },
      openGraph: {
        title: titleShow,
        description: desShow,
        images: [{ url: imageUrl, width: 1200, height: 630, alt: titleShow, }],
        url: `${DOMAIN}/${routes.artice}/${artice.slug}`,
        siteName: DOMAIN,
        type: "article"
      },
      twitter: {
        card: "summary_large_image", // Thêm Twitter Card
        title: titleShow,
        description: desShow,
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
          },
        ],
      },
      category: artice.category.title,
    }
  } catch (error) {
    notFound()
  }
}

function generateArticleJsonLD(article: Article): Record<string, any> {
  const DOMAIN = process.env.DOMAIN
  const titleShow = article.meta_data?.meta_title || article.title;
  const desShow = article.meta_data?.meta_description || article.description || undefined;
  const imageUrl = article.thumnal_url;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: titleShow,
    description: desShow,
    image: imageUrl,
    datePublished: article.created_at || undefined,
    dateModified: article.updated_at || undefined,
    author: article.author
      ? {
        "@type": "Person",
        name: article.author.name,
      }
      : {
        "@type": "Organization",
        name: "TP Mobile", // Fallback nếu không có author
      },
    publisher: {
      "@type": "Organization",
      name: "TP Mobile",
      logo: {
        "@type": "ImageObject",
        url: "https://example.com/logo.png", // Thay bằng URL logo thực tế
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${DOMAIN}${routes.artice}/${article.slug}`,
    },
    keywords: article.meta_data?.meta_keywords || undefined,
    articleSection: article.category.title,
  };
}
export default async function page({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const artice = await ArticeServiceApi.getDetail(slug)
  const jsonLd = generateArticleJsonLD(artice);
  if (!artice) {
    notFound()
  }
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className=' mb-8'>
        <Breadcrumbs breadcrumbsList={[{ label: "Tin tức", slug: routes.artice }, { label: artice.title, isActive: true }]} />
      </div>
      <ArticeDetail artice={artice} />
    </>
  )
}
