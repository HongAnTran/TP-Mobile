import React from 'react'

export default function LayoutContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className=' my-8'>
      <div className=' container'>
        {children}
      </div>
    </div>
  )
}
