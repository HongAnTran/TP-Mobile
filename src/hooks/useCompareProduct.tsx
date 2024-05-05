import { CompareProduct } from '@/components/providers/CompareProductProvider'
import { useContext } from 'react'

export default function useCompareProduct() {
  const data = useContext(CompareProduct)
  return data
}
