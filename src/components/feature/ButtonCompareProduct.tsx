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
    return <Button size="sm" variant="default" className='  w-fit' onClick={()=>{
      router.push(routes.compareProduct)
    }}>
     Xem so sánh
    </Button>
  }

  return (



    <Button size="sm" variant="outline" className=' w-[100px]' onClick={addProductToCompare}>
      So sánh
    </Button>

  )
}
