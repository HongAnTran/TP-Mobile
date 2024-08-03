"use client"
import { Product, ProductAttribute, ProductVariant } from '@/types/Product.types'
import { findVariantActiveOption } from '@/utils'
import { useCallback, useEffect, useState } from 'react'

export default function useHandleVariant(product: Product) {
  const [variantActive, setVariantActive] = useState<ProductVariant>(product.variants[0])

  const [optionActive, setOptionActive] = useState(()=>{
    const atts = product.attributes.map(att=>att.attribute.id)
    return atts.map(att=>variantActive.attribute_values.find(va=>va.attribute_id === att)?.id || 0)
  })

   console.log(product.attributes.map(att=>att.attribute.id) , variantActive.attribute_values)
  const [indexImageActive, setIndexImageActive] = useState<number>(0)


  console.log(variantActive , optionActive)

  const handleSelectOption = useCallback((index: number, value: number) => {
    console.log(index)
    setOptionActive(pre => {
      const resuil = [...pre]
      resuil.splice(index, 1, value)
      console.log(resuil)
      return resuil
    })
  }, [])


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
