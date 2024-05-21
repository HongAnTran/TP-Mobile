import React from 'react'
import ProductCard from '@/components/common/product/ProductCard'
import ProductsServiceApi from '@/services/productService'
import { Product } from '@/types/product'

interface ProductCollectionListProps {
  searchParams: { limit?: number, category_id?: number, keyword?: string, ids?: Product["id"][] }
}

export default async function ProductCollectionList({ searchParams }: ProductCollectionListProps) {
  const products = await ProductsServiceApi.getList(searchParams)
  return (
    <div className=' grid lg:grid-cols-4 md:grid-cols-2 gap-4 grid-cols-1'>
      {products.map((pro) => {
        return <ProductCard key={pro.id} product={pro} />
      })}
    </div>
  )
}
