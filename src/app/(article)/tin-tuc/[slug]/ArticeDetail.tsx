import { TypographyH1 } from '@/components/ui/typography'
import { Article } from '@/types/article'
import React from 'react'

export default function ArticeDetail({ artice }: { artice: Article }) {
  return (
    <div>
      <TypographyH1>
        {artice.title}
      </TypographyH1>
    </div>
  )
}
