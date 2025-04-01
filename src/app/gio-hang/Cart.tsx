"use client"
import PriceText from '@/components/common/PriceText'
import { TypographyH3, TypographyH4, TypographySpan } from '@/components/ui/typography'
import CartItem from './_components/CartItem'
import useCart from '@/hooks/useCart'
import { Checkbox } from '@/components/ui/checkbox'
import BoxLayout from './_components/BoxLayout'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast, useToast } from '@/components/ui/use-toast'
import routes from '@/routes'
import OrderServiceClientApi from '@/services/client/orderService'
import DialogUi from '@/components/common/Dialog'
import { Skeleton } from '@/components/ui/skeleton'
import Image from 'next/image'
import Link from '@/components/common/Link'
import CartTotal from './_components/CartTotal'
import BoxFixedBottom from '@/components/common/BoxFixedBottom'


export default function Cart() {

  const { cart, isLoadingCard, handleChangeQuantity, handleDeleteItem, handleChangeSelectItem, handleChangeSelectItems } = useCart()
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  function handleCheckAllItems(value: boolean) {
    handleChangeSelectItems(cart.items, value)
  }

  async function handelSubmit() {
    try {
      if (cart.items.filter(item => item.selected).some(item => item.line_price === 0)) {
        setOpen(true)
        return
      }
      const order = await OrderServiceClientApi.createOrderClient(cart)
      router.push(`${routes.checkout}/${order.token}`)
    } catch (error) {
      toast({
        title: "Đã có lỗi xảy ra vui lòng thử lại trong ít phút"
      })
    }
  }


  if (isLoadingCard) {
    return <div className='  grid grid-cols-12 gap-4 mt-4 '>
      <div className=' lg:col-span-9  col-span-12 h-full'>
        <Skeleton className=' h-[500px] w-full' />
      </div>
      <div className=' lg:col-span-3 col-span-12 flex flex-col gap-4'>
        <Skeleton className=' h-[500px] w-full' />

      </div>
    </div>
  }

  const isCheckAll = !cart.items.some(item => !item.selected)
  const isValid = cart.items.filter(item => item.selected).length > 0

  if (cart.item_count === 0) {
    return <div className=' flex justify-center'>
      <div>
        <TypographyH4 className=' text-center font-bold  mb-4'>Bạn chưa có sản phẩm nào trong giỏ hàng</TypographyH4>
        <Image width={400} height={400} alt='Giỏ hàng trống' src="/cartemty.jpg" />
        <div className=' flex justify-center mt-4'>
          <Link href={`${routes.category}`} >
            <Button >Mua sắm ngay</Button>
          </Link>
        </div>
      </div>
    </div>
  }




  return (
    <div className='  grid grid-cols-12 gap-4 mt-4 '>
      <div className=' lg:col-span-9  col-span-12 h-full'>
        <BoxLayout className=' h-full flex flex-col'>
          <div className=' mb-4 flex items-center gap-2 '>
            <Checkbox checked={isCheckAll} onCheckedChange={(value) => {
              handleCheckAllItems(!!value.valueOf())
            }} /> <TypographyH3>Chọn Tất Cả</TypographyH3>     <TypographySpan >({cart.item_count} Sản phẩm)</TypographySpan>
          </div>
          <div className=' hidden mb-4 md:flex items-center  gap-2 '>
            <div className=' min-w-[260px]  lg:min-w-[400px] max-w-[400px] flex-shrink-0  pl-4'>
              <TypographySpan className='' >Chi Tiết</TypographySpan>
            </div>
            <div className=' flex  flex-1 justify-around'>
              <TypographySpan >Số Lượng</TypographySpan>
              <TypographySpan className='  hidden lg:inline-block'>Giá</TypographySpan>
              <TypographySpan  >Tổng</TypographySpan>
            </div>
          </div>
          <ul className=' max-h-[340px] flex-1 overflow-auto px-2'>
            {cart.items.map((item) => {
              return <CartItem
                key={item.id}
                product={item}
                onDelete={handleDeleteItem}
                onChangeQuantity={(quantity) => handleChangeQuantity(item, quantity)}
                onChangeSelect={handleChangeSelectItem}
              />
            })}
          </ul>
          <div className=' mt-4'>
            <Button variant="outline" onClick={() => { router.back() }}>Quay về</Button>
          </div>
        </BoxLayout>

      </div>
      <div className=' lg:col-span-3 col-span-12 flex flex-col gap-4'>
        <CartCoupon />
        <CartTotal cart={cart} />
        <BoxLayout className='  hidden md:block '>
          <Button disabled={!isValid} className=' w-full text-white  bg-red-500' onClick={handelSubmit}>Mua hàng</Button>
        </BoxLayout>

        <BoxFixedBottom > <Button disabled={!isValid} onClick={handelSubmit} className='text-white font-bold uppercase flex gap-2  w-full bg-red-500'>
          Mua hàng{" "}

          <span className=' md:hidden'>

            ( <PriceText notAutoChange className=' text-sm text-white font-bold' price={cart.total_price} />)
          </span>
          <span className=' md:hidden'>
            ( {cart.item_count} )
          </span>
        </Button></BoxFixedBottom>
      </div>

      <DialogUi open={open} onClose={() => setOpen(false)} >
        <p className=' text-center  text-lg'>Rất tiếc trong giỏ hàng của bạn có sản phẩm có giá liên hệ. Vui lòng gọi <b>(0347.907.042)</b> để đặt mua</p>
      </DialogUi>
    </div>

  )
}



function CartCoupon() {
  const [code, setCode] = useState("")

  function onSubmitCoupon(code: string) {
    if (!code) {
      toast({
        title: "Vui lòng nhập mã giảm giá!"
      })
      return
    }
    toast({
      title: "Mã giảm giá không đúng !"
    })

  }
  return (
    <BoxLayout >
      <TypographyH3 className=' text-center text-red-500'>Mã Giảm Giá</TypographyH3>
      <hr />
      <div className=' mt-4 flex flex-col gap-4'>
        <Input value={code} onChange={(e) => setCode(e.target.value)} placeholder='Nhập mã giảm giá của bạn' />
        <Button variant="outline" className=' self-end w-full' onClick={() => onSubmitCoupon(code)}>Sử Dụng Mã</Button>
      </div>
    </BoxLayout>
  )
}


