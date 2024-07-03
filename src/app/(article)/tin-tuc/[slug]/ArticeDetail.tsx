import Link from '@/components/common/Link'
import { TypographyH1 } from '@/components/ui/typography'
import routes from '@/routes'
import { Article } from '@/types/article'
import { formatDate } from '@/utils'
import React from 'react'

export default function ArticeDetail({ artice }: { artice: Article }) {
  return (
    <div>
      <TypographyH1 className=' lg:text-4xl'>
        {artice.title}
      </TypographyH1>
      <div className=' flex justify-between '>

        <p className=' my-2  '>Danh mục: <Link className=' font-bold' href={`${routes.articeCategory}/${artice.category.slug}`} >{artice.category.title} </Link></p>
        <p className=' my-2  '>Đăng vào: {formatDate(artice.created_at)}</p>
      </div>

      <div className=' mt-4'>
        <div dangerouslySetInnerHTML={{ __html: artice.content }}>
        </div>
      </div>
    </div>
  )
}
