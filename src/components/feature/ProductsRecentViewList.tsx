"use client"
import React from 'react'
import ProductCarousel from '../common/ProductCarousel'
import useProductRecentView from '@/hooks/useProductRecentView'

export default function ProductsRecentViewList() {
  const { productsRecentView} = useProductRecentView()
  return (
    <div>
     <ProductCarousel title='Xem Gần đây' products={productsRecentView} />
    </div>
  )
}
