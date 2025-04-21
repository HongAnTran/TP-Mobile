"use client"
import { CategoryProduct } from '@/types/categoryProduct'
import React, { useEffect, useState } from 'react'
import routes from '@/routes'
import NavLink from '../common/NavLink'
import { cn } from '@/lib/utils'
import Image from 'next/image'
export default function NavigationCategoryClient({ className, data }: { data: CategoryProduct[], className?: string }) {
  const [isSticky, setIsSticky] = useState(false)
  const handleScroll = () => {
    if (window.scrollY > 160) {
      setIsSticky(true)
    }
    else {
      setIsSticky(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <nav className={cn(' hidden md:block px-4   bg-secondary text-primary     py-2 transition-all ', isSticky ? ' fixed top-0 left-0 right-0 z-50  shadow-2xl' : '', className)}>
      <div className=' container '>
        <ul className=' flex flex-nowrap   overflow-y-auto gap-4 lg:gap-8 items-center justify-center '>
          {data.map(category => {
            return (
              <li key={category.id}>
                <NavLink className='  flex gap-[2px] flex-col items-center ' scroll absolute href={`${routes.category}/${category.slug}`} activeClassName='text-blue-500    font-bold'>
                  {category?.image?.includes("https") ? <Image className=' w-[22px] h-[28px]' alt="icon" src={category.image} width={50} height={50} /> : null}
                  <span className='  whitespace-nowrap text-current    text-sm font-bold  hover:text-blue-500 transition-colors'>
                    {category.title}
                  </span>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
