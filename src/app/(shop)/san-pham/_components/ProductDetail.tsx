"use client"
import ProductImageCarousel from '@/components/common/product/ProductImageCarousel'
import ProductOptions from '@/components/common/product/ProductOptions'
import ProductShowPrice from '@/components/common/product/ProductShowPrice'
import Rating from '@/components/common/Rating'
import { TypographyH1, TypographyP } from '@/components/ui/typography'
import useHandleVariant from '@/hooks/useHandleVariant'
import { Product } from '@/types/product'
import React, { useEffect, useState } from 'react'
import ProductBenefits from './ProductBenefits'
import ProductQuantity, { ProductQuantityProps } from '@/components/common/product/ProductQuantity'
import ProductActionButton from '@/components/common/product/ProductActionButton'
import SETTINGS from '@/consts/settings'
import ButtonCompareProduct from '@/components/feature/ButtonCompareProduct'
import ButtonWishlist from '@/components/feature/ButtonWishlist'
import useProductRecentView from '@/hooks/useProductRecentView'

export default function ProductDetail({ product }: { product: Product }) {

  
  const { variantActive, handleSelectOption, optionActive, indexImageActive, setIndexImageActive } = useHandleVariant(product)

  const { addProductToRecentView} = useProductRecentView()

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

  useEffect(()=>{
    if(product){
      addProductToRecentView(product)
    }
  },[ product])

  return (
    <div >
      <div className=' grid  gap-4 grid-cols-12'>
        <div className=' col-span-4 product-images product-detail-left  relative'>
          <ProductImageCarousel setImageActive={setIndexImageActive} images={product.images} alt={product.title} imageActive={indexImageActive} />
          <div className=' absolute top-1 right-1  w-8 h-8 flex justify-center items-center bg-white shadow-lg rounded-full'>
            <ButtonWishlist id={product.id} />
          </div>
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
