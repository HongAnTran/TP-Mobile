import React from 'react'
import Logo from '@/components/common/Logo'
import SearchInput from './SearchInput'
import { PersonIcon } from "@radix-ui/react-icons"
import Link from 'next/link'
import StoreIcon from '../icons/StoreIcon'
import { CartIcon, PhoneFilledIcon } from '../icons'
export default async function Header() {

  return (
    <header className='  bg-black  text-white shadow-md '>
      <div className=' container'>
        <div className=' flex gap-10 items-center h-[80px] '>
          <div className=' flex-shrink-0'>
            <Logo />
          </div>
          <div className=' flex-1 max-w-[400px] '>
            <SearchInput />
          </div>
          <div className=' flex-1 flex  gap-8'>
            <div className=' flex  gap-2   items-center'>
              <PhoneFilledIcon />
              <div>

                <Link href='tel:0886723413' className='  font-medium '>0886723413</Link>
              </div>
            </div>
            <div className=' flex  gap-2   items-center'>
              <StoreIcon />
              <div>
                <Link href="/stores" className='text-sm  font-medium '>Cửa hàng</Link>

              </div>
            </div>

            <div className=' flex  gap-2   items-center'>
              <PersonIcon width={20} height={20} />
              <div>

                <Link href={"/login"} className=' text-sm  font-medium '>Đăng nhập</Link>
              </div>
            </div>
            <div className=' flex  gap-2   items-center'>
              <CartIcon />
              <div>

                <Link href={"/cart"} className=' text-sm  font-medium '>Giỏ hàng</Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  )
}
