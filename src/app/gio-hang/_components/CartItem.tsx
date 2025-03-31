'use client'

import Link from '@/components/common/Link'
import PriceText from '@/components/common/PriceText'
import ProductQuantity, { ProductQuantityProps } from '@/components/common/product/ProductQuantity'
import CloseCircleIcon from '@/components/icons/CloseCircleIcon'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import SETTINGS from '@/consts/config'
import routes from '@/routes'
import { ProductOrder } from '@/types/Product.types'
import Image from 'next/image'
import React from 'react'

interface CartItemProps {
  product: ProductOrder,
  onChangeQuantity?: (quantity: number) => void
  onDelete?: (id: ProductOrder["id"]) => void
  onChangeSelect?: (product: ProductOrder, value: boolean) => void
}

export default function CartItem({ product: productOrder, onDelete, onChangeQuantity, onChangeSelect }: CartItemProps) {

  const quantity = productOrder.quantity
  const { product, variant } = productOrder

  const handleQuantity: ProductQuantityProps["handleQuantity"] = {
    add() {
      const data = quantity < SETTINGS.MAX_SALE_PRODUCT ? quantity + 1 : quantity
      onChangeQuantity?.(data)
    },
    minus() {
      const data = quantity > SETTINGS.MIN_SALE_PRODUCT ? quantity - 1 : quantity

      onChangeQuantity?.(data)

    },
    change(quantity: number) {
      let quantityNew = quantity
      if (quantityNew > SETTINGS.MAX_SALE_PRODUCT) {
        quantityNew = SETTINGS.MAX_SALE_PRODUCT
      } else if (quantityNew <= 0) {
        quantityNew = SETTINGS.MIN_SALE_PRODUCT
      }
      onChangeQuantity?.(quantityNew)

    }
  }
  const img = variant.image?.url || product.images[0].url
  return (
    <li className=' py-4 border-y border-gray-200  md:items-center flex flex-col md:flex-row gap-4  justify-between relative'>
      <div className=' flex-shrink-0 flex gap-2 items-center  min-w-[260px]  lg:min-w-[400px] max-w-[400px]'>
        <Checkbox checked={productOrder.selected} onCheckedChange={(check) => {
          onChangeSelect?.(productOrder, !!check.valueOf())
        }} />
        <div className=' lg:w-[120px] lg:h-[120px] w-[80px] h-[80px] '>

          <Image alt={product.title + variant.title} src={img} width={120} height={120} />
        </div>
        <div>
          <Link className='  text-sm md:text-base line-clamp-2 font-semibold' href={`${routes.products}/${product.slug}`}>{product.title}</Link>
          <div className=' mt-2 flex gap-1'>
            {variant.attribute_values.map(option => {
              return <Badge key={option.value}>
                {option.value}
              </Badge>
            })}
          </div>
        </div>
      </div>
      <ProductQuantity className=' justify-end md:justify-start' quantity={quantity} handleQuantity={handleQuantity} label={null} disableInput />
      <PriceText price={productOrder.price} className=' hidden  lg:inline-block' />
      <PriceText className=' text-red-500 text-right' price={productOrder.line_price} />
      <Button onClick={() => onDelete?.(productOrder.id)} size="icon" variant="link" className=' absolute bottom-2 md:right-2 md:left-auto left-2' ><CloseCircleIcon /></Button>
    </li>
  )
}
