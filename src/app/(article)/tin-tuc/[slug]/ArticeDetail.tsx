import BoxInnerHtml from '@/components/common/BoxInnerHtml'
import Link from '@/components/common/Link'
import { TypographyH1 } from '@/components/ui/typography'
import routes from '@/routes'
import { Article } from '@/types/Article.type'
import { formatDate } from '@/utils'
import React from 'react'
import "../../style/style.css"
export default function ArticeDetail({ artice }: { artice: Article }) {
  return (
    <div >
      <TypographyH1 className=' lg:text-2xl'>
        {artice.title}
      </TypographyH1>
      <div className=' flex justify-between '>

        <p className=' my-2  '><b>Danh mục: </b><Link className=' font-bold text-blue-500' href={`${routes.articeCategory}/${artice.category.slug}`} >{artice.category.title} </Link></p>
        <p className=' my-2  '><b>Đăng vào: </b> {formatDate(artice.created_at)}</p>
      </div>

      <div className=' mt-4'>
        <BoxInnerHtml html={artice.content} className=' bg-white p-2 rounded-lg shadow-lg'>

        </BoxInnerHtml>

      </div>
    </div>
  )
}
