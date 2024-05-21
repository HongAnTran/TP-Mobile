import React from 'react'
import { Product, ProductTypeSpecifications } from '@/types/product'
import { TypographyH2, TypographyH4, TypographySpan } from '@/components/ui/typography'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import typesJson from "@/data/tagType.json"
export default function ProductDescription({ product }: { product: Product }) {
  const types = JSON.parse(JSON.stringify(typesJson)) as ProductTypeSpecifications[]


  return (
    <div className=' grid grid-cols-12 gap-8'>
      <div className=' col-span-12'>
        <Tabs defaultValue="infoTech" className="w-full">
          <TabsList >
            <TabsTrigger value="infoTech">
              <TypographyH2 className='  text-xl'>Thông số sản phẩm</TypographyH2>
            </TabsTrigger>
            <TabsTrigger value="des">
              <TypographyH2 className='  text-xl'>Mô tả sản phẩm</TypographyH2>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="infoTech">
            {product.specifications.length ? <div className=' flex flex-col gap-4'>
              {types.map(type => {  
                return <div className=" flex flex-col gap-2" key={type.id}><TypographyH4 >{type.name}</TypographyH4>
                  <ul className='  list-none mt-2 max-w-[300px]'>
                    {product.specifications.filter((item)=>item.type_id === type.id).map(item=>{
                      return <li className=' flex  items-center justify-between ' key={item.id}><TypographySpan  className=' font-bold'>{item.name} </TypographySpan> <TypographySpan >{item.value} </TypographySpan></li>
                    })}
                  </ul>
                </div>
              })}
            </div> : <div>
              Sản phẩm chưa có thông số
            </div>}

          </TabsContent>
          <TabsContent value="des">  <div dangerouslySetInnerHTML={{ __html: product.description_html || "Hiện chưa có mô tả" }}></div></TabsContent>
        </Tabs>
      </div>

    </div>

  )
}
