import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function BoxLayout({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <div className={cn('bg-white p-3  shadow-md  rounded-xl border', className)}>
      {children}
    </div>
  )
}