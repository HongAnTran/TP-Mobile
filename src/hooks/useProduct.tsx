"use client"
import ProductsServiceApi from '@/services/productService'
import { Product } from '@/types/product'
import { useQuery } from '@tanstack/react-query'

export default function useProduct(slug: Product["slug"]) {
  return useQuery({
    staleTime: 60 * 5,
    queryKey: ['product', slug],
    queryFn: () => ProductsServiceApi.getDetail(slug)
  },
  )
}
