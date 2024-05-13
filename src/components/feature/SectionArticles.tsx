

import React from 'react'
import { TypographyH3 } from '../ui/typography'
import Link from "@/components/common/Link";

import { Button } from '../ui/button'
import { Article } from '@/types/article'
import ArticleCard from '../common/ArticleCard'
import routes from '@/routes'
import json from "@/data/article.json"

export default function SectionArticles() {
  const articles: Article[] = JSON.parse(JSON.stringify(json))


  if (!articles.length) {
    return null
  }
  return (
    <section className=' flex flex-col gap-4'>
      <TypographyH3 className=' text-center uppercase text-primary'>Tin tức</TypographyH3>
      <div className="grid   grid-cols-5 gap-4">
        <div className=' col-span-3'>
          <ArticleCard article={articles[0]} />

        </div>
        <div className=' col-span-2'>
          {articles.slice(0,3).map((article) => (
            
            <ArticleCard article={article} classNameImage=' h-[100px]' key={article.id} />

          ))}
        </div>

        {/* <div className="row-span-2 col-span-2 ...">03</div> */}
      </div>

      <div className=' flex gap-4 justify-center mt-2'>
        <Link href={routes.artice}>
          <Button className=' bg-primary text-white hover:scale-110 transition-all'>Xem Thêm</Button>
        </Link>
      </div>
    </section>
  )
}
