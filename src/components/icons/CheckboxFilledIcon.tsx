import { cn } from "@/lib/utils";
import React from "react";

const CheckboxFilledIcon = ({ className }: { className?: string }) => {
  return (
    <span className={cn("block w-[18px] h-[18px] text-red-500", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={"100%"}
        height={"100%"}
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle
          cx="12"
          cy="12"
          r="9"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="1.2" />
      </svg>
    </span>
  );
};

export default CheckboxFilledIcon;
