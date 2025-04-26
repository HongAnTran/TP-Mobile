import React from 'react'
import { TypographyH2 } from '../ui/typography'
import { cn } from '@/lib/utils'
import AppleIcon from '../icons/AppleIcon'

export default function TitleWithIcon({
  title,
  className,
  classNameBox,
  component
}: {
  title: string,
  className?: string
  classNameBox?: string
  component?: React.ElementType
}) {
  const Component = component || 'h2'


  return (
    <div className={cn(" flex justify-center items-center gap-2", classNameBox)}>
      <AppleIcon className=' w-5 h-5 lg:w-[26] lg:h-[26px]' />
      <Component className={cn(" text-heading text-sm md:text-lg lg:text-2xl text-center", className)}>
        {title}</Component>
    </div>
  )
}
