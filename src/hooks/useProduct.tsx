"use client"
import ProductsServiceApi from '@/services/productService'
import { useQuery } from '@tanstack/react-query'

export default function useProduct() {
  return useQuery({ queryKey: ['products'], queryFn: () => ProductsServiceApi.getDetail("ipad-air-2020-wifi")})

}
