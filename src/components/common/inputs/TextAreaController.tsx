"use client"
import { Textarea, TextareaProps } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { TypographyP, TypographySpan } from '@/components/ui/typography'
import { cn } from '@/lib/utils'

import React, { useId } from 'react'
import { Controller, FieldPath, FieldValues, UseControllerProps } from "react-hook-form"


interface TextAreaControllerProps {
  textAreaProps?: TextareaProps
  labelProps?: {
    className?: string
  }
  label?: string
  icon?: React.ReactNode
  isShowError?: boolean
  isNumber?: boolean
}
export type TextAreaPropsControl<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> = UseControllerProps<TFieldValues, TName>

export default function TextAreaController<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>({ control, name, textAreaProps, label, labelProps, isNumber, icon, isShowError = true }: TextAreaPropsControl<TFieldValues, TName> & TextAreaControllerProps) {
  const id = useId()


  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref, name, disabled }, fieldState }) => (
        <div className={cn(' grid w-full  items-center gap-1.5 relative ')}>
          <Label {...labelProps} htmlFor={id}  >{label} {textAreaProps?.required ? <TypographySpan className=' text-red-700'>*</TypographySpan> : null}</Label>
          <Textarea
            {...textAreaProps}
            id={id}
            name={name}
            ref={ref}
            onBlur={(e) => {
              if (textAreaProps?.onBlur) {
                textAreaProps.onBlur(e)
              }
              onBlur()
            }}
            onChange={(e) => {
              onChange(e)
            }}
            value={value}
            disabled={disabled}
          />
          {isShowError && fieldState.error ? <TypographyP className='  font-medium  text-red-700'>{fieldState.error?.message}</TypographyP> : null}
        </div>
      )}
    />
  )
}
