import { Product, ProductVariant } from '@/types/product'
import React from 'react'
import { Card, CardContent, CardTitle } from '../ui/card'
import Image from 'next/image'
import ProductPrice from './ProductPrice'
import { cn } from '@/lib/utils'


export default function ProductCard({ product }: { product: Product }) {
  const variantMinPrice = findMinPriceVariant(product.variants)
  const secondImage = product.images?.[1]?.src
  return (
    <Card className=' border border-gray-300 group'>
      <CardContent className="flex flex-col gap-2 aspect-square py-4">
        <div className=' relative w-full aspect-square'>
          <Image src={product.images?.[0].src} alt={product.title} width={600} height={600} className={cn(
            "  absolute ", {
            " group-hover:-z-1  group-hover:opacity-0 transition-all duration-300": !!secondImage
          }
          )} />
          {secondImage ? <Image src={secondImage}
            className={cn("absolute transition-all duration-300 opacity-0",
              {
                " group-hover:z-10 group-hover:opacity-100 hover:-translate-y-2": !!secondImage
              })}
            alt={product.title} width={600} height={600}

          /> : null}

        </div>
        <CardTitle className=' text-center  group-hover:text-bule-500 transition-colors' >{product.title}</CardTitle>
        <div className=' flex gap-1'>
          <ProductPrice className='text-red-500 font-bold' price={variantMinPrice.price} />

          {variantMinPrice.compare_at_price ? <ProductPrice price={variantMinPrice.compare_at_price} /> : null}
        </div>
        <div className=''>

        </div>
      </CardContent>
    </Card>
  )
}

function findMinPriceVariant(variants: ProductVariant[]) {
  let minPriceVariant = variants[0];
  let minPrice = Infinity;

  variants.forEach(variant => {
    const price = variant.price;
    if (price < minPrice) {
      minPrice = price;
      minPriceVariant = variant;
    }
  });

  return minPriceVariant;
}