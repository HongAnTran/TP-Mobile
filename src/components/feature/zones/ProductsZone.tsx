
import React from 'react'
import { TypographyH3 } from '../../ui/typography'
import ProductCard from '@/components/common/product/ProductCard'
import Link from "@/components/common/Link";
import { Button } from '../../ui/button'
import ProductsServiceApi from '@/services/productService'
import {  ProductZone } from '@/types/Structure.type';
import { cn } from '@/lib/utils';
import { generateGridClasses, sortByRows } from '@/utils/helper';
import ProductCarousel from '@/components/common/product/ProductCarousel';

export default async function ProductsZone({data}: Pick<ProductZone , "data">) {

  const { title, col, rows, type, button, tags, typeCard } = data
  
  const { datas: products } = await ProductsServiceApi.getList({ ids: rows.join(",") })

  if (!products) {
    return null
  }

  const productsSorted = sortByRows(products,"id",rows)
  const gridClasses = generateGridClasses(col);

  if (type === "grid") {
    return <section className=' flex flex-col gap-4'>
      <TypographyH3 className=' text-center uppercase text-primary'>{title}</TypographyH3>
      <div className={cn(gridClasses)}>
        {productsSorted.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
      {button ? <div className=' flex justify-center mt-2'>
        <Link href={button.link || "#"}>
          <Button className=' bg-primary text-white hover:scale-110 transition-all'>{button.label}</Button>
        </Link>
      </div> : null}
    </section>
  }

  if (type === "slider") {
  return  <ProductCarousel products={productsSorted} title={title} />
  }
}
