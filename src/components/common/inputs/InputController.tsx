"use client"
import { Input, InputProps } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import React, { useId } from 'react'
import { Controller, FieldPath, FieldValues, UseControllerProps } from "react-hook-form"


interface InputControllerProps {
  inputProps?: InputProps
  label?: string
  icon?: React.ReactNode
}
export type InputPropsControl<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> = UseControllerProps<TFieldValues, TName>

export default function InputController<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>({ control, name, inputProps, label }: InputPropsControl<TFieldValues, TName> & InputControllerProps) {
  const id = useId()

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref, name, disabled } }) => (
        <div className=' grid w-full  items-center gap-1.5'>
          <Label htmlFor={id}  >{label}</Label>
          <Input
            id={id}
            {...inputProps}
            name={name}

            ref={ref}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            disabled={disabled}
          />
        </div>
      )}
    />
  )
}
