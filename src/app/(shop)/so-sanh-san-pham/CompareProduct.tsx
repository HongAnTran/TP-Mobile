"use client"

import Breadcrumbs from '@/components/ui/Breadcrumbs'
import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import Link from "@/components/common/Link";
import routes from '@/routes'
import { Product, ProductTypeSpecifications } from '@/types/Product.types'
import PriceText from '@/components/common/PriceText'
import Rating from '@/components/common/Rating'
import Image from 'next/image'
import { fillArrayToLength, findVariantMinPrice } from '@/utils'
import { TypographyH3 } from '@/components/ui/typography'
import CloseCircleIcon from '@/components/icons/CloseCircleIcon'
import useCompareProduct from '@/hooks/useCompareProduct'
import { cn } from '@/lib/utils'
import { Checkbox } from '@/components/ui/checkbox'

type ProductCompare = Pick<Product, "barcode" | "brand"  > & { category_title: string }

type Key = {
  [K in keyof ProductCompare]?: string;
};
export default function CompareProduct({ types }: { types: ProductTypeSpecifications[] }) {

  const { productsCompare: products, removeProductToCompare } = useCompareProduct()

  const productsCompare = products.map(product => ({ ...product, category_title: product.category.title }))
  const [isShowDifferent, setIsShowDifferent] = useState(false)

  const keys: Key = {
    brand: "Thương hiệu",
    category_title: "Loại sản phẩm",
    barcode: "Barcode",
  
  }

  // const datasSpecifications = types.map((item) => {
  //   const values = productsCompare.map(product => {
  //     const i = product.specifications.find(pro => pro.group_id === item.id)
  //     return i?.value.toString() || ""
  //   });
  //   return [item.name, ...values]
  // })
  const datasSpecifications  : any[]=  []
  const datasCompare = Object.keys(keys).map((key, index) => {
    // Chuyển key thành kiểu cụ thể
    const typedKey = key as keyof ProductCompare;
    const values = productsCompare.map(product => {
      return product[typedKey]?.toString() || ""
    });

    return [keys[typedKey], ...values];
  })

  function checkIsDifferent(arr: (string | undefined)[]) {
    if (!arr.length) return true

    const arrCompare = arr.slice(1)

    if (!arrCompare.length) return true


    const firstElement = arrCompare[0];
    for (let i = 1; i < arrCompare.length; i++) {
      if (arrCompare[i] !== firstElement) {
        return true;
      }
    }
    return false;
  }


  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">So sánh</TableHead>
          {fillArrayToLength([...productsCompare], 2).map((pro, index) => {
            if (pro) {
              return <TableHead className=' flex-1  text-center' key={index}>
                <div className=' flex items-center justify-center gap-4'>
                  <TypographyH3 className=' text-center'> {pro.title}</TypographyH3>
                  <div onClick={() => { removeProductToCompare(pro.id) }}>
                    <CloseCircleIcon className=' hover:cursor-pointer' />
                  </div>
                </div>
              </TableHead>

            }
            return <TableHead className=' hidden md:block flex-1 items-center text-center' key={index}>
              <div className=' flex justify-center items-center'>
                <TypographyH3> Thêm sản phẩm</TypographyH3>
                {/* <PlusCircledIcon /> */}
              </div>
            </TableHead>
          })}
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow >
          <TableCell className="w-[200px]">
            <div className="items-top flex space-x-2">

              <Checkbox id="terms1" onCheckedChange={(check) => { setIsShowDifferent(!!check.valueOf()) }} />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="terms1"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Chỉ xem điểm khác biệt
                </label>

              </div>
            </div>
          </TableCell>
          {
            fillArrayToLength([...productsCompare], 2).map((product, index) => {
              if (product) {
                return (
                  <TableCell key={index} className=' flex-1 '>
                    <ProductCardCompare product={product} />
                  </TableCell>
                )
              }
              return <>
                <TableCell key={index} className=' flex-1 '>
                  {/* <div className=' text-center'>
              <PlusCircledIcon />
              </div> */}
                </TableCell>
              </>
            })
          }
        </TableRow>
        {productsCompare.length > 0 &&
          <>
            {
              [...datasCompare, ...datasSpecifications].map((data, index) => {
                return (
                  <TableRow key={index} className={cn({
                    "bg-blue-200": checkIsDifferent(data),
                    " hidden": !checkIsDifferent(data) && isShowDifferent,
                  })}>
                    {
                      data.map((value : string, index : number) => {
                        return (<TableCell key={index}>
                          <li className={cn(' flex ', index !== 0 && " justify-center")}>
                            {value?.toString()}
                          </li>
                        </TableCell>)
                      })
                    }
                  </TableRow>
                )
              })
            }
          </>
        }
      </TableBody>
    </Table>
  )
}


function ProductCardCompare({ product }: { product: Product }) {
  const variantMinPrice = findVariantMinPrice(product.variants)

  return <Card className=''>
    <CardContent className="flex flex-col gap-2 justify-center items-center   py-4">
      <div className=' md:w-[200px] md:h-[200px]  w-[80px] h-[80px]'>
        <Image src={product.images[0].url} alt={product.title} width={200} height={200} className=' h-full' />
      </div>

      <Link href={`${routes.products}/${product.slug}`} >

        <CardTitle className='   hover:text-blue-500 transition-colors' >{product.title}</CardTitle>
      </Link>

      <div className=' flex  items-center gap-2'>
        <PriceText className='text-red-500 font-bold' price={variantMinPrice.price} />
        {variantMinPrice.compare_at_price > 0 ? <PriceText className='  text-sm line-through text-gray-600' price={variantMinPrice.compare_at_price} /> : null}
      </div>
      <div className=' flex justify-between items-center pt-2 border-t border-gray-200'>
        {/* {product.rating && <Rating rate={product.rating.rate} count={product.rating.count} />} */}
      </div>
    </CardContent>
  </Card>
}