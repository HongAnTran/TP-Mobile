"use client"
import { TypographyP, TypographySpan } from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import { Product } from '@/types/Product.types'
import React from 'react'

export default function ProductOptions({ product, optionsActive, onSelectOption }:
  { product: Product, optionsActive: number[], onSelectOption: (index: number, value: number) => void }) {

  return (
    <div className=' flex flex-col gap-4'>
      {
        product.attributes.map((option  , index)=> {
          return <div key={option.id} className=' flex items-center gap-4'>
            <TypographyP className=' font-bold min-w-[115px]'>
              {option.attribute.name}:
            </TypographyP>
            <div className=' flex gap-2 items-center  flex-wrap'>
              {option.values.map(data => {
                return (
                  <div key={data.id} className={cn(' transition-all border border-gray-700 rounded w-fit px-[6px] cursor-pointer', {
                    " border-red-500 text-red-500": optionsActive.includes(data.id)
                  })
                  }
                    onClick={() => onSelectOption(index, data.id)}
                  >
                    <TypographySpan className=' text-sm'>{data.value}</TypographySpan>
                  </div>
                )
              })}
            </div>
          </div>
        })
      }
    </div>
  )

}
