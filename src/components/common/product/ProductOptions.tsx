"use client"
import { TypographyP, TypographySpan } from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import { AttributeStyle, AttributeValue } from '@/types/Attributes.type'
import { Product, ProductAttribute } from '@/types/Product.types'
import React, { useMemo } from 'react'
import TooltipUi from '../TooltipUi'

export default function ProductOptions({ product, optionsActive, onSelectOption }:
  { product: Product, optionsActive: number[], onSelectOption: (index: number, id: number) => void }) {

    const {variants} = product
    const attribute_values = useMemo(() => {
      const valueUnique : AttributeValue[] = []
       variants.flatMap(variant => {
        return variant.attribute_values
      }).forEach(value => {
        const isExist = valueUnique.findIndex(val => val.id === value.id)
        if (isExist === -1) {
          valueUnique.push(value)
        }
      })
      return valueUnique
    },[variants])
  return (
    <div className=' flex flex-col gap-6'>
      {
        product.attributes.map((option, index) => {
          const values = attribute_values.filter(value => value.attribute_id === option.attribute.id)
          return <div key={option.id} className=' flex flex-col gap-2'>
            <TypographyP className=' font-bold min-w-[90px] lg:min-w-[100px]'>
              {option.attribute.name}:
            </TypographyP>
            <div className=' flex gap-3 md:gap-4 items-center  flex-wrap'>
              {option.attribute.style === AttributeStyle.RECTANGLE && <AttributeRectangle attributes={values} indexGroup={index} onSelectOption={onSelectOption} optionsActive={optionsActive} />}
              {option.attribute.style === AttributeStyle.COLOR && <AttributeColor attributes={values} indexGroup={index} onSelectOption={onSelectOption} optionsActive={optionsActive} />}
            </div>
          </div>
        })
      }
    </div>
  )

}


interface PropsAttributes {
  attributes: AttributeValue[], optionsActive: number[],
  onSelectOption: (index: number, id: number) => void, indexGroup: number
}

function AttributeRectangle({ attributes, optionsActive, onSelectOption, indexGroup }: PropsAttributes) {

  return (
    <>
      {attributes.map(data => {
        return (
          <div key={data.id} className={cn(' transition-all border border-gray-700   rounded-lg w-fit px-[6px] lg:px-[8px] py-1 cursor-pointer', {
            "  bg-primary text-secondary border-secondary ": optionsActive.includes(data.id)
          })
          }
            onClick={() => onSelectOption(indexGroup, data.id)}
          >
            <TypographySpan className=' text-inherit text-sm font-semibold'>{data.value}</TypographySpan>
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

            <div
              onClick={() => onSelectOption(indexGroup, data.id)}
              className={cn(' flex items-center gap-1 border   rounded-lg p-1 ', {
                "  bg-primary text-secondary border-secondary ": optionsActive.includes(data.id)
              })}>
              <div className={
                cn('  border bg-white flex items-center justify-center rounded-full overflow-hidden border-[hsla(0,0%,60%,.4)]   p-[2px] w-6 h-6')
              }

              >
                <p className={cn(' transition-all   w-4 h-4  rounded-full    ')
                }
                  style={{
                    backgroundColor: data.hex_color || "#ffffff"
                  }}
                >
                </p>
              </div>
              <span className=' text-inherit font-semibold'>{data.value}</span>
            </div>
          </TooltipUi>
        )
      })}
    </>
  )
}