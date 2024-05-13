"use client"
import PriceText from '@/components/common/PriceText'
import { TypographyH4 } from '@/components/ui/typography'
import { useShopStore } from '@/providers/shop-store-provider'

export default function Cart() {
  const { cart, isLoadingCard } = useShopStore(state => state)

  if (isLoadingCard) {
    return <p>Loading...</p>
  }

  if (cart.item_count === 0) {
    return <div>Chưa có sản phẩm nào</div>
  }

  return (
    <div>
      <TypographyH4 >{cart.item_count} Sản phẩm</TypographyH4>
      <div className='  grid grid-cols-12 gap-8'>
        <div className=' col-span-8'>

        </div>
        <div className=' col-span-5'>
          <PriceText price={cart.total_price} />
        </div>
      </div>
    </div>
  )
}
