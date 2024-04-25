import { Category } from '@/types/category'
import React from 'react'
import categoriesJson from "@/data/category.json"
import routes from '@/routes'
import NavLink from '../common/NavLink'
export default function NavigationCategory() {
  const categories = JSON.parse(JSON.stringify(categoriesJson)) as Category[]

  return (
    <div className=' bg-black  py-3'>
      <div className=' container'>
        <ul className=' flex  justify-center gap-8 items-center'>
          {categories.map(category => {
            return (
              <NavLink scroll href={`${routes.category}/${category.slug}`} key={category.id}  activeClassName='text-blue-500 font-bold'>
                <li className='   text-current   hover:text-blue-500 transition-colors'>
                {category.title}
                  {/* <Image src={category.image} alt={category.title}   /> */}
                </li>
              </NavLink>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
