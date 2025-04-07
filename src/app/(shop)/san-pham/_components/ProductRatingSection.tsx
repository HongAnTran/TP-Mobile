"use client"
import useRatings from '@/hooks/useRatings'
import { Product } from '@/types/Product.types'
import React from 'react'
import ProductRatingList from './ProductRatingList'
import ProductRatingSummary from './ProductRatingSummary'

export default function ProductRatingSection({product}:{product:Product}) {
  const {data  , isSuccess , isLoading} = useRatings({
    productSlug: product.id,
    page: 1,
  })
  if(!isSuccess) return null
  if(isLoading) return <div>Loading...</div>
  const ratings = data.pages[0].datas
  return (
    <div className=' grid grid-cols-12 gap-4'>
      <div className=' col-span-12 lg:col-span-8'>
        <ProductRatingSummary 
        averageRating={product.average_rating}
        productName={product.title}
        ratings={ratings}
        />
      
      <div className=' mt-4'>
        <ProductRatingList  ratings={ratings} averageRating={product.average_rating} countRating={product.rating_count}/>
        </div>
      </div>
    </div>
  )
}
