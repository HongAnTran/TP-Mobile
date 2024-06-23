import { TypographyH1 } from '@/components/ui/typography'
import { Article } from '@/types/article'
import React from 'react'

export default function ArticeDetail({ artice }: { artice: Article }) {
  return (
    <div>
      <TypographyH1 className=' lg:text-xl'>
        {artice.title}
      </TypographyH1>
      <p>{artice.category.title}</p>
      <div className=' mt'>
        <div dangerouslySetInnerHTML={{ __html: artice.content }}>

        </div>
      </div>
    </div>
  )
}
