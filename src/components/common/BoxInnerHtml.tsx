import { cn } from '@/lib/utils'
import React from 'react'
export default function BoxInnerHtml({ html, className }: { html: string, className?: string }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: html }}
      className={cn("table-auto", className)}>
    </div>
  )
}
