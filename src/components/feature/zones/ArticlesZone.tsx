
import React from 'react'
import { TypographyH3 } from '../../ui/typography'
import Link from "@/components/common/Link";
import { Button } from '../../ui/button'
import { Article } from '@/types/Article.type'
import routes from '@/routes'
import ArticleCardList from '../../common/article/ArticleCardList';
import ArticeServiceApi from '@/services/articeService';
import { ArticleZone } from '@/types/Structure.type';
import { generateGridClasses, sortByRows } from '@/utils/helper';
import { cn } from '@/lib/utils';

export default async function ArticlesZone({ data }: Pick<ArticleZone, "data">) {
  const { title, col, rows, type, button, tags, typeCard } = data
  const { datas: articles } = await ArticeServiceApi.getList({ ids: rows.join(",") })

  if (!articles) {
    return null
  }
  const articlesSorted = sortByRows(articles,"id",rows)
  const gridClasses = generateGridClasses(col, "grid gap-6");
  
  return (
    <section className=' flex flex-col gap-4'>
      <TypographyH3 className=' text-center uppercase text-primary'>{title}</TypographyH3>
      <div className={cn(gridClasses)}>
        {articlesSorted.map((article) => (
          <ArticleCardList article={article} key={article.id} aspect="landscape" />
        ))}
      </div>
      {button ? <div className=' flex gap-4 justify-center mt-2'>
        <Link href={button.link || routes.artice}>
          <Button className=' bg-primary text-white hover:scale-110 transition-all'>{button.label}</Button>
        </Link>
      </div> : null}
    </section>
  )
}
