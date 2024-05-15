import Link from '@/components/common/Link'
import Logo from '@/components/common/Logo'
import routes from '@/routes'
import React from 'react'

export default function CheckoutHeader() {
  return (
    <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10">
      <Logo className=' text-primary' />
      <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
        <div className="relative">
          <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
            <li className="flex items-center space-x-3 text-left sm:space-x-4">
              <Link className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700" href={routes.home}
              ><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </Link>
              <span className="font-semibold text-gray-900">Cửa hàng</span>
            </li>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <li className="flex items-center space-x-3 text-left sm:space-x-4">
              <Link href={routes.cart} className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700"
              ><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></Link>
              <span className="font-semibold text-gray-900">Giỏ hàng</span>
            </li>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <li className="flex items-center space-x-3 text-left sm:space-x-4">
              <Link className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2" href="#">3</Link>
              <span className="font-semibold text-gray-900">Thanh toán</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
