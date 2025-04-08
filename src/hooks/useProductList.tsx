"use client"
import ProductsServiceApi from '@/services/client/ProductsService'
import {  ProductsParams } from '@/types/Product.types'
import { useQuery } from '@tanstack/react-query'

export default function useProductList(params?: ProductsParams) {
  return useQuery({
    staleTime: 1000 * 60 * 5,
    queryKey: ['productList', params],
    queryFn: () => ProductsServiceApi.getList(params)
  },
  )
}
