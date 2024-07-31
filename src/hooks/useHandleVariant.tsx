"use client"
import { Product, ProductOption, ProductVariant } from '@/types/Product.types'
import { findVariantActiveOption } from '@/utils'
import { useCallback, useEffect, useState } from 'react'

export default function useHandleVariant(product: Product) {
  const [variantActive, setVariantActive] = useState<ProductVariant>(product.variants[0])
  const [optionActive, setOptionActive] = useState([variantActive.option1, variantActive.option2, variantActive.option3])
  const [indexImageActive, setIndexImageActive] = useState<number>(0)

  const handleSelectOption = useCallback((option: ProductOption, value: string) => {
    setOptionActive(pre => {
      const resuil = [...pre]
      resuil.splice(option.position - 1, 1, value)
      return resuil
    })
  }, [])



  useEffect(() => {
    const findVariantActive = findVariantActiveOption(product.variants, optionActive)
    if (!findVariantActive) return

    setVariantActive(findVariantActive)

  }, [optionActive, product.variants])

  useEffect(() => {
    console.log(variantActive,product.images)
    const imageActive = product.images.find((img) => img.id === variantActive.image_id)
    console.log(imageActive)
    if (!imageActive) return

    const index = product.images.findIndex(img => img.id === imageActive.id)
    if (index >= 0) {
      setIndexImageActive(index)
    }

  }, [product.images, variantActive])

  return {
    handleSelectOption,
    variantActive,
    optionActive,
    indexImageActive,
    setIndexImageActive
  }


}
