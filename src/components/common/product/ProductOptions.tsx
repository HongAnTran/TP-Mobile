"use client"
import { TypographyP, TypographySpan } from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import { Product, ProductOption } from '@/types/Product.types'
import React from 'react'

export default function ProductOptions({ product, optionsActive, onSelectOption }:
  { product: Product, optionsActive: string[], onSelectOption: (option: ProductOption, value: string) => void }) {


  return (
    <div className=' flex flex-col gap-4'>
      {
        product.options.map(option => {
          return <div key={option.name} className=' flex items-center gap-4'>
            <TypographyP className=' font-bold min-w-[115px]'>
              {option.name}:
            </TypographyP>
            <div className=' flex gap-2 items-center  flex-wrap'>
              {option.values.map(data => {
                return (
                  <div key={data} className={cn(' transition-all border border-gray-700 rounded w-fit px-[6px] cursor-pointer', {
                    " border-red-500 text-red-500": optionsActive.includes(data)
                  })
                  }
                    onClick={() => onSelectOption(option, data)}
                  >
                    <TypographySpan className=' text-sm'>{data}</TypographySpan>
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
