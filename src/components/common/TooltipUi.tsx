import React from 'react'
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function TooltipUi({ children, title }: { children: React.ReactNode, title: string }) {
  return (
    <TooltipProvider
    delayDuration={300}

    >
      <Tooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent>
          <p className=' text-white'>{title}</p>
          <TooltipArrow className="TooltipArrow" />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>

  )
}
