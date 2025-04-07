
import React from 'react'
import { TypographyH2 } from '../../ui/typography'
import ProductCard from '@/components/common/product/ProductCard'
import Link from "@/components/common/Link";
import { Button } from '../../ui/button'
import ProductsServiceApi from '@/services/ProductsService'
import {  ProductZone } from '@/types/Structure.type';
import { cn } from '@/lib/utils';
import { generateGridClasses, sortByRows } from '@/utils/helper';
import ProductCarousel from '@/components/common/product/ProductCarousel';
import AppleIcon from '@/components/icons/AppleIcon';

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
      <div className=' flex justify-between items-center'>
        <div className=' flex  gap-1'>
        <AppleIcon className=' w-5 h-5 lg:w-[26] lg:h-[26px]'/>
        <TypographyH2 className=' text-heading text-sm md:text-lg lg:text-2xl text-center uppercase'>
        {title}</TypographyH2>
        </div>
     
     <div className=' flex items-center gap-2'>
      {tags ? tags.map(tag=>{
        return (
          <Link key={tag.name} href={tag.link || "#"}>
          <span  className='  bg-white border border-[#ccc] text-[#444]  text-sm px-[10px] py-[5px] rounded-[10px]'>{tag.name}</span>
          </Link>
        )
      }) :null}
     {button ? 
        <Link href={button.link || "#"}>
          <Button variant="link">{button.label}</Button>
        </Link>
       : null}
     </div>
      </div>
      <div className={cn(gridClasses)}>
        {productsSorted.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
   
    </section>
  }

  if (type === "slider") {
  return  <ProductCarousel products={productsSorted} title={title} />
  }
}
