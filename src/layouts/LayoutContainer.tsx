import { cn } from '@/lib/utils'
import React from 'react'

export default function LayoutContainer({ children , className }: { children: React.ReactNode   , className?: string }) {
  return (
    <div className=' mb-8'>
      <div className={cn("container" , className)}>
        {children}
      </div>
    </div>
  )
}
