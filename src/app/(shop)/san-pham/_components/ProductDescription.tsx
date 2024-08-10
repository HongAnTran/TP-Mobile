import React from 'react'
import { Product } from '@/types/Product.types'
import { TypographyH2, TypographyP } from '@/components/ui/typography'
import ProductSpecificationsServiceApi from '@/services/productSpecifications'
import { cn } from '@/lib/utils'
export default async function ProductDescription({ product }: { product: Product }) {
  const types = await ProductSpecificationsServiceApi.getListType()
  const groups = await ProductSpecificationsServiceApi.getListGroup()
  const specifications = await ProductSpecificationsServiceApi.getList({ product_id: product.id }, {
    isLogger: true
  })

  return (
    <div className=' grid grid-cols-12 lg:gap-8'>
      <div className='col-span-12 md:col-span-8 mb-5 lg:mb-0'>
        <div className=' p-2 rounded-md shadow-md border'>
          <TypographyH2 className='  text-center text-xl pb-2 border-b border-gray-300 mb-2'>Mô tả sản phẩm</TypographyH2>
          <div className={cn(' max-h-[600px] overflow-y-auto overflow-x-hidden border  mx-1 p-2  bg-white ', {
            "max-h-[200px]": !product.description_html
          })}
            dangerouslySetInnerHTML={{ __html: product.description_html || "Hiện chưa có mô tả" }}></div>
        </div>
      </div>

      <div className=' col-span-12 md:col-span-4'>
        <div className=' p-2 rounded-md shadow-md border'>
          <TypographyH2 className='  text-xl  pb-2 border-b border-gray-300 mb-2 text-center'>Thông số kỹ thuật</TypographyH2>
          {specifications.length ? <div className=' w-full rounded-md border border-gray-200 p-4'>
            {types.map((type) => {
              const groupList = groups.filter(item => item.type_id === type.id)
              const groupListHasValue = groupList.filter(group => {
                const spes = specifications.filter(item => item.group_id === group.id)
                return spes.length
              })
              if (!groupListHasValue.length) {
                return
              }

              return (
                <div key={type.id}>
                  <TypographyP className=' rounded text-primary  bg-[#f1f1f1] p-[10px] font-bold'>
                    {type.name}
                  </TypographyP>
                  <div className=' p-2'>
                    {groupList.map(group => {
                      const spes = specifications.filter(item => item.group_id === group.id)
                      if (spes.length) {
                        return (spes.map(spe => (<li key={spe.id} className='  flex items-center border-b py-1 '>
                          <TypographyP className=' font-semibold w-1/2'>{group.name}:</TypographyP>
                          <div className=' text-right  w-1/2'>
                            <TypographyP >{spe.value}</TypographyP>
                          </div>
                        </li>)))
                      }
                    })}
                  </div>

                </div>
              )
            })}
          </div>
            : <div>
              Sản phẩm chưa có thông số
            </div>}
        </div>
      </div>

    </div>

  )
}
