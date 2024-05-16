"use client"
import { Label } from '@/components/ui/label'

import React, { ReactNode, useId } from 'react'
import { Controller, FieldPath, FieldValues, UseControllerProps } from "react-hook-form"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { TypographyP } from '@/components/ui/typography'

interface SelectItemType {
  label: ReactNode,
  value: string 
}
interface SelectControllerProps {
  label?: string
  icon?: React.ReactNode
  items: SelectItemType[]
  placeholder?: string
}
export type InputPropsControl<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> = UseControllerProps<TFieldValues, TName>

export default function SelectController<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>({ control, name, label, items, placeholder }: InputPropsControl<TFieldValues, TName> & SelectControllerProps) {
  const id = useId()


  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, name, disabled }  , fieldState}) => (
        <div className=' grid w-full  items-center gap-1.5 pb-5 relative'>
          <Label htmlFor={id}  >{label}</Label>
          <Select value={value} onValueChange={(value) => { onChange(value) }}
            name={name} disabled={disabled} >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className=' max-h-[300px]'>
              <SelectGroup >
                {items.map(item => {
                  return (<SelectItem value={item.value} key={item.value}>{item.label}</SelectItem>)
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
          {fieldState.error ? <TypographyP   className='  font-medium absolute bottom-0 left-0 right-0 text-red-700'>{fieldState.error?.message}</TypographyP> : null}

        </div>
      )}
    />
  )
}
