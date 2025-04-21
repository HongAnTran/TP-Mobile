"use client"
import useRatings from '@/hooks/useRatings'
import { Product } from '@/types/Product.types'
import React from 'react'
import ProductRatingList from './ProductRatingList'
import ProductRatingSummary from './ProductRatingSummary'
import { Skeleton } from '@/components/ui/skeleton'

export default function ProductRatingSection({ product }: { product: Product }) {
  const { data, isSuccess, isLoading } = useRatings({
    productSlug: product.id,
    page: 1,
  })
  if (isLoading) return <div className='p-4 bg-white rounded-lg shadow-lg border overflow-hidden flex flex-col gap-3'>
    <h2 className="text-lg font-semibold mb-4">
      Đánh giá {product.title}
    </h2>
    <Skeleton className=' w-full h-14' />
    <Skeleton className=' w-full h-14' />
    <Skeleton className=' w-full h-14' />
  </div>

  if (!isSuccess) return null
  const ratings = data.pages[0].datas
  return (
    <div className=' p-4 bg-white rounded-lg shadow-lg border overflow-hidden'>
      <ProductRatingSummary
        averageRating={product.average_rating}
        productName={product.title}
        ratings={ratings}
      />
      <div className=' mt-4'>
        <ProductRatingList ratings={ratings} />
      </div>
    </div>

  )
}
