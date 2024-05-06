import React from 'react'
import {  TypographyP } from '../ui/typography'
import Logo from '../common/Logo'
import SocialList from './SocialList'

export default function Footer() {
  return (
    <footer className=' bg-primary h-[200px]'  >
      <div className=' container  h-full py-4 '>
        <div className='   grid grid-cols-12'>
          <div className=' col-span-3'>
            <Logo />
            <div className=' mt-2'>
          
            <SocialList  itemClass=' w-6 h-6'/>
              </div>
          </div>
          {/* <div className=' col-span-3'>
          
          </div>
          <div className=' col-span-3'>
           
          </div>
          <div className=' col-span-3'>
         
          </div> */}
        </div>
      </div>
    </footer>
  )
}
