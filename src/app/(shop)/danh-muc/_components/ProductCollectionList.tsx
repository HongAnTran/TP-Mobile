import React from 'react'
import ProductCard from '@/components/common/product/ProductCard'
import ProductsServiceApi from '@/services/ProductsService'
import {  ProductsParams } from '@/types/Product.types'
import PaginationServer from '@/components/common/paginations/PaginationServer'
import SETTINGS from '@/consts/settings'

interface ProductCollectionListProps {
  searchParams: ProductsParams
  slug: string
}

export default async function ProductCollectionList({ searchParams, slug }: ProductCollectionListProps) {
  const page = Number(searchParams.page) || 1
  const LIMIT = SETTINGS.LIMIT_SHOW_PRODUCT_LIST

  const {category_id , ...query} = searchParams
  const { datas, total } = await ProductsServiceApi.getList({
    limit: LIMIT,
    ...searchParams
  }, {
    // isLogger: true
  })
  if (!datas.length) {
    return (
      <div>Chưa có sản phẩm</div>
    )
  }
  return (
    <>
      <div className=' grid lg:grid-cols-4 gap-2 grid-cols-2'>
        {datas.map((pro) => {
          return <ProductCard key={pro.id} product={pro} />
        })}
      </div>
      <div className=' mt-8 flex  justify-center'>
      <PaginationServer page={page} pageSize={LIMIT} query={{...query}} total={total} urlSrc={slug} />
      </div>
    </>
  )
}
