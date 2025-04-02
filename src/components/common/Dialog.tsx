import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { cn } from '@/lib/utils'

interface Props {
  open: boolean
  onClose: (open: boolean) => void
  children?: React.ReactNode,
  title?: React.ReactNode
  closeOnMask?: boolean
  closeButton?: React.ReactNode
  className?: string
}
export default function DialogUi({ children, onClose, open, title, closeOnMask = true, closeButton, className }: Props) {
  return (

    <Dialog open={open} onOpenChange={(open) => {
      if (!open) {
        onClose(open)
      }
    }} >
      <DialogContent className={cn("sm:max-w-lg", className)} closeButton={closeButton}
        onInteractOutside={(e: Event) => {
          if (closeOnMask) {
            return;
          }
          e.preventDefault();
        }}
      >
        <DialogHeader>
          {title ? <DialogTitle className=' text-center' >{title}</DialogTitle> : null}
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  )
}
