"use client"
import { CategoryProduct } from '@/types/categoryProduct'
import React, { useEffect, useState } from 'react'
import routes from '@/routes'
import NavLink from '../common/NavLink'
import { cn } from '@/lib/utils'
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
    <div className={cn(' hidden md:block bg-black   text-white  py-3 transition-all ', isSticky ? ' fixed top-0 left-0 right-0 z-50 bg-white text-primary shadow-2xl' : '', className)}>
      <div className=' container'>
        <ul className=' flex flex-nowrap   overflow-y-auto gap-4 lg:gap-8 items-center justify-center'>
          {data.map(category => {
            return (
              <NavLink scroll absolute href={`${routes.category}/${category.slug}`} key={category.id} activeClassName='text-blue-500    font-bold'>
                <li className='    whitespace-nowrap text-current   hover:text-blue-500 transition-colors'>
                  {category.title}

                </li>
              </NavLink>
            )
          })}
        </ul>
      </div>
    </div>
  )
}