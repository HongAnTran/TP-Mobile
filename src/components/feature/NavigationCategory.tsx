"use client"
import { CategoryProduct } from '@/types/categoryProduct'
import { CategoryArtice } from '@/types/categoryArtice'
import React, { useEffect, useState } from 'react'
import categoriesJson from "@/data/categoryProduct.json"
import categoriesArticeJson from "@/data/categoryArtice.json"
import routes from '@/routes'
import NavLink from '../common/NavLink'
import { cn } from '@/lib/utils'


export default function NavigationCategory({ type, className }: { type: "artice" | "product", className?: string }) {


  const [isSticky, setIsSticky] = useState(false)



  const categories = JSON.parse(JSON.stringify(categoriesJson)) as CategoryProduct[]
  const categoriesArtice = JSON.parse(JSON.stringify(categoriesArticeJson)) as CategoryArtice[]

  const data = type === "artice" ? categoriesArtice : categories
  const route = type === "artice" ? routes.articeCategory : routes.category


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
    <div className={cn(' bg-black   text-white  py-3 transition-all ', isSticky ? ' fixed top-0 left-0 right-0 z-50 bg-white text-primary shadow-2xl' : '', className)}>
      <div className=' container'>
        <ul className=' flex  gap-8 items-center justify-center'>
          {data.map(category => {
            return (
              <NavLink scroll href={`${route}/${category.slug}`} key={category.id} activeClassName='text-blue-500 font-bold'>
                <li className='   text-current   hover:text-blue-500 transition-colors'>
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
