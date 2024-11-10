import { TypographyP } from '@/components/ui/typography'
import ProductSpecificationsServiceApi from '@/services/productSpecifications'
import React from 'react'

export default async function ProductSpecifications({ productId }: { productId: number }) {
  const types = await ProductSpecificationsServiceApi.getListType()
  const groups = await ProductSpecificationsServiceApi.getListGroup()
  const specifications = await ProductSpecificationsServiceApi.getList({ product_id: productId })
  return (
    <div>
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
  )
}
