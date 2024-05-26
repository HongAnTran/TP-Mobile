
"use client"
import useCompareProduct from '@/hooks/useCompareProduct'
import routes from '@/routes'
import React from 'react'
import { TypographyP, TypographySpan } from '../ui/typography'
import Image from 'next/image'
import compareIMG from "../../../public/compare.png"
import { Button } from '../ui/button'
import { CaretDownIcon } from '@radix-ui/react-icons'
import { fillArrayToLength } from '@/utils'
import { AddSquareIcon } from '../icons'
import CloseCircleFilledIcon from '../icons/CloseCircleFilledIcon'
import SETTINGS from '@/consts/settings'
import { useRouter } from 'next/navigation'
import { Sheet, SheetContent, SheetHeader } from '../ui/sheet'
import Logo from '../common/Logo'
import { getDeviceType } from '@/utils/device'
import useGetTypeDevice from '@/hooks/useGetTypeDevice'

export default function CompareProduct() {
  const { productsCompare, open, setOpen, removeProductToCompare, removeAll } = useCompareProduct()
  const type = useGetTypeDevice()
  const router = useRouter()
  if (!productsCompare.length) {
    return null
  }

  if (!open) {
    return <div onClick={() => setOpen(true)} className=' z-50 cursor-pointer   fixed  bottom-40 left-10 md:bottom-20 md:left-20 w-[40px] h-[40px] rounded-full shadow-xl bg-black text-white'>
      <div className=' w-full h-full flex items-center justify-center relative'>

        <Image src={compareIMG} alt='compare' width={40} height={40} />
        <TypographySpan className=' flex items-center justify-center  rounded-full w-5 h-5   bg-red-600 absolute top-0 -right-1 text-white'>{productsCompare.length}</TypographySpan>
      </div>
    </div>
  }

  return (<>
    <div className=' hidden md:block  fixed bottom-0 left-0 right-0  z-50'>
      <div className=' container bg-white  shadow-2xl border  rounded-t-md relative'>
        <div className='  grid grid-cols-3'>
          {fillArrayToLength([...productsCompare], 2).map((product, index) => {
            if (!product) {
              return <div key={index} className=' col-span-1 border border-gray-300 shadow-sm p-2 flex flex-col justify-center items-center'>
                <div className=' flex  cursor-pointer items-center gap-2'>
                  <TypographyP >Thêm sản phẩm </TypographyP> <AddSquareIcon />
                </div>
              </div>
            }

            return <div key={product.id} className=' relative col-span-1 border border-gray-300 shadow-sm p-2 flex flex-col justify-center items-center'>
              <Image src={product.image.src} alt={product.title} width={100} height={100} />
              <TypographyP >{product.title}</TypographyP>

              <Button variant="link" onClick={() => removeProductToCompare(product.id)} className='  p-0 w-fit absolute top-2 right-2 cursor-pointer'>
                <CloseCircleFilledIcon />
              </Button>
            </div>
          })}
          <div className=' col-span-1 border border-gray-300 shadow-sm p-2 flex flex-col justify-center items-center'>
            <div className=' flex gap-2'>


              <Button disabled={productsCompare.length < SETTINGS.MAX_COMPARE_PRODUCT} onClick={() => {
                setOpen(false)
                router.push(routes.compareProduct)
              }}>
                So sánh ngay
              </Button>

              <Button variant="ghost" onClick={removeAll} >Xóa tất cả</Button>
            </div>
          </div>
        </div>

        <Button className=' absolute bottom-full right-0' onClick={() => setOpen(false)}>
          Thu gọn <CaretDownIcon />
        </Button>
      </div>
    </div>

    <div className=' block md:hidden'>

      <Sheet open={open && type === "mobile"} onOpenChange={(open) => setOpen(open)} >
        <SheetContent className=' block md:hidden'>
          <SheetHeader>
            <Logo className=' text-primary' />
          </SheetHeader>
          <hr />
          <ul className=' flex flex-col gap-2'>
            {fillArrayToLength([...productsCompare], 2).map((product, index) => {
              if (!product) {
                return <div key={index} className=' col-span-1 border border-gray-300 shadow-sm p-2 flex flex-col justify-center items-center'>
                  <div className=' flex  cursor-pointer items-center gap-2'>
                    <TypographyP >Thêm sản phẩm </TypographyP> <AddSquareIcon />
                  </div>
                </div>
              }

              return <div key={product.id} className=' relative col-span-1 border border-gray-300 shadow-sm p-2 flex flex-col justify-center items-center'>
                <Image src={product.image.src} alt={product.title} width={100} height={100} />
                <TypographyP >{product.title}</TypographyP>

                <Button variant="link" onClick={() => removeProductToCompare(product.id)} className='  p-0 w-fit absolute top-2 right-2 cursor-pointer'>
                  <CloseCircleFilledIcon />
                </Button>
              </div>
            })}
            <div className=' border border-gray-300 shadow-sm p-2 flex flex-col justify-center items-center'>
              <div className=' flex gap-2'>


                <Button disabled={productsCompare.length < SETTINGS.MAX_COMPARE_PRODUCT} onClick={() => {
                  setOpen(false)
                  router.push(routes.compareProduct)
                }}>
                  So sánh ngay
                </Button>

                <Button variant="ghost" onClick={removeAll} >Xóa tất cả</Button>
              </div>
            </div>
          </ul>
        </SheetContent>
      </Sheet>


    </div>

  </>

  )
}
