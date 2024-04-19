import React from "react";
import { cn } from "@/lib/utils";

const CheckIcon = ({ className }: { className?: string }) => {
  return (
    <span className={cn("block w-4 h-4 text-gray-200", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={"100%"}
        height={"100%"}
        viewBox="0 0 16 16"
        fill="none"
      >
        <path d="M3.33333 9.33333L6 11.3333L12 4" stroke="currentColor" />
      </svg>
    </span>
  );
};

export default CheckIcon;
