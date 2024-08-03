import { fillArray} from '@/utils'
import React from 'react'
import { Skeleton } from '../../ui/skeleton'

export default function ProductsSkeleton() {
  return (
    <div className='  grid lg:grid-cols-4 gap-2 grid-cols-2'>
        {
          fillArray(4).map((_ , index)=>{
            return <Skeleton key={index} className=' w-full h-[300px] rounded-lg'/>
          })
        }
    </div>
  )
}
