"use client"
import React, { useEffect, useState } from 'react'
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
import { TypographyP } from '../ui/typography'
import MutipleCheckbox from '../common/MutipleCheckbox'
import { CategoryProduct } from '@/types/categoryProduct'
import CategoryServiceApi from '@/services/categoryService'
import { objectToSearchParams, objectToSearchParamsValue } from '@/utils'
import { usePathname , useRouter } from 'next/navigation'
interface ValueFiter {
  color?: string;
  price: number[];
  capacity: string[]
  ram: string[]
  categories?: CategoryProduct["slug"][]
}
export default function FilterProduct({ defaultValue , searchParams }: { defaultValue?: ValueFiter , searchParams?: any  }) {
  const router = useRouter()
  const pathname = usePathname();
  const [categories , setCategories] = useState<CategoryProduct[]>([])

  const [valueFiter, setValueFilter] = useState<ValueFiter>({
    color: defaultValue?.color,
    price: defaultValue?.price || [0, 100],
    capacity: defaultValue?.capacity || [],
    ram: defaultValue?.ram || [],
    categories: [],
  })

  function onChageValueFilter(key: keyof ValueFiter, data: any) {
    const value = { ...valueFiter }
    value[key] = data
    setValueFilter(value)
    const valueSearch = objectToSearchParams(objectToSearchParamsValue({ ...searchParams, ...value }))
    const query = valueSearch ? `?${valueSearch}` : "";
    window.history.pushState(null, '', query)
    router.push(pathname + query)
  }




  useEffect(() => {
    (async () => {
      try {
        const categories = await CategoryServiceApi.getList()
        setCategories(categories)
      } catch (error) {

      }
    })()

  }, [])

  const filters = [
    {
      title: "Loại sản phẩm",
      content:
        <MutipleCheckbox onChange={(datas) => onChageValueFilter("categories", datas)} items={categories.map((item)=>({value : item.slug , label : item.title}))} defaultValue={valueFiter.categories} />
    },
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
      content: <div>
        <Range defaultValue={valueFiter.price} step={1} onValueCommit={(value) => {
          onChageValueFilter("price", value)
        }}
        />
        <p className=' text-center'>Từ {valueFiter.price[0]} đến {valueFiter.price[1]}</p>
      </div>
    },
    {
      title: "Dung lượng",
      content: <>
        <MutipleCheckbox onChange={(datas) => onChageValueFilter("capacity", datas)} items={itemFilterDisk} defaultValue={valueFiter.capacity} />
      </>
    },
    // {
    //   title: "Ram",
    //   content: <MutipleCheckbox onChange={(datas) => onChageValueFilter("ram", datas)} items={itemFilterRam} defaultValue={valueFiter.ram} />

    // }
  ]
  return (
    <div>
      <TypographyP className=' font-bold  text-xl'>Bộ lọc</TypographyP>
      <Accordion type="multiple" defaultValue={[]}  >
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
