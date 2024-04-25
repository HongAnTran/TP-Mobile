import React from 'react'
import { notFound } from 'next/navigation'

import ProductsServiceApi from '@/services/productService'

import Breadcrumbs from '@/components/ui/Breadcrumbs'
import CategoryServiceApi from '@/services/categoryService'
import { TypographyH2, TypographyP } from '@/components/ui/typography'
import ProductCard from '@/components/common/product/ProductCard'
import routes from '@/routes'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const filters = [
  {
    title: "Màu sắc",
    content: "Yes. It adheres to the WAI-ARIA design pattern."
  }
]
export default async function page({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const caregory = await CategoryServiceApi.getDetail(slug)

  if (!caregory) {
    notFound()
  }
  const products = await ProductsServiceApi.getList({
    category_id: caregory.id,
    limit: 10
  })

  return (
    <div className=' my-8'>
      <div className=' container'>
        <Breadcrumbs breadcrumbsList={[
          {
            label: "Danh mục",
            slug: routes.category
          },
          {
            label: caregory.title,
            isActive: true
          }]} />

        <div className=' mt-16'>
          <TypographyH2 className=' text-center'>{caregory.title}</TypographyH2>
        </div>
        <div className=' mt-8'>
          <div className=' grid grid-cols-12 gap-8'>
            <div className='  col-span-3'>
              <TypographyP className=' font-bold  text-xl'>Bộ lọc</TypographyP>
              <Accordion type="multiple" >
                {filters.map((item, index) => {
                  return (
                    <AccordionItem value={`fil-${index}`} key={index}>
                      <AccordionTrigger className=' hover:text-blue-500 hover:font-bold  transition-colors'>{item.title}</AccordionTrigger>
                      <AccordionContent>
                        {item.content}
                      </AccordionContent>
                    </AccordionItem>
                  )
                })}


              </Accordion>
            </div>
            <div className=' col-span-9'>
              <div className=' grid grid-cols-4 gap-4'>
                {products.map((pro) => {
                  return <ProductCard key={pro.id} product={pro} />
                })}
              </div>
            </div>
          </div>

        </div>


      </div>
    </div>
  )
}
