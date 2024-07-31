"use client"
import React from 'react'
import { Button } from '../ui/button'
import { Product } from '@/types/Product.types'
import useCompareProduct from '@/hooks/useCompareProduct'

export default function ButtonCompareProduct({ product }: { product: Product }) {
  const { addProductToCompare, checkIsContainCompare  ,removeProductToCompare} = useCompareProduct()

  if (checkIsContainCompare(product.id)) {
    return <Button size="sm" variant="default" className='  w-fit h-7' onClick={() => { removeProductToCompare(product.id) }}>
      Đã thêm vào so sánh
    </Button>
  }
  return (
    <Button size="sm" variant="outline" className=' w-[60px] h-7' onClick={() => { addProductToCompare(product) }} >
      So sánh
    </Button>

  )
}
