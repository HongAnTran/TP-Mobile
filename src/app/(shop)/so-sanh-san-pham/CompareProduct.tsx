"use client"
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
import { Product, ProductGroupSpecifications, ProductTypeSpecifications } from '@/types/Product.types'
import PriceText from '@/components/common/PriceText'
import Rating from '@/components/common/Rating'
import Image from 'next/image'
import { convetNumberToPriceVND, fillArrayToLength, findVariantMinPrice } from '@/utils'
import { TypographyH3 } from '@/components/ui/typography'
import CloseCircleIcon from '@/components/icons/CloseCircleIcon'
import useCompareProduct from '@/hooks/useCompareProduct'
import { cn } from '@/lib/utils'
import { Checkbox } from '@/components/ui/checkbox'
import SpesServiceClient from '@/servicesClient/SpesService';

type ProductCompare = Pick<Product, "barcode" | "brand" | "price"> & { category_title: string }

type Key = {
  [K in keyof ProductCompare]?: string;
};
export default function CompareProduct({ types, groups }: { groups: ProductGroupSpecifications[], types: ProductTypeSpecifications[] }) {

  const { productsCompare: products, removeProductToCompare } = useCompareProduct()

  const productsCompare = products.map(product => ({ ...product, category_title: product.category.title, brand: product.brand?.name, price: convetNumberToPriceVND(product.price) }))
  const [isShowDifferent, setIsShowDifferent] = useState(false)

  const { data } = SpesServiceClient.useListMutiple(productsCompare.map(pro => pro.id))
  const keys: Key = {
    price: "Giá",
    brand: "Thương hiệu",
    category_title: "Loại sản phẩm",
    barcode: "Barcode",
  }

  const datasSpecifications = groups.map((item) => {
    const values = productsCompare.map((product, index) => {
      if (data) {
        const i = data[index].find(pro => pro.group_id === item.id)
        return i?.value.toString() || ""
      } else {
        return ""
      }
    });
    return [item.name, ...values]
  })
  // const datasSpecifications  : any[]=  []
  const datasCompare = Object.keys(keys).map((key, index) => {
    // Chuyển key thành kiểu cụ thể
    const typedKey = key as keyof ProductCompare;
    const keyName = keys[typedKey] as string
    const values = productsCompare.map(product => {
      return product[typedKey]?.toString() || ""
    });

    return [keyName, ...values];
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

  function checkIsValid(arr: (string | undefined)[]) {
    if (!arr.length) return true

    const arrCompare = arr.slice(1)

    if (!arrCompare.length) return false

    return arrCompare.filter(item => Boolean(item)).length !== 0
  }


  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="min-w-[170px]">So sánh</TableHead>
          {fillArrayToLength([...productsCompare], 2).map((pro, index) => {
            if (pro) {
              return <TableHead className=' flex-1  text-center min-w-[200px]' key={index}>
                <div className=' flex items-center justify-center gap-4'>
                  <TypographyH3 className=' text-center'> {pro.title}</TypographyH3>
                  <div onClick={() => { removeProductToCompare(pro.id) }}>
                    <CloseCircleIcon className=' hover:cursor-pointer' />
                  </div>
                </div>
              </TableHead>

            }
            return <TableHead className=' hidden min-w-[200px] md:block flex-1 items-center text-center' key={index}>
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
          <TableCell className="min-w-[170px]">
            <div className="items-top flex flex-wrap space-x-2">

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
                    " hidden": (!checkIsDifferent(data) && isShowDifferent) || !checkIsValid(data),
                  })}>
                    {
                      data.map((value: string, index: number) => {
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

        <CardTitle className='   lg:text-base  text-xs   hover:text-blue-500 transition-colors' >{product.title}</CardTitle>
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