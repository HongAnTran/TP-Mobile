import { TypographyH3, TypographySpan } from "@/components/ui/typography";
import BoxLayout from "./BoxLayout";
import { Cart } from "@/types/cart";
import PriceText from "@/components/common/PriceText";

export default function CartTotal({ cart }: { cart: Cart }) {
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
            <PriceText className=' text-sm' notAutoChange price={0} />
          </li>
          <li className=' flex items-center justify-between'>
            <TypographySpan className=' text-gray-500'>Vận chuyển</TypographySpan>
            <PriceText className=' text-sm' price={0} notAutoChange />
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

