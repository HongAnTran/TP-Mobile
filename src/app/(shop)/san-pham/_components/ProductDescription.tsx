import React from 'react'
import { Product, ProductTypeSpecifications } from '@/types/product'
import { TypographyH2, TypographyP } from '@/components/ui/typography'
import typesJson from "@/data/tagType.json"
export default function ProductDescription({ product }: { product: Product }) {
  const types = JSON.parse(JSON.stringify(typesJson)) as ProductTypeSpecifications[]


  return (
    <div className=' grid grid-cols-12 gap-8'>
      <div className=' col-span-8'>
        <TypographyH2 className='  text-xl pb-2 border-b border-gray-300 mb-2'>Mô tả sản phẩm</TypographyH2>
        <div className=' max-h-[600px] overflow-y-auto  mx-1 p-2  bg-white ' dangerouslySetInnerHTML={{ __html: product.description_html || "Hiện chưa có mô tả" }}></div>
      </div>
      <div className=' col-span-4'>
        <TypographyH2 className='  text-xl  pb-2 border-b border-gray-300 mb-2'>Cấu hình {product.title}</TypographyH2>
        {product.specifications.length ? <div className=' w-full rounded-md border border-gray-200 p-4'>
          {types.map((type) => {
            const speList = product.specifications.filter(item => item.type_id === type.id)
            return (
              <div key={type.id}>
                {speList.length ? <>
                  <TypographyP className=' rounded text-red-500  bg-[#f1f1f1] p-[10px] font-bold'>
                    {type.name}
                  </TypographyP>
                  <div className=' p-2'>
                    {speList.map(spes => {
                      return (<li key={spes.id} className='  flex items-center border-b py-1 '>
                        <TypographyP className=' font-semibold w-1/2'>{spes.name}:</TypographyP>
                        <div className=' text-right  w-1/2'>
                        <TypographyP >{spes.value}</TypographyP>
                          {/* {spes.value.map(item => {
                            return (<TypographyP key={item}>{item}</TypographyP>)
                          })} */}

                        </div>
                      </li>)
                    })}
                  </div>
                </> : null}
              </div>
            )
          })}
        </div>
          : <div>
            Sản phẩm chưa có thông số
          </div>}
      </div>

    </div>

  )
}
