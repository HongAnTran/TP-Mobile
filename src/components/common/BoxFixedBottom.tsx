import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

export default function BoxFixedBottom({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <div className={cn('md:hidden fixed  shadow-inner  bottom-0 left-0 right-0 w-ful p-2 pb-4 bg-white  z-40', className)}>{children}</div>
  )
}
