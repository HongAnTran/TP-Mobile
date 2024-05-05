"use client"

import Breadcrumbs from '@/components/ui/Breadcrumbs'
import useCompareProduct from '@/hooks/useCompareProduct'
import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import ProductsServiceApi from '@/services/productService'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import routes from '@/routes'
import { Product, ProductTypeSpecifications } from '@/types/product'
import PriceText from '@/components/common/PriceText'
import Rating from '@/components/common/Rating'
import Image from 'next/image'
import { findVariantMinPrice } from '@/utils'
import typesJson from "@/data/tagType.json"
import { TypographySpan } from '@/components/ui/typography'
import { PlusCircledIcon } from '@radix-ui/react-icons'

export default function CompareProductPage() {
  const { removeProduct, products } = useCompareProduct()
  const types = JSON.parse(JSON.stringify(typesJson)) as ProductTypeSpecifications[]

  // const products = await ProductsServiceApi.getList({ limit: 1 })

  function fillArrayToLength(arr: any[], length: number) {
    while (arr.length < length) {
      arr.push(null);
    }
    return arr;
  }

  return (
    <div className=' my-8'>

      <div className=' container'>
        <Breadcrumbs breadcrumbsList={[
          {
            label: "So sánh sản phẩm",
            isActive: true
          }]} />
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">So sánh</TableHead>
              {fillArrayToLength([...products], 2).map((pro, index) => {
                if (pro) {
                  return <TableHead className=' flex-1  text-center' key={index}>{pro.title}</TableHead>

                }
                return <TableHead className=' flex-1  text-center' key={index}>Thêm sản phẩm</TableHead>
              })}
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow >
              <TableCell className="w-[200px]"></TableCell>
              {
                fillArrayToLength([...products], 2).map((product, index) => {
                  if (product) {
                    return (
                      <TableCell key={index}   className=' flex-1 '>
                        <ProductCardCompare product={product} />
                      </TableCell>
                    )
                  }

                  return <>
                    <TableCell key={index} className=' flex-1 '>
                    <div className=' text-center'>
                    <PlusCircledIcon />
                    </div>
                    </TableCell>
                  </>


                })
              }
            </TableRow>
            {products.length > 0 && types.map(type => {
              return (<TableRow key={type.id}>
                <TableCell>{type.name}</TableCell>
                {
                  products.map(product => {
                    return (
                      <TableCell className=' text-center' key={product.id}>
                        {product.specifications.filter((item) => item.type_id === type.id).map(item => {
                          return <li className=' flex  items-center justify-between ' key={item.id}><TypographySpan className=' font-bold'>{item.name} </TypographySpan> <TypographySpan >{item.value} </TypographySpan></li>
                        })}
                      </TableCell>
                    )
                  })
                }

              </TableRow>)
            })}
          </TableBody>
        </Table>

      </div>
    </div>
  )
}


function ProductCardCompare({ product }: { product: Product }) {
  const variantMinPrice = findVariantMinPrice(product.variants)

  return <Card className=''>
    <CardContent className="flex flex-col gap-2 justify-center items-center   py-4">

      <Image src={product.image.src} alt={product.title} width={200} height={200} />

      <Link href={`${routes.products}/${product.slug}`} >

        <CardTitle className='   hover:text-blue-500 transition-colors' >{product.title}</CardTitle>
      </Link>

      <div className=' flex  items-center gap-2'>
        <PriceText className='text-red-500 font-bold' price={variantMinPrice.price} />
        {variantMinPrice.compare_at_price > 0 ? <PriceText className='  text-sm line-through text-gray-600' price={variantMinPrice.compare_at_price} /> : null}
      </div>
      <div className=' flex justify-between items-center pt-2 border-t border-gray-200'>
        {product.rating && <Rating rate={product.rating.rate} count={product.rating.count} />}
      </div>
    </CardContent>
  </Card>
}