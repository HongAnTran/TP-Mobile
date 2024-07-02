import React from 'react'
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"

interface Props {
  open: boolean
  onClose: (open: boolean) => void
  children?: React.ReactNode
}
export default function DialogUi({ children, onClose, open }: Props) {
  return (

    <Dialog open={open} onOpenChange={(open) => {
      if (!open) {
        onClose(open)
      }
    }} >
      <DialogContent className="sm:max-w-md">
        {children}
      </DialogContent>
    </Dialog>
  )
}
