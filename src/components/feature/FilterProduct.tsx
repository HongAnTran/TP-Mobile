"use client"
import React, { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Range } from '@/components/ui/slider'
import { TypographyP } from '../ui/typography'
import MutipleCheckbox from '../common/MutipleCheckbox'
import { objectToSearchParams } from '@/utils'
import { usePathname, useRouter } from 'next/navigation'
import PriceText from '../common/PriceText'
import AttributeServiceClient from '@/servicesClient/AttributeService'
import { ValueFiter } from '@/types/common.type'
import { Skeleton } from '../ui/skeleton'
import CategoryServiceClient from '@/servicesClient/CategoryService'
import { Button } from '../ui/button'
import FilterListIcon from '@mui/icons-material/FilterList';
import SETTINGS from '@/consts/config'

export default function FilterProduct({ defaultValue, searchParams, isUseCategory }: { defaultValue?: ValueFiter, searchParams?: any, isUseCategory?: boolean }) {
  const router = useRouter()
  const pathname = usePathname();

  const [open, setOpen] = useState(false)

  const { data: attributes, isLoading, isSuccess } = AttributeServiceClient.useList()
  const { data: categories } = CategoryServiceClient.useList()


  const [valueFiter, setValueFilter] = useState<ValueFiter>({
    price: defaultValue?.price || [0, 100],
    categories: defaultValue?.categories || [],
    page: searchParams?.page
  })

  function onChageValueFilter(key: any, data: any) {
    const value: ValueFiter = { ...valueFiter, page: 1 }
    value[key] = data
    setValueFilter(value)
    const valueSearch = objectToSearchParams({ ...searchParams, ...value })
    const query = valueSearch ? `?${valueSearch}` : "";
    window.history.pushState(null, '', query)
    router.push(pathname + query)
  }

  if (isLoading) {
    return <div>
      <TypographyP className=' font-bold lg:block hidden text-xl'>Bộ lọc</TypographyP>
      <Skeleton className=' w-full h-10 md:h-[200px]' />
    </div>
  }

  if (!isSuccess) return null


  const cateItem = isUseCategory ? [{
    value: "Loại sản phẩm",
    title: "Loại sản phẩm",
    content: categories?.datas && <MutipleCheckbox onChange={(datas) => onChageValueFilter("categories", datas)} items={categories.datas.map((item) => ({ value: item.slug, label: item.title }))} defaultValue={valueFiter.categories} />
  }] : []

  const filterDynamic = attributes.map(attribute => {
    return {
      value: attribute.name,
      title: attribute.name,
      content: <FilterItem attributeId={attribute.id} defaultValue={valueFiter[attribute.key] as string[]} onChageValueFilter={(values) => {
        onChageValueFilter(attribute.key, values)
      }} />

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
        <p className='mt-2 text-center'><PriceText price={valueFiter.price[0] * SETTINGS.ONE_HUN} />-<PriceText price={valueFiter.price[1] * SETTINGS.ONE_HUN} /></p>
      </div>
    }
  ]
  return (
    <div>
      <TypographyP className=' font-bold lg:block hidden text-xl'>Bộ lọc</TypographyP>
      <div className=' flex justify-end gap-4 lg:hidden'>
        <Button onClick={() => setOpen(true)}><FilterListIcon className=' mr-2' />Lọc</Button>
      </div>
      <div className=' lg:block hidden'>
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


      <Sheet open={open} onOpenChange={() => setOpen(false)} >
        <SheetContent side="right" className=' overflow-y-auto' >
          <SheetHeader>
            <SheetTitle>Lọc sản phẩm</SheetTitle>
            <Accordion type="multiple" defaultValue={[filters[0].value]}  >
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
          </SheetHeader>
        </SheetContent>
      </Sheet>

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