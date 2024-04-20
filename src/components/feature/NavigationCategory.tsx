import { Category } from '@/types/category'
import React from 'react'
import categoriesJson from "@/data/category.json"
import Link from 'next/link'
import routes from '@/routes'
export default function NavigationCategory() {
  const categories = JSON.parse(JSON.stringify(categoriesJson)) as Category[]

  return (
    <div className=' bg-black py-2'>
      <div className=' container'>
        <ul className=' flex  justify-center gap-8 items-center'>
          {categories.map(category => {
            return (
              <Link href={`/${category.slug}`} key={category.id}>
                <li className=' text-white   hover:text-blue-500 transition-colors'>
                  <h2>{category.title}</h2>

                  {/* <Image src={category.image} alt={category.title}   /> */}
                </li>
              </Link>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
