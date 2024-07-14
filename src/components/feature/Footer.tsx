import React from 'react'
import { TypographyP } from '../ui/typography'
import Logo from '../common/Logo'
import SocialList from './SocialList'
import { Button } from '../ui/button'
import Link from '../common/Link'
import routes from '@/routes'

export default function Footer() {
  return (
    <footer className=' py-10  bg-primary  sm:pt-16 lg:pt-24  '  >

      <div className="container">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-8 gap-y-16 gap-x-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <Logo />
            <div className='mt-9'>
              <SocialList />
            </div>
          </div>

          <div className=' lg:col-span-2'>
            <p className="text-base font-semibold tracking-widest  text-secondary  uppercase">Về chúng tôi</p>

            <ul className="mt-6 space-y-4">
              <li>
                <Link href={routes.stores} className="flex text-lg font-semibold  text-secondary transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Cửa hàng </Link>
              </li>

              <li>
                <Link href={routes.artice} className="flex text-lg font-semibold  text-secondary transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Tin tức </Link>
              </li>

              <li>
                <Link href={routes.stores} className="flex text-lg font-semibold  text-secondary transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Liên hệ </Link>
              </li>

              {/* <li>
                <Link href="#"  className="flex text-lg font-semibold  text-secondary transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Career </Link>
              </li> */}
            </ul>
          </div>

          <div className=' lg:col-span-2'>
            <p className="text-base font-semibold tracking-widest  text-secondary uppercase">Chính sách và bảo mật</p>

            <ul className="mt-6 space-y-4">
              <li>
                <Link href={routes.endow} className="flex text-lg font-semibold  text-secondary transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Ưu đãi tại TP Mobile </Link>
              </li>

              <li>
                <Link href={routes.guaranteePolicy} className="flex text-lg font-semibold  text-secondary transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Chính sách bảo hành </Link>
              </li>
              <li>
                <Link href={routes.changePolicy} className="flex text-lg font-semibold  text-secondary transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Chính sách đổi trả </Link>
              </li>
              {/* <li>
                <Link href={routes.deliveryPolicy} className="flex text-lg font-semibold  text-secondary transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> chính sách giao hàng </Link>
              </li> */}


            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <p className="text-base font-semibold tracking-widest  text-secondary uppercase">Đăng ký nhận thông báo khuyến mãi</p>

            <form action="#" method="POST" className="mt-6">
              <div className=' mb-4'>
                <label className="sr-only">Email</label>
                <input type="email" name="email" id="email" placeholder="Nhập email của bạn" className="block w-full p-4  text-secondary placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
              </div>

              <Button variant="destructive" type="submit" >Đăng ký</Button>
            </form>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <p className="text-base text-center  text-secondary">© Copyright 2024, All Rights Reserved by TP MOBILE</p>
      </div>

    </footer>
  )
}
