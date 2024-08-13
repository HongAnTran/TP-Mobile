
import React from 'react'
import { TypographyH3 } from '../ui/typography'
import Link from "@/components/common/Link";
import { Button } from '../ui/button'
import { Article } from '@/types/article'
import routes from '@/routes'
import ArticleCardList from '../common/ArticleCardList';
import ArticeServiceApi from '@/services/articeService';

export default async function SectionArticles() {
  const {datas : articles} = await ArticeServiceApi.getList({take:4})



  if (!articles) {
    return null
  }
  return (
    <section className=' flex flex-col gap-4'>
      <TypographyH3 className=' text-center uppercase text-primary'>Tin tức</TypographyH3>
      <div className="grid  grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => (
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
