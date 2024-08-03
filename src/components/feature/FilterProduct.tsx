"use client"
import React, { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Range } from '@/components/ui/slider'
import { TypographyP } from '../ui/typography'
import MutipleCheckbox from '../common/MutipleCheckbox'
import { objectToSearchParams, objectToSearchParamsValue } from '@/utils'
import { usePathname, useRouter } from 'next/navigation'
import PriceText from '../common/PriceText'
import AttributeServiceClient from '@/servicesClient/AttributeService'
import { ValueFiter } from '@/types/common'
import { Skeleton } from '../ui/skeleton'
import CategoryServiceClient from '@/servicesClient/CategoryService'

export default function FilterProduct({ defaultValue, searchParams, isUseCategory }: { defaultValue?: ValueFiter, searchParams?: any, isUseCategory?: boolean }) {
  const router = useRouter()
  const pathname = usePathname();

  const ONE_HUN = 1000000

  const { data: attributes, isLoading, isSuccess } = AttributeServiceClient.useList()
  const { data: categories } = CategoryServiceClient.useList()


  const [valueFiter, setValueFilter] = useState<ValueFiter>({
    color: defaultValue?.color ? defaultValue.color : [],
    price: defaultValue?.price || [0, 100],
    capacity: defaultValue?.capacity ? defaultValue.capacity : [],
    ram: defaultValue?.ram || [],
    categories: defaultValue?.categories || [],
    chargerType: defaultValue?.chargerType ? defaultValue.chargerType : []
  })

  function onChageValueFilter(key: keyof ValueFiter, data: any) {
    const value = { ...valueFiter, page: 1 }
    value[key] = data
    setValueFilter(value)
    const valueSearch = objectToSearchParams(objectToSearchParamsValue({ ...searchParams, ...value }))
    const query = valueSearch ? `?${valueSearch}` : "";
    window.history.pushState(null, '', query)
    router.push(pathname + query)
  }

  if (isLoading) {
    return <div>
      <TypographyP className=' font-bold  text-xl'>Bộ lọc</TypographyP>
      <Skeleton className=' w-full h-[200px]' />
    </div>
  }

  if (!isSuccess) return null


  const cateItem = isUseCategory ? [{
    value: "Loại sản phẩm",
    title: "Loại sản phẩm",
    content: categories && <MutipleCheckbox onChange={(datas) => onChageValueFilter("categories", datas)} items={categories.map((item) => ({ value: item.slug, label: item.title }))} defaultValue={valueFiter.categories} />
  }] : []

  const filterDynamic = attributes.map(attribute => {

    let com = <></>

    switch (attribute.id) {
      case 1:
        com = <FilterItem attributeId={attribute.id} defaultValue={valueFiter.capacity} onChageValueFilter={(values) => {
          onChageValueFilter("capacity", values)
        }} />
        break;
      case 2:
        com = <FilterItem attributeId={attribute.id} defaultValue={valueFiter.color} onChageValueFilter={(values) => {
          onChageValueFilter("color", values)
        }} />
        break;
      case 3:
        com = <FilterItem attributeId={attribute.id} defaultValue={valueFiter.chargerType} onChageValueFilter={(values) => {
          onChageValueFilter("chargerType", values)
        }} />
        break;
      default:
        break;
    }

    return {
      value: attribute.name,
      title: attribute.name,
      content: com

    }

  })

  const filters = [
    ...cateItem,
    ...filterDynamic,
    {
      value: "Mức giá",
      title: "Mức giá",
      content: <div className=' pt-2'>
        <Range defaultValue={valueFiter.price} step={1} onValueCommit={(value) => {
          onChageValueFilter("price", value)
        }}
        />
        <p className='mt-2 text-center'><PriceText price={valueFiter.price[0] * ONE_HUN} />-<PriceText price={valueFiter.price[1] * ONE_HUN} /></p>
      </div>
    }
  ]
  return (
    <div>
      <TypographyP className=' font-bold  text-xl'>Bộ lọc</TypographyP>
      <Accordion type="multiple" defaultValue={[]}  >
        {filters.map((item, index) => {
          return (
            <AccordionItem value={item.value} key={index} >
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


function FilterItem({ defaultValue, onChageValueFilter, attributeId }: { attributeId: number, defaultValue?: string[], onChageValueFilter: (values: string[]) => void }) {

  const { data, isSuccess, isLoading } = AttributeServiceClient.useListValue({ attribute_id: attributeId })

  if (isLoading) {
    return <p>loading...</p>
  }
  if (!isSuccess) {
    return null
  }

  return (
    <MutipleCheckbox
      onChange={(datas) => onChageValueFilter(datas)}
      items={data.map(item =>
      ({
        value: item.value, label: item.hex_color ?
          <p><span className=' w-3 h-3 border border-primary inline-block rounded-full' style={{ backgroundColor: item.hex_color || "" }}></span> <span> {item.value}</span></p>
          : <span>{item.value}</span>
      }))}
      defaultValue={defaultValue}

    />
  )
}