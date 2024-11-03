"use client"
import { Product,  ProductVariant } from '@/types/Product.types'
import { findVariantActiveOption } from '@/utils'
import { useCallback, useEffect, useState } from 'react'

export default function useHandleVariant(product: Product ,optionsDefault?: number[]) {
  const [variantActive, setVariantActive] = useState<ProductVariant>(product.variants[0])

  const [optionActive, setOptionActive] = useState(()=>{
    if(optionsDefault){
      return optionsDefault
    }
    const atts = product.attributes.map(att=>att.attribute.id)
    return atts.map(att=>variantActive.attribute_values.find(va=>va.attribute_id === att)?.id || 0)
  })
  const [indexImageActive, setIndexImageActive] = useState<number>(0)
  const handleSelectOption = useCallback((index: number, value: number) => {
    setOptionActive(pre => {
      const resuil = [...pre]
      resuil.splice(index, 1, value)
      return resuil
    })
  }, [setOptionActive])


  useEffect(() => {
    const findVariantActive = findVariantActiveOption(product.variants, optionActive)
    if (!findVariantActive) return

    setVariantActive(findVariantActive)

  }, [optionActive, product.variants])

  useEffect(() => {
    const imageActive = product.images.find((img) => img.id === variantActive.image_id)
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
