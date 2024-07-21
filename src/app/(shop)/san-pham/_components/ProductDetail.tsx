"use client"
import ProductImageCarousel from '@/components/common/product/ProductImageCarousel'
import ProductOptions from '@/components/common/product/ProductOptions'
import ProductShowPrice from '@/components/common/product/ProductShowPrice'
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
import useCart from '@/hooks/useCart'
import Link from '@/components/common/Link'
import routes from '@/routes'
import ProductBenefitsIpad from '@/components/common/product/ProductBenefitsIpad'

export default function ProductDetail({ product }: { product: Product }) {
  const { handleAddtoCart, handleBuyNow } = useCart()
  const { variantActive, handleSelectOption, optionActive, indexImageActive, setIndexImageActive } = useHandleVariant(product)

  const { addProductToRecentView } = useProductRecentView()

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

  useEffect(() => {
    if (product) {
      addProductToRecentView(product)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product])

  return (
    <div >
      <div className=' grid  gap-4 grid-cols-12'>
        <div className=' md:col-span-6 col-span-12 lg:col-span-4 product-images product-detail-left  relative'>
          <ProductImageCarousel setImageActive={setIndexImageActive} images={product.images} alt={product.title} imageActive={indexImageActive} />
          <div className=' absolute top-1 right-1  w-8 h-8 flex justify-center items-center bg-white shadow-lg rounded-full'>
            <ButtonWishlist id={product.id} />
          </div>
        </div>
        <div className=' md:col-span-6 col-span-12 lg:col-span-5'>
          <div className=" flex flex-col gap-2">
            <TypographyH1 className=" line-clamp-2 lg:text-xl  text-xl">{product.title}</TypographyH1>
            {/* {product.rating && <Rating showCount rate={product.rating.rate} count={product.rating.count} />} */}
            <TypographyP >Thương hiệu: <b className=' text-blue-500'>{product.brand?.name}</b></TypographyP>
            {/* <TypographyP >Danh mục:  <Link href={`${routes.category}/${product.category.slug}`} ><b className=' text-blue-500'>{product.category.title}</b> </Link></TypographyP> */}
            <ButtonCompareProduct product={product} />
            <TypographyP className=' line-clamp-2'>{product.short_description}</TypographyP>
            <ProductShowPrice variant={variantActive} />
          </div>
          <div className=' mt-4'>
            <ProductOptions product={product} optionsActive={optionActive} onSelectOption={handleSelectOption} />

          </div>
          <div className=' mt-1'>
            <ProductBenefitsIpad />
          </div>
          <div className=' mt-4'>
            <ProductQuantity
              quantity={quantity}
              handleQuantity={handleQuantity}
            />
          </div>

          <div className=' mt-8 '>
            <ProductActionButton onAddtoCart={() => handleAddtoCart(product, variantActive, quantity)} onBuyNow={
              () => {
                handleBuyNow(product, variantActive, quantity)
              }
            } />
          </div>
        </div>
        <div className=' col-span-12 lg:col-span-3'>
          <ProductBenefits />
        </div>

      </div>
    </div>
  )
}
