"use client"

import ProductCard from '@/components/common/product/ProductCard'
import ProductsSkeleton from '@/components/common/product/ProductsSkeleton'
import { TypographyH1, TypographyH2, TypographyH4 } from '@/components/ui/typography'
import useWishlist from '@/hooks/useWishlist'
import useWishlistData from '@/hooks/useWishlistData'
import React, { useEffect } from 'react'

export default function Wishlist() {

  const { data, isLoading } = useWishlistData()

  if (isLoading) {
    return <ProductsSkeleton />
  }

  if (!data) {
    return <div className=' min-h-60'>

      <TypographyH4>có lỗi xảy ra</TypographyH4>
    </div>

  }

  if (!data.total) {
    return <div className=' min-h-60'>
      <TypographyH4>Bạn chưa yêu thích sản phẩm nào</TypographyH4>
    </div>
  }

  return (
    <div className=' mt-10'>
      <TypographyH2 className=' text-center mb-5'>Đã yêu thích {data?.total} sản phẩm</TypographyH2>
      <div className=' grid grid-cols-2 gap-4 mg:grid-cols-4 lg:grid-cols-5'>
        {data?.datas.map(product => {
          return <ProductCard key={product.id} product={product} />
        })}
      </div>
    </div>
  )
}
