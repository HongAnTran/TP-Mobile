"use client"
import ProductImageCarousel from '@/components/common/product/ProductImageCarousel'
import ProductOptions from '@/components/common/product/ProductOptions'
import ProductShowPrice from '@/components/common/product/ProductShowPrice'
import { TypographyH1, TypographyP } from '@/components/ui/typography'
import useHandleVariant from '@/hooks/useHandleVariant'
import { Product, ProductVariant } from '@/types/Product.types'
import React, { useEffect, useState } from 'react'
import ProductQuantity, { ProductQuantityProps } from '@/components/common/product/ProductQuantity'
import ProductActionButton from '@/components/common/product/ProductActionButton'
import SETTINGS from '@/consts/config'
import ButtonCompareProduct from '@/components/feature/buttons/ButtonCompareProduct'
import ButtonWishlist from '@/components/feature/buttons/ButtonWishlist'
import useProductRecentView from '@/hooks/useProductRecentView'
import useCart from '@/hooks/useCart'
import PromotionPolicy from '@/components/feature/policy/PromotionPolicy'
import WarrantyPolicy from '@/components/feature/policy/WarrantyPolicy'
import SpecialPromotionPolicy from '@/components/feature/policy/SpecialPromotionPolicy'
import StoreListView from '@/components/feature/store/StoreListView'
import { Store } from '@/types/Store.type'
import { objectToSearchParams } from '@/utils'
import { toast } from '@/components/ui/use-toast'
import Image from 'next/image'
import PriceText from '@/components/common/PriceText'

export default function ProductDetail({ product, stores = [], optionsDefault }: { product: Product, stores?: Store[], optionsDefault?: number[] }) {
  const [isTouchOption, setIsTouchOption] = useState(false)

  const { handleAddtoCart, handleBuyNow } = useCart()
  const { variantActive, handleSelectOption, optionActive, indexImageActive, setIndexImageActive } = useHandleVariant(product, optionsDefault)
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

  function onAddTocart(product: Product, variantActive: ProductVariant, quantity: number) {
    handleAddtoCart(product, variantActive, quantity)
    toast({
      title: `Thêm vào giỏ hàng thành công`,
      description: <div className=' flex gap-2'>
        <Image className=' w-10 h-10' alt={product.title} src={variantActive.image?.url || ""} width={60} height={60} />
        <div>
          <p>{product.title + "-" + variantActive.title} x <b>{quantity}</b></p>
          <PriceText price={variantActive.price * quantity} />
        </div>
      </div>
    })
  }

  useEffect(() => {
    if (product) {
      addProductToRecentView(product)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product])

  useEffect(() => {
    if (isTouchOption) {
      const options = variantActive.attribute_values.map(value => value.slug)
      const searchParams = {
        [SETTINGS.KEY_ACTIVE_OPTIONS]: options
      }
      const valueSearch = objectToSearchParams({ ...searchParams })
      const query = valueSearch ? `?${valueSearch}` : "";
      window.history.replaceState(null, '', query)
    }
  }, [variantActive, isTouchOption])
  return (
    <div >
      <div className=' flex   items-center gap-4'>

        <TypographyH1 className=" line-clamp-2  font-medium  lg:text-2xl  text-xl">{product.title}</TypographyH1>
        <ButtonCompareProduct product={product} />

      </div>
      <hr className='  border-b border-gray-200 my-4' />
      <div className=' grid  gap-4 grid-cols-12'>
        <div className=' md:col-span-6 col-span-12 lg:col-span-4 product-images product-detail-left  relative'>
          <ProductImageCarousel setImageActive={setIndexImageActive} images={product.images} alt={product.title} imageActive={indexImageActive} />
          <div className=' absolute top-1 right-1  w-8 h-8 flex justify-center items-center bg-white shadow-lg rounded-full'>
            <ButtonWishlist id={product.id} />
          </div>

          <div className=' mt-2'> <StoreListView stores={stores} /> </div>
        </div>
        <div className=' md:col-span-6 col-span-12 lg:col-span-5'>
          <div className=" flex flex-col gap-2">

            {/* {product.rating && <Rating showCount rate={product.rating.rate} count={product.rating.count} />} */}
            {/* <TypographyP ><b>Danh mục:</b>  <Link href={`${routes.category}/${product.category.slug}`} ><b className=' text-blue-500'>{product.category.title}</b> </Link></TypographyP>
            <TypographyP ><b>Thương hiệu:</b> <b className=' text-blue-500'>{product.brand?.name}</b></TypographyP> */}
            <ProductShowPrice variant={variantActive} className=' lg:text-lg' />
          </div>
          <div className=' mt-4'>
            <ProductOptions product={product} optionsActive={optionActive} onSelectOption={(index: number, id: number) => {
              handleSelectOption(index, id)
              setIsTouchOption(true)
            }} />
            {/* <TypographyP className=' line-clamp-3 mt-4'>{product.short_description}</TypographyP> */}
          </div>
          
          <div className=' mt-4'>
            <ProductQuantity
              quantity={quantity}
              handleQuantity={handleQuantity}
            />
          </div>

          <div className=' mt-8 '>
            <ProductActionButton 
              product={product}
            onAddtoCart={() => onAddTocart(product, variantActive, quantity)} onBuyNow={
              () => {
                handleBuyNow(product, variantActive, quantity)
              }
            } />
          </div>
          <div className=' mt-4'>
            <SpecialPromotionPolicy />
          </div>

        </div>
        <div className=' col-span-12 lg:col-span-3'>
          <div className=' flex flex-col gap-2'>
            <PromotionPolicy />
            <WarrantyPolicy />
          </div>
        </div>

      </div>
    </div>
  )
}
