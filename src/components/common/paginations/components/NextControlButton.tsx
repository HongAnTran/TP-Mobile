import ChevronRightIcon from "@/components/icons/ChevronRightIcon";
import { cn } from "@/lib/utils";
import React from "react";

function NextControlButton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "   w-7 h-7 flex items-center justify-center bg-white rounded cursor-pointer",
        className
      )}
    >
      <ChevronRightIcon />
    </div>
  );
}

export default NextControlButton;
