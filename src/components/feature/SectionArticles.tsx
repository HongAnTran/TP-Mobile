
import React from 'react'
import { TypographyH3 } from '../ui/typography'
import Link from "@/components/common/Link";
import { Button } from '../ui/button'
import { Article } from '@/types/article'
import routes from '@/routes'
import json from "@/data/article.json"
import ArticleCardList from '../common/ArticleCardList';

export default function SectionArticles() {
  const articles: Article[] = JSON.parse(JSON.stringify(json))


  if (!articles.length) {
    return null
  }
  return (
    <section className=' flex flex-col gap-4'>
      <TypographyH3 className=' text-center uppercase text-primary'>Tin tức</TypographyH3>
      <div className="grid  grid-cols-1 md:grid-cols-2 gap-6">
        {articles.slice(0,4).map((article) => (
          <ArticleCardList  article={article}  key={article.id}  aspect="landscape" />
        ))}
      </div>

      <div className=' flex gap-4 justify-center mt-2'>
        <Link href={routes.artice}>
          <Button className=' bg-primary text-white hover:scale-110 transition-all'>Xem Thêm</Button>
        </Link>
      </div>
    </section>
  )
}
