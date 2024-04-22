import { Product, ProductOption, ProductVariant } from "@/types/product";
import ProductImageCarousel from "./ProductImageCarousel";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { useEffect, useState } from "react";
import Rating from "../Rating";
import ProductPrice from "./ProductPrice";
import ProductShowPrice from "./ProductShowPrice";
import ProductOptions from "./ProductOptions";

export default function ProductQuickView({ product }: { product: Product }) {
  const [variantActive, setVariantActive] = useState<ProductVariant>(product.variants[1])
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
    const findVariantActive = product.variants.find(pro => optionActive.includes(pro.option1) && optionActive.includes(pro.option2) && optionActive.includes(pro.option3))
    if (!findVariantActive) return
    setVariantActive(findVariantActive)

  }, [optionActive, product.variants])

  return (
    <div className='grid grid-cols-12 gap-4'>
      <div className=' col-span-5'>
        <ProductImageCarousel imageActive={indexImageActive} setImageActive={(index) => setIndexImageActive(index)} images={product.images} alt={product.title} />
      </div>
      <div className=' col-span-7'>
        <div className=" flex flex-col gap-2">
          <TypographyH3 className=" line-clamp-2">{product.title}</TypographyH3>
          <TypographyP >Thương hiệu: <b>{product.vendor}</b></TypographyP>
          <TypographyP >Mã sản phẩm: <b>{variantActive.sku}</b></TypographyP>
          <Rating showCount rate={product.rating.rate} count={product.rating.count} />
          <ProductShowPrice variant={variantActive} />
          <ProductOptions product={product} optionsActive={optionActive} onSelectOption={handleSelectOption} />
        </div>
      </div>
    </div>
  )
}