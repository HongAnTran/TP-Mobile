"use client"
import React, { useEffect, useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { itemFilterColor, itemFilterDisk, itemFilterRam } from '@/data/filter'
import { Range } from '@/components/ui/slider'
import { TypographyP } from '../ui/typography'
import MutipleCheckbox from '../common/MutipleCheckbox'
import { CategoryProduct } from '@/types/categoryProduct'
import CategoryServiceApi from '@/services/categoryService'
import { objectToSearchParams, objectToSearchParamsValue } from '@/utils'
import { usePathname, useRouter } from 'next/navigation'
import PriceText from '../common/PriceText'
interface ValueFiter {
  color?: string[];
  price: number[];
  capacity?: string[]
  ram?: string[]
  categories?: CategoryProduct["slug"][]
}
export default function FilterProduct({ defaultValue, searchParams, isUseCategory }: { defaultValue?: ValueFiter, searchParams?: any, isUseCategory?: boolean }) {
  const router = useRouter()
  const pathname = usePathname();
  const [categories, setCategories] = useState<CategoryProduct[]>([])
  const ONE_HUN = 1000000
  const [valueFiter, setValueFilter] = useState<ValueFiter>({
    color: defaultValue?.color || [],
    price: defaultValue?.price || [0, 100],
    capacity: defaultValue?.capacity || [],
    ram: defaultValue?.ram || [],
    categories: defaultValue?.categories || [],
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
  useEffect(() => {
    if (!isUseCategory) return
    (async () => {
      try {
        const categories = await CategoryServiceApi.getListClient()
        setCategories(categories)
      } catch (error) {

      }
    })()

  }, [isUseCategory])

  const cateItem = isUseCategory ? [{
    value : "Loại sản phẩm",

    title: "Loại sản phẩm",
    content:
      <MutipleCheckbox onChange={(datas) => onChageValueFilter("categories", datas)} items={categories.map((item) => ({ value: item.slug, label: item.title }))} defaultValue={valueFiter.categories} />
  }] : []

  const filters = [
    ...cateItem,
    {
      value : "Dung lượng",

      title: "Dung lượng",
      content: <>
        <MutipleCheckbox onChange={(datas) => onChageValueFilter("capacity", datas)} items={itemFilterDisk} defaultValue={valueFiter.capacity} />
      </>
    },
    {
      value : "Mức giá",

      title: "Mức giá",
      content: <div className=' pt-2'>
        <Range defaultValue={valueFiter.price} step={1} onValueCommit={(value) => {
          onChageValueFilter("price", value)
        }}
        />
        <p className='mt-2 text-center'><PriceText price={valueFiter.price[0] * ONE_HUN} />-<PriceText  price={valueFiter.price[1] * ONE_HUN}/></p>
      </div>
    },
    {
      value : "Màu sắc",
      title: "Màu sắc",
      content: <MutipleCheckbox onChange={(datas) => onChageValueFilter("color", datas)} items={itemFilterColor} defaultValue={valueFiter.color}
      />


    },
 

    // {
    //   title: "Ram",
    //   content: <MutipleCheckbox onChange={(datas) => onChageValueFilter("ram", datas)} items={itemFilterRam} defaultValue={valueFiter.ram} />

    // }
  ]
  return (
    <div>
      <TypographyP className=' font-bold  text-xl'>Bộ lọc</TypographyP>
      <Accordion type="multiple" defaultValue={filters.map(item=>item.value)}  >
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
