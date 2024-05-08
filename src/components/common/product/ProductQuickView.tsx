"use client"
import { Product } from "@/types/product";
import ProductImageCarousel from "./ProductImageCarousel";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { useState } from "react";
import Rating from "../Rating";
import ProductShowPrice from "./ProductShowPrice";
import ProductOptions from "./ProductOptions";
import useHandleVariant from "@/hooks/useHandleVariant";
import ProductActionButton from "./ProductActionButton";
import ProductQuantity, { ProductQuantityProps } from "./ProductQuantity";
import SETTINGS from '@/consts/settings'

import ButtonCompareProduct from "@/components/feature/ButtonCompareProduct";

export default function ProductQuickView({ product }: { product: Product }) {
  const { variantActive, handleSelectOption, optionActive, indexImageActive, setIndexImageActive } = useHandleVariant(product)
  const [quantity, setQuantity] = useState(SETTINGS.MIN_SALE_PRODUCT)

  const handleQuantity: ProductQuantityProps["handleQuantity"] = {
    add() {
      setQuantity(pre => pre < SETTINGS.MAX_SALE_PRODUCT ? pre + 1 : pre)
    },
    minus() {
      setQuantity(pre => pre > SETTINGS.MIN_SALE_PRODUCT ? pre - 1 : pre)

    },
    change(quantity: number) {
      let quantityNew = quantity
      if (quantityNew > SETTINGS.MAX_SALE_PRODUCT) {
        quantityNew = SETTINGS.MAX_SALE_PRODUCT
      } else if (quantityNew <= 0) {
        quantityNew = SETTINGS.MIN_SALE_PRODUCT
      }
      setQuantity(quantityNew)
    }
  }
  return (
    <div className='grid grid-cols-12 gap-4'>
      <div className=' col-span-5 '>
        <ProductImageCarousel imageActive={indexImageActive} setImageActive={(index) => setIndexImageActive(index)} images={product.images} alt={product.title} />
      </div>
      <div className=' col-span-7'>
        <div className=" flex flex-col gap-2">
          <TypographyH3 className=" line-clamp-2">{product.title}</TypographyH3>
          <TypographyP >Thương hiệu: <b>{product.vendor}</b></TypographyP>
          <TypographyP >Mã sản phẩm: <b>{variantActive.sku}</b></TypographyP>

          {product.rating && <Rating showCount rate={product.rating.rate} count={product.rating.count} />}
          <ButtonCompareProduct product={product} />
          <ProductShowPrice variant={variantActive} />
          <ProductOptions product={product} optionsActive={optionActive} onSelectOption={handleSelectOption} />
        </div>
        <div className=' mt-8'>
          <ProductQuantity
            quantity={quantity}
            handleQuantity={handleQuantity}
          />
        </div>
        <div className=' mt-8  pr-8   '>
          <ProductActionButton />
        </div>
      </div>
    </div>
  )
}