"use client"

import { Product } from '@/types/product'
import React, { useState } from 'react'
import { Card, CardBadge, CardContent, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import PriceText from "@/components/common/PriceText"
import { cn } from '@/lib/utils'
import { HeartIcon, StarFilledIcon } from '@radix-ui/react-icons'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { TypographyP, TypographySpan } from '../../ui/typography'
import badgeBG from "../../../../public/productTagBg.png"
import { motion } from "framer-motion";
import { Button } from '../../ui/button'
import { findVariantMinPrice } from '@/utils'
import Modal from '@/components/ui/Modal'
import Link from 'next/link'
import routes from '@/routes'
import ProductQuickView from './ProductQuickView'
import Rating from '../Rating'

export default function ProductCard({ product }: { product: Product }) {
  const variantMinPrice = findVariantMinPrice(product.variants)

  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.div
        initial={{ opacity: 0.2 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Link href={`${routes.products}/${product.slug}`} >

          <Card className=' border border-gray-300 group relative'>
            <CardContent className="flex flex-col gap-2 aspect-square py-4">
              <div className=' relative w-full aspect-square overflow-hidden' >
                <ProductCardImage images={product.images} title={product.title} />
                <Button onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation()
                  setOpen(true)
                }} className='   absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 z-20 transition-transform duration-300 ' >Xem nhanh</Button>
              </div>
              <CardTitle className='   group-hover:text-blue-500 transition-colors' >{product.title}</CardTitle>
              <div className=' flex  items-center gap-2'>
                <PriceText className='text-red-500 font-bold' price={variantMinPrice.price} />
                {variantMinPrice.compare_at_price > 0 ? <PriceText  className='  text-sm line-through text-gray-600' price={variantMinPrice.compare_at_price} /> : null}
              </div>
              <div className=' flex justify-between items-center pt-2 border-t border-gray-200'>
                 { product.rating && <Rating rate={product.rating.rate} count={product.rating.count} />}

                <TooltipProvider>
                  <Tooltip delayDuration={100} disableHoverableContent  >
                    <TooltipTrigger >
                      <HeartIcon className=' text-red-600 w-5 h-5' />
                    </TooltipTrigger>
                    <TooltipContent >
                      <TypographyP>Yêu thích sản phẩm</TypographyP>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardContent>
            <CardBadge className=' top-2 -left-[3px] z-20 '>
              <div className=' h-8 w-20 relative'>
                <Image src={badgeBG} alt='badge' className=' w-full h-full' />
                <div className="  absolute inset-0 h-8 w-20 flex  justify-center items-center ">
                  <TypographySpan className=' text-xs text-white  font-semibold ' >Giảm 10%</TypographySpan>
                </div>
              </div>
            </CardBadge>
          </Card>
        </Link>
      </motion.div>

      <Modal closeButton={null} open={open} onOpenChange={() => setOpen(false)} >
        <ProductQuickView product={product} />
      </Modal>
    </>

  )
}

function ProductCardImage({ images, title }: Pick<Product, "images" | "title">) {
  const firstImage = images?.[0]?.src
  const secondImage = images?.[1]?.src
  return (
    <>
      <Image src={firstImage} alt={title} width={600} height={600} className={cn(
        "  absolute  hover:-translate-y-2 transition-all duration-300",
        {
          " group-hover:-z-1  group-hover:opacity-0 ": !!secondImage
        },
        {
          " group-hover:-z-1  group-hover:opacity-0 transition-all duration-300": !!secondImage
        }
      )} />
      {secondImage ? <Image src={secondImage}
        className={cn("absolute transition-all duration-300 opacity-0",
          {
            " group-hover:z-10 group-hover:opacity-100 hover:-translate-y-2": !!secondImage
          })}
        alt={title} width={600} height={600}
      /> : null}
    </>
  )
}

