"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons'
import React from 'react'

export interface ProductQuantityProps {
  quantity: number,
  handleQuantity?: {
    add?: () => void;
    minus?: () => void;
    change?: (quantity: number) => void;
  }
}

export default function ProductQuantity({ quantity, handleQuantity }: ProductQuantityProps) {

  return (
    <div className=' flex gap-4  items-center' >
      <label className=' text-gray-700 font-semibold min-w-[115px]'>Số lượng:</label>
      <div className=' flex h-[30px] '>
        <Button onClick={handleQuantity?.minus} className=' w-[30px] h-full p-0 rounded-none  rounded-l  bg-white border border-gray-500' ><MinusIcon className=' text-gray-800' /></Button>
        <Input value={quantity} onChange={(e) => {
          const value = Number(e.target.value)
          if (!isNaN(value)) {
            handleQuantity?.change?.(Number(e.target.value))
          }else{
            handleQuantity?.change?.(1)
          }
        }} className=' focus:border-none text-center w-[50px] h-full border-x-0 border-y border-gray-500 rounded-none' />
        <Button onClick={handleQuantity?.add} className=' w-[30px] h-full p-0   rounded-none  rounded-r bg-white border border-gray-500' ><PlusIcon className=' text-gray-800' /></Button>
      </div>
    </div>

  )
}
