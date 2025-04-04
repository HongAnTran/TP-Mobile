import Link from '@/components/common/Link'
import routes from '@/routes'
import { Article } from '@/types/Article.type'
import Image from 'next/image'
import React from 'react'

export default function ArticleCard({
    article 
} : {
    article : Article
}) {
  return (
    <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs relative">
  <Image
    alt=""
    src={article.thumnal_url}
    className=" h-72 w-full object-cover"
    width={500}
    height={500}
  />

  <div className="p-4 sm:p-6">
    <Link href={`${routes.artice}/${article.slug}`}>
      <h3 className="text-lg font-medium text-gray-900 line-clamp-2">
       {article.title}
      </h3>
    </Link>

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
  {article.description}
    </p>

    <Link href={`${routes.artice}/${article.slug}`} className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
     Xem thêm
      <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        &rarr;
      </span>
    </Link>
  </div>
  <span
    className="absolute text-sm -top-px -right-px rounded-tr-lg rounded-bl-3xl  bg-secondary px-4 py-2 font-medium  text-primary uppercase"
  >
    {article.category.title}
  </span>
</article>
  )
}
