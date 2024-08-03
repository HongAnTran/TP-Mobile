"use client"
import { TypographyP, TypographySpan } from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import { AttributeStyle, AttributeValue } from '@/types/Attributestypes'
import { Product, ProductAttribute } from '@/types/Product.types'
import React, { useMemo } from 'react'
import TooltipUi from '../TooltipUi'

export default function ProductOptions({ product, optionsActive, onSelectOption }:
  { product: Product, optionsActive: number[], onSelectOption: (index: number, value: number) => void }) {



  return (
    <div className=' flex flex-col gap-4'>
      {
        product.attributes.map((option, index) => {
          return <div key={option.id} className=' flex items-center gap-4'>
            <TypographyP className=' font-bold min-w-[115px]'>
              {option.attribute.name}:
            </TypographyP>
            <div className=' flex gap-2 items-center  flex-wrap'>

              {option.attribute.style === AttributeStyle.RECTANGLE && <AttributeRectangle attributes={option.values} indexGroup={index} onSelectOption={onSelectOption} optionsActive={optionsActive} />}
              {option.attribute.style === AttributeStyle.COLOR && <AttributeColor attributes={option.values} indexGroup={index} onSelectOption={onSelectOption} optionsActive={optionsActive} />}


            </div>
          </div>
        })
      }
    </div>
  )

}

// export enum AttributeStyle {
//   IMAGE = "IMAGE",
//   COLOR = "COLOR",
//   CIRCLE = "CIRCLE",
//   RECTANGLE = "RECTANGLE",
//   RADIO = "RADIO"
// }
interface PropsAttributes {
  attributes: AttributeValue[], optionsActive: number[],
  onSelectOption: (index: number, id: number) => void, indexGroup: number
}

function AttributeRectangle({ attributes, optionsActive, onSelectOption, indexGroup }: PropsAttributes) {

  return (
    <>
      {attributes.map(data => {
        return (
          <div key={data.id} className={cn(' transition-all border border-gray-700 rounded w-fit px-[6px] cursor-pointer', {
            " border-red-500 text-red-500": optionsActive.includes(data.id)
          })
          }
            onClick={() => onSelectOption(indexGroup, data.id)}
          >
            <TypographySpan className=' text-sm'>{data.value}</TypographySpan>
          </div>
        )
      })}
    </>
  )
}

function AttributeColor({ attributes, optionsActive, onSelectOption, indexGroup }: PropsAttributes) {

  return (
    <>
      {attributes.map(data => {
        return (
          <TooltipUi key={data.id} title={data.value}>

            <div className={
              cn('  border  flex items-center justify-center rounded-full overflow-hidden   p-[2px] w-6 h-6  opacity-80 border-[hsla(0,0%,60%,.4)]   cursor-pointer', {
                "  border-red-500 border-2 opacity-100": optionsActive.includes(data.id)
              })
            }
              onClick={() => onSelectOption(indexGroup, data.id)}
            >
              <p className={cn(' transition-all   w-4 h-4  rounded-full    ')
              }
                style={{
                  backgroundColor: data.hex_color || "#ffffff"
                }}
              >
              </p>
            </div>
          </TooltipUi>
        )
      })}
    </>
  )
}