"use client"
import { Product, ProductOption, ProductVariant } from "@/types/product";
import ProductImageCarousel from "./ProductImageCarousel";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { useEffect, useState } from "react";
import Rating from "../Rating";
import ProductShowPrice from "./ProductShowPrice";
import ProductOptions from "./ProductOptions";
import { findVariantActiveOption } from "@/utils";
import useHandleVariant from "@/hooks/useHandleVariant";
import ProductActionButton from "./ProductActionButton";
import ProductQuantity, { ProductQuantityProps } from "./ProductQuantity";
import { MAX_SALE, MIN_SALE } from "@/consts/product";

export default function ProductQuickView({ product }: { product: Product }) {
  const { variantActive, handleSelectOption, optionActive, indexImageActive, setIndexImageActive } = useHandleVariant(product)
  const [quantity, setQuantity] = useState(MIN_SALE)

  const handleQuantity: ProductQuantityProps["handleQuantity"] = {
    add() {
      setQuantity(pre => pre < MAX_SALE ? pre + 1 : pre)
    },
    minus() {
      setQuantity(pre => pre > MIN_SALE ? pre - 1 : pre)

    },
    change(quantity: number) {
      let quantityNew = quantity
      if (quantityNew > MAX_SALE) {
        quantityNew = MAX_SALE
      } else if (quantityNew <= 0) {
        quantityNew = MIN_SALE
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

          <ProductShowPrice variant={variantActive} />
          <ProductOptions product={product} optionsActive={optionActive} onSelectOption={handleSelectOption} />
        </div>
        <div className=' mt-8'>
            <ProductQuantity
              quantity={quantity}
              handleQuantity={handleQuantity}
            />
          </div>
        <div className=' mt-8    '>
            <ProductActionButton />
          </div>
      </div>
    </div>
  )
}