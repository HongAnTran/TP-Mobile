"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons'
import React from 'react'

export interface ProductQuantityProps {
  quantity: number,
  handleQuantity?: {
    add?: () => void;
    minus?: () => void;
    change?: (quantity: number) => void;
  }
  className?: string
  label?: string | null
  disableInput?: boolean
}

export default function ProductQuantity({ quantity, handleQuantity, label = "Số lượng:", disableInput = false, className }: ProductQuantityProps) {

  return (
    <div className={cn(' flex gap-4  items-center', className)} >
      {label ? <label className=' text-gray-700 font-semibold min-w-[115px]'>{label}</label> : null}
      <div className=' flex h-[30px] '>
        <Button onClick={handleQuantity?.minus} className=' w-[30px] h-full p-0 rounded-none  rounded-l  bg-white border border-gray-500' ><MinusIcon className=' text-gray-800' /></Button>
        <Input
          disabled={disableInput}
          value={quantity} onChange={(e) => {
            if (disableInput) return
            const value = Number(e.target.value)
            if (!isNaN(value)) {
              handleQuantity?.change?.(Number(e.target.value))
            } else {
              handleQuantity?.change?.(1)
            }
          }} className=' focus:border-none text-center w-[40px] h-full border-x-0 border-y border-gray-500 rounded-none' />
        <Button onClick={handleQuantity?.add} className=' w-[30px] h-full p-0   rounded-none  rounded-r bg-white border border-gray-500' ><PlusIcon className=' text-gray-800' /></Button>
      </div>
    </div>

  )
}
