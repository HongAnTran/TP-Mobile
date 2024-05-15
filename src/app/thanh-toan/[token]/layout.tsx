import React from 'react'

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=' bg-gray-100  py-8'>
      <div className=' container'>
        {children}
      </div>
    </div>
  )
}
