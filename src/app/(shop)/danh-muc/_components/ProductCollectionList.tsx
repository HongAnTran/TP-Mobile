import React from 'react'
import ProductCard from '@/components/common/product/ProductCard'
import ProductsServiceApi from '@/services/productService'
import { Product, ProductsParams } from '@/types/product'
import PaginationServer from '@/components/common/Pagination'

interface ProductCollectionListProps {
  searchParams: ProductsParams
}

export default async function ProductCollectionList({ searchParams }: ProductCollectionListProps) {
  const { products } = await ProductsServiceApi.getList({
    category_id: searchParams.category_id,
    take: 20,
    ...searchParams
  })
  if (!products.length) {
    return (
      <div>Chưa có sản phẩm</div>
    )
  }
  return (
    <>
      <div className=' grid lg:grid-cols-4 gap-2 grid-cols-2'>
        {products.map((pro) => {
          return <ProductCard key={pro.id} product={pro} />
        })}
      </div>
      <PaginationServer  />
    </>
  )
}
