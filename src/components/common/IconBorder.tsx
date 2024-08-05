import React, { ReactNode } from 'react'

export default function IconBorder({ children, ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {


  return <div
    {...props}
    className=' border-2  border-[#cac1b2] flex justify-center items-center rounded-md p-[2px]  w-[32px] h-[32px] '>
    {children}
  </div>
}