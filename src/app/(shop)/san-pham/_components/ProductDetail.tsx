"use client"
import ProductImageCarousel from '@/components/common/product/ProductImageCarousel'
import ProductOptions from '@/components/common/product/ProductOptions'
import ProductShowPrice from '@/components/common/product/ProductShowPrice'
import Rating from '@/components/common/Rating'
import { TypographyH1, TypographyP } from '@/components/ui/typography'
import useHandleVariant from '@/hooks/useHandleVariant'
import { Product } from '@/types/product'
import React, { useState } from 'react'
import ProductBenefits from './ProductBenefits'
import ProductQuantity, { ProductQuantityProps } from '@/components/common/product/ProductQuantity'
import ProductActionButton from '@/components/common/product/ProductActionButton'
import { MAX_SALE, MIN_SALE } from '@/consts/product'
import ButtonCompareProduct from '@/components/feature/ButtonCompareProduct'

export default function ProductDetail({ product }: { product: Product }) {


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
    <div >
      <div className=' grid  gap-4 grid-cols-12'>
        <div className=' col-span-4 product-images product-detail-left'>
          <ProductImageCarousel setImageActive={setIndexImageActive} images={product.images} alt={product.title} imageActive={indexImageActive} />
        </div>
        <div className=' col-span-5'>
          <div className=" flex flex-col gap-2">
            <TypographyH1 className=" line-clamp-2 lg:text-xl  text-xl">{product.title}</TypographyH1>
            {product.rating && <Rating showCount rate={product.rating.rate} count={product.rating.count} />}
            <TypographyP >Thương hiệu: <b className=' text-blue-500'>{product.vendor}</b></TypographyP>
            <TypographyP >Mã sản phẩm: <b className=' text-blue-500'>{variantActive.sku}</b></TypographyP>
            <ButtonCompareProduct product={product} />

            <TypographyP >{product.short_description}</TypographyP>


            <ProductShowPrice variant={variantActive} />
          </div>
          <div className=' mt-8'>
            <ProductOptions product={product} optionsActive={optionActive} onSelectOption={handleSelectOption} />

          </div>
          <div className=' mt-8'>
            <ProductQuantity
              quantity={quantity}
              handleQuantity={handleQuantity}
            />
          </div>
          <div className=' mt-8 '>
            <ProductActionButton />
          </div>
        </div>
        <div className=' col-span-3'>
          <ProductBenefits />
        </div>

      </div>
    </div>
  )
}