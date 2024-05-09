import React from 'react'
import { TypographyP } from '../ui/typography'
import Logo from '../common/Logo'
import SocialList from './SocialList'
import { Button } from '../ui/button'

export default function Footer() {
  return (
    <footer className=' py-10 bg-gray-50 sm:pt-16 lg:pt-24'  >

      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <Logo className=' text-primary' />
            <div className='mt-9'>
              <SocialList />
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Về chúng tôi</p>

            <ul className="mt-6 space-y-4">
              <li>
                <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Cửa hàng </a>
              </li>

              <li>
                <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Features </a>
              </li>

              <li>
                <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Works </a>
              </li>

              <li>
                <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Career </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Help</p>

            <ul className="mt-6 space-y-4">
              <li>
                <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Customer Support </a>
              </li>

              <li>
                <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Delivery Details </a>
              </li>

              <li>
                <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Terms & Conditions </a>
              </li>

              <li>
                <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Privacy Policy </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Đăng ký nhận thông báo khuyến mãi</p>

            <form action="#" method="POST" className="mt-6">
              <div className=' mb-4'>
                <label className="sr-only">Email</label>
                <input type="email" name="email" id="email" placeholder="Enter your email" className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
              </div>

              <Button type="submit" >Đăng ký</Button>
            </form>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <p className="text-sm text-center text-gray-600">© Copyright 2024, All Rights Reserved by TP MOBILE</p>
      </div>

    </footer>
  )
}
