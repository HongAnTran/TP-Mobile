"use client"
import React, { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { itemFilterColor, itemFilterDisk, itemFilterRam } from '@/data/filter'
import { Range } from '@/components/ui/slider'
import PriceText from '@/components/common/PriceText'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { objectToSearchParams, objectToSearchParamsValue } from '@/utils'
import MutipleCheckbox from '@/components/common/MutipleCheckbox'
import { TypographyP } from '@/components/ui/typography'
interface ValueFiter {
  color: string;
  price: number[];
  disk: string[]
  ram: string[]
}



export default function FilterProduct() {

  const ONE_HUN = 1000000
  const router = useRouter()
  const pathname = usePathname();
  const searchParams = useSearchParams();


  const [valueFiter, setValueFilter] = useState<ValueFiter>({
    color: itemFilterColor[0].value,
    price: [0, 100],
    disk: [],
    ram: [],
  })

  function onChageValueFilter(key: keyof ValueFiter, data: any) {
    const value = { ...valueFiter }
    value[key] = data
    setValueFilter(value)
    const valueSearch = objectToSearchParams(objectToSearchParamsValue(value))
    const query = valueSearch ? `?${valueSearch}` : "";
    window.history.pushState(null, '', query)
    router.push(pathname + query)
  }


  const filters = [

    {
      title: "Màu sắc",
      content: <RadioGroup value={valueFiter.color}
        onValueChange={(data) => onChageValueFilter("color", data)}
      >
        {itemFilterColor.map(fil => {
          return (<div className="flex items-center space-x-2" key={fil.value}>
            <RadioGroupItem value={fil.value} id={fil.value}
            />
            <Label className=' cursor-pointer' htmlFor={fil.value}>{fil.label}</Label>
          </div>)

        })
        }
      </RadioGroup>

    },
    {
      title: "Mức giá",
      content: <div className=' flex flex-col gap-2'>
        <Range defaultValue={valueFiter.price} step={0.1} onValueCommit={(value) => {
          onChageValueFilter("price", value)
        }}
        />
        <p className=' text-center '>Từ <PriceText className='text-xs' price={valueFiter.price[0] * ONE_HUN} /> đến <PriceText className='text-xs' price={valueFiter.price[1] * ONE_HUN} /></p>
      </div>
    },
    {
      title: "Dung lượng",
      content: <>
        <MutipleCheckbox onChange={(datas) => onChageValueFilter("disk", datas)} items={itemFilterDisk} defaultValue={valueFiter.disk} />
      </>
    },
    {
      title: "Ram",
      content: <MutipleCheckbox onChange={(datas) => onChageValueFilter("ram", datas)} items={itemFilterRam} defaultValue={valueFiter.ram} />

    }
  ]
  return (
    <div>
      <TypographyP className=' font-bold  text-xl'>Bộ lọc</TypographyP>
      <Accordion type="multiple"  >
        {filters.map((item, index) => {
          return (
            <AccordionItem value={`fil-${index}`} key={index} >
              <AccordionTrigger className=' transition-colors'>{item.title}</AccordionTrigger>
              <AccordionContent>
                {item.content}
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    </div>
  )
}
