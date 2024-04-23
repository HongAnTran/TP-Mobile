import React from 'react'
import { Product } from '@/types/product'
import { TypographyH2 } from '@/components/ui/typography'
import TabsComponent from '@/components/common/TabsComponent'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductDescription({ product }: { product: Product }) {

  return (
    <div className=' grid grid-cols-12 gap-8'>
      <div className=' col-span-8'>
        <Tabs defaultValue="infoTech" className="w-full">
          <TabsList>
            <TabsTrigger value="infoTech">
              <TypographyH2 className='  text-xl'>Thông số sản phẩm</TypographyH2>
            </TabsTrigger>
            <TabsTrigger value="des">
              <TypographyH2 className='  text-xl'>Mô tả sản phẩm</TypographyH2>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="infoTech">     <div dangerouslySetInnerHTML={{ __html: product.technical_html || "Hiện chưa có mô tả" }}></div></TabsContent>
          <TabsContent value="des">  <div dangerouslySetInnerHTML={{ __html: product.description_html || "Hiện chưa có mô tả" }}></div></TabsContent>
        </Tabs>
      </div>
      <div className=' col-span-4'>


      </div>
    </div>

  )
}
