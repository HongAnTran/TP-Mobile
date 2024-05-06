"use client"
import React from 'react'
import { Button } from '../ui/button'
import { Product } from '@/types/product'
import useCompareProduct from '@/hooks/useCompareProduct'
import { useRouter } from 'next/navigation'
import routes from '@/routes'

export default function ButtonCompareProduct({ product }: { product: Product }) {

  const router = useRouter()
  const { products, addProduct } = useCompareProduct()

  function addProductToCompare() {
    addProduct?.(product)
  }

  if (products.find(item => item.id === product.id)) {
    return <Button size="sm" variant="default" className='  w-fit h-7' onClick={()=>{
      router.push(routes.compareProduct)
    }}>
     Xem so sánh
    </Button>
  }

  return (



    <Button size="sm" variant="outline" className=' w-[60px] h-7' onClick={addProductToCompare}>
      So sánh
    </Button>

  )
}
