import React, { ReactNode } from 'react'

export default function IconBorder({ children }: { children: ReactNode }) {


  return <div className=' border-2  border-[#cac1b2] flex justify-center items-center rounded-md p-[2px]  w-[40px] h-[40px] '>
    {children}
  </div>
}