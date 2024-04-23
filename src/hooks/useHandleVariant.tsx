"use client"
import { Product, ProductOption, ProductVariant } from '@/types/product'
import { findVariantActiveOption } from '@/utils'
import { useEffect, useState } from 'react'

export default function useHandleVariant(product: Product) {
  const [variantActive, setVariantActive] = useState<ProductVariant>(product.variants[0])
  const [optionActive, setOptionActive] = useState([variantActive.option1, variantActive.option2, variantActive.option3])
  const [indexImageActive, setIndexImageActive] = useState<number>(0)

  function handleSelectOption(option: ProductOption, value: string) {
    setOptionActive(pre => {
      const resuil = [...pre]
      resuil.splice(option.position - 1, 1, value)
      return resuil
    })
  }

  useEffect(() => {
    const findVariantActive = findVariantActiveOption(product.variants, optionActive)
    if (!findVariantActive) return
    setVariantActive(findVariantActive)

  }, [optionActive, product.variants])

  return {
    handleSelectOption,
    variantActive,
    optionActive,
    indexImageActive, 
    setIndexImageActive
  }


}
