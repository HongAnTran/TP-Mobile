"use client"
import PriceText from '@/components/common/PriceText'
import { TypographyH3, TypographyP, TypographySpan } from '@/components/ui/typography'
import CartItem from './_components/CartItem'
import useCart from '@/hooks/useCart'
import { Checkbox } from '@/components/ui/checkbox'
import { Cart as CartType } from '@/types/cart'
import BoxLayout from './_components/BoxLayout'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast } from '@/components/ui/use-toast'
import routes from '@/routes'
import OrderServiceApi from '@/services/orderService'

export default function Cart() {

  const { cart, isLoadingCard, handleChangeQuantity, handleDeleteItem, handleChangeSelectItem, handleChangeSelectItems } = useCart()

  const router = useRouter()


  function handleCheckAllItems(value: boolean) {
    handleChangeSelectItems(cart.items, value)
  }

  async function handelSubmit() {
    const order = await OrderServiceApi.createOrder(cart)
    router.push(`${routes.checkout}/${order.token}`)
  }


  if (isLoadingCard) {
    return <p>Loading...</p>
  }
  const isCheckAll = !cart.items.some(item => !item.selected)

  if (cart.item_count === 0) {
    return <div>Chưa có sản phẩm nào</div>
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
              <TypographySpan  className='  hidden lg:inline-block'>Giá</TypographySpan>
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
        <BoxLayout >
          <Button className=' w-full' onClick={handelSubmit}>Thanh Toán</Button>
        </BoxLayout>
      </div>
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


function CartTotal({ cart }: { cart: CartType }) {
  return (
    <BoxLayout >
      <TypographyH3 className=' text-center text-red-500 mb-4'>Tạm Tính</TypographyH3>
      <hr />
      <div className=' mt-4'>
        <ul className=' flex flex-col gap-4  '>
          <li className=' flex items-center justify-between'>
            <TypographySpan className=' text-gray-500'>Tạm tính</TypographySpan>
            <PriceText className=' text-sm' price={cart.total_price} />
          </li>
          <li className=' flex items-center justify-between'>
            <TypographySpan className=' text-gray-500'>Khuyến mãi</TypographySpan>
            <PriceText className=' text-sm' price={0} />
          </li>
          {/* <li className=' flex items-center justify-between'>
            <TypographySpan className=' text-gray-500'>Thuế</TypographySpan>
            <PriceText className=' text-sm' price={0} />
          </li> */}
          <li className=' flex items-center justify-between'>
            <TypographySpan className=' text-gray-500'>Vận chuyển</TypographySpan>
            <PriceText className=' text-sm' price={0} />
          </li>
          <hr />

          <li className=' flex items-center justify-between'>
            <TypographySpan className=' font-bold'>Tổng tiền:</TypographySpan>
            <div className=' flex gap-1 items-center'>
              <PriceText className=' text-sm text-red-500 font-bold' price={cart.total_price} />
              <TypographySpan > ({cart.items.filter(item => item.selected).length}) </TypographySpan>
            </div>
          </li>
        </ul>
      </div>
    </BoxLayout>
  )
}

