"use client"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"
// import useDeviceSize from "@/lib/hooks/useDeviceSize"
// import DrawerMobile from "./DrawerMobile"

interface PopupProps {
  animate?: "tran" | "fade",
  classNameContent?: string,
  children?: ReactNode,
  title?: string,
  open:
  boolean, onOpenChange: () => void
  , closeOnMark?: boolean,
  isDrawerMobile?: boolean
  classNameDrawerMobile?: string
  closeButton?: React.ReactNode

}


export default function Modal({ children, title, open, onOpenChange, classNameContent, animate = "fade", closeOnMark = true, closeButton, isDrawerMobile, classNameDrawerMobile }: PopupProps
) {
  // const { isMobile } = useDeviceSize()


  // if (isMobile && isDrawerMobile) {
  //   return (
  //     <DrawerMobile open={open}
  //       onClose={onOpenChange}
  //       className={classNameDrawerMobile}
  //       title={title}>


  //         {children}


  //     </DrawerMobile>
  //   )
  // }
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}

    >
      <DialogContent
        closeButton={closeButton}
        onInteractOutside={(e: any) => {
          if (closeOnMark) {
            return;
          }
          e.preventDefault();
        }}
        className={cn("sm:max-w-[425px] md:max-w-[900px] lg-max-w-[1200px]", {
          "data-[state=open]:animate-modal-down data-[state=closed]:animate-modal-up": animate === "tran",
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]": animate === "fade",
        }, classNameContent)}>
        {title ? <DialogHeader>
          <DialogTitle className=" text-center">{title}</DialogTitle>
        </DialogHeader> : null}
        {children}
      </DialogContent>
    </Dialog>
  );
}
