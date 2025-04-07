// "use client"

import { Product, ProductInList } from '@/types/Product.types'
import { Card, CardBadge, CardContent, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import PriceText from "@/components/common/PriceText"
import { cn } from '@/lib/utils'

import { TypographySpan } from '../../ui/typography'
import badgeBG from "../../../../public/productTagBg.png"
// import { Button } from '../../ui/button'
// import Modal from '@/components/ui/Modal'
import Link from "@/components/common/Link";

import routes from '@/routes'
// import ProductQuickView from './ProductQuickView'
import ButtonWishlist from '@/components/feature/buttons/ButtonWishlist'
import Rating from '../Rating'

export default function ProductCard({ product, className }: { product: ProductInList, className?: string }) {
  // const [open, setOpen] = useState(false)
  return (
    <>

      {/* <motion.div
        initial={{ opacity: 0.2 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      > */}
      <Card className={cn(' border border-gray-300 group relative   hover:shadow-2xl', className)}>
        <CardContent className="flex flex-col   gap-2 h-full py-4 p-2 lg:p-4">
            <Link href={`${routes.products}/${product.slug}`}  className=' relative w-full aspect-square overflow-hidden p-[2px] flex-shrink-0'>
              <ProductCardImage images={product.images} title={product.title} />
            </Link>
            {/* <Button onClick={(e) => {
              e.preventDefault();
              e.stopPropagation()
              setOpen(true)
            }}
             className=' hidden  lg:block   absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 z-20 transition-transform duration-300 ' >Xem nhanh
             </Button> */}
          <div className=' flex-1 flex flex-col gap-1  justify-between'>
            <Link href={`${routes.products}/${product.slug}`}  className=' flex-shrink-0'>
              <CardTitle className='  text-sm  hover:text-blue-500 transition-colors line-clamp-2' >{product.title}</CardTitle>
            </Link>
            <ProductCardPrice  product={product} />
          </div>

          <div className=' flex justify-between items-center mt-auto pt-2 border-t border-gray-200'>
            <Rating rate={product.average_rating} count={product.rating_count} />
            <ButtonWishlist id={product.id} />
          </div>
        </CardContent>
        <ProductCardDiscount product={product} />
        <CardBadge className='  right-2 top-2 z-20'>
          <div className=' shadow-md  w-fit  px-1 py-[2px] rounded-lg   bg-white border border-red-600'>
            <TypographySpan className=' text-xs   text-red-600 font-semibold' >Trả góp 0%</TypographySpan>
          </div>
        </CardBadge>
      </Card>
      {/* </motion.div> */}

      {/* <Modal closeButton={null} open={open} onOpenChange={() => setOpen(false)} >
        <ProductQuickView product={product} />
      </Modal> */}
    </>

  )
}

function ProductCardImage({ images, title }: Pick<Product, "images" | "title">) {

  if (!images.length) {

    return <div className=' w-full h-full bg-gray-400'></div>
  }
  const firstImage = images?.[0]
  // const secondImage = images?.[1]
  return (
    <>
      <Image src={firstImage.url} alt={title} width={400} height={400} className={cn(
        "  absolute  md:hover:-translate-y-2 transition-all duration-300  w-full  aspect-square  object-contain",
        // {
        //   " group-hover:-z-1  group-hover:opacity-0 ": !!secondImage
        // },
        // {
        //   " group-hover:-z-1  group-hover:opacity-0 transition-all duration-300": !!secondImage
        // }
      )} />
      {/* {secondImage ? <Image src={secondImage.url}
        className={cn("absolute transition-all duration-300 opacity-0 w-full   aspect-square object-contain",
          {
            " group-hover:z-10 group-hover:opacity-100 hover:-translate-y-2": !!secondImage
          })}
        alt={title} width={600} height={600}
      /> : null} */}
    </>
  )
}


function ProductCardPrice({ product }: { product: ProductInList }) {
  const priceSale = product.compare_at_price - product.price
  const isSale = product.compare_at_price && product.compare_at_price > product.price
  return (
    <>

    <div className='mb-1 flex  md:flex-row flex-col-reverse  md:items-center gap-2'>
      <PriceText className='text-red-600 font-bold' price={product.price} />
      {isSale ? <PriceText className=' line-through  text-gray-600' price={product.compare_at_price} /> : null}
    </div>
    {isSale ? <div className=' flex items-center gap-1'>
      <span className=' text-sm text-gray-500'>Giảm</span>
      <PriceText className='text-blue-500' price={priceSale} />
    </div>
    : null}
</>
  )


}


function ProductCardDiscount({ product }: { product: ProductInList }) {


  // if (!product.compare_at_price || product.compare_at_price <= product.price) return (<CardBadge className=' top-2 -left-[3px] z-20 '>
  //   <div className=' h-8 w-20 relative'>
  //     <Image src={badgeBG} alt='badge' className=' w-full h-full' />
  //     <div className="  absolute inset-0 h-8 w-20 flex  justify-center items-center ">
  //       <TypographySpan className=' text-xs text-white  font-semibold ' >Trả góp 0%</TypographySpan>
  //     </div>
  //   </div>

  // </CardBadge>)

  const discountPercent = ((product.compare_at_price - product.price) / product.compare_at_price) * 100

  if (!product.compare_at_price || product.compare_at_price <= product.price) return null
  return (<CardBadge className=' top-2 -left-[3px] z-20 '>
    <div className=' flex flex-col gap-1'>

      <div className=' h-8 w-20 relative'>
        <Image src={badgeBG} alt='badge' className=' w-full h-full' />
        <div className="  absolute inset-0 h-8 w-20 flex  justify-center items-center ">
          <TypographySpan className=' relative -top-[2px] text-xs text-white  font-semibold ' >Giảm {Math.round(discountPercent)}%</TypographySpan>
        </div>
      </div>

      {/* <div className=' h-8 w-20 relative'>
        <Image src={badgeBG} alt='badge' className=' w-full h-full' />
        <div className="  absolute inset-0 h-8 w-20 flex  justify-center items-center ">
          <TypographySpan className=' text-xs text-white  font-semibold ' >Trả góp 0%</TypographySpan>
        </div>
      </div> */}
    </div>
  </CardBadge>)
}
