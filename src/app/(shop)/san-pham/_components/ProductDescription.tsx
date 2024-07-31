import React from 'react'
import { Product, ProductTypeSpecifications } from '@/types/Product.types'
import { TypographyH2, TypographyP } from '@/components/ui/typography'
import ProductSpecificationsServiceApi from '@/services/productSpecifications'
export default async function ProductDescription({ product }: { product: Product }) {
  const types = await ProductSpecificationsServiceApi.getListType()
  const groups = await ProductSpecificationsServiceApi.getListGroup()
  const specifications = await ProductSpecificationsServiceApi.getList({
    params : {product_id : product.id}
  })

  return (
    <div className=' grid grid-cols-12 gap-8'>
      <div className='col-span-12 md:col-span-8'>
        <TypographyH2 className='  text-xl pb-2 border-b border-gray-300 mb-2'>Mô tả sản phẩm</TypographyH2>
        <div className=' max-h-[600px] overflow-y-auto  mx-1 p-2  bg-white ' dangerouslySetInnerHTML={{ __html: product.description_html || "Hiện chưa có mô tả" }}></div>
      </div>
      <div className=' col-span-12 md:col-span-4'>
        <TypographyH2 className='  text-xl  pb-2 border-b border-gray-300 mb-2'>Thông số kỷ thuật</TypographyH2>
        {specifications.length ? <div className=' w-full rounded-md border border-gray-200 p-4'>
          {types.map((type) => {
            const groupList = groups.filter(item => item.type_id === type.id)
            if (!groupList.length) {
              return
            }
            return (
              <div key={type.id}>
                {groupList.length ? <>
                  <TypographyP className=' rounded text-red-500  bg-[#f1f1f1] p-[10px] font-bold'>
                    {type.name}
                  </TypographyP>
                  <div className=' p-2'>
                    {groupList.map(group => {
                      const spe = specifications.find(item => item.group_id === group.id)
                      if (spe) {
                        return (<li key={group.id} className='  flex items-center border-b py-1 '>
                          <TypographyP className=' font-semibold w-1/2'>{group.name}:</TypographyP>
                          <div className=' text-right  w-1/2'>
                            <TypographyP >{spe.value}</TypographyP>
                          </div>
                        </li>)
                      }
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
