import { TypographyP } from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import { Product, ProductOption, ProductVariant } from '@/types/product'
import React from 'react'

export default function ProductOptions({ product, optionsActive, onSelectOption }:
  { product: Product, optionsActive: string[], onSelectOption: (option: ProductOption, value: string) => void }) {


  return (
    <div className=' flex flex-col gap-4'>
      {
        product.options.map(option => {
          return <div key={option.name}>
            <TypographyP className=' font-bold'>
              {option.name}
            </TypographyP>
            <div className=' flex gap-2 items-center mt-2'>
              {option.values.map(data => {
                return (
                  <div key={data} className={cn('  border border-gray-700 rounded w-fit px-1 cursor-pointer', {
                    " border-red-500 text-red-500": optionsActive.includes(data)
                  })
                  }
                    onClick={() => onSelectOption(option, data)}
                  >
                    {data}
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
