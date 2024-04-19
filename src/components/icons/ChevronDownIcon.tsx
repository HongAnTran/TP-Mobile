import React from "react";
import { cn } from "@/lib/utils";

const ChevronDownIcon = ({ className }: { className?: string }) => {
  return (
    <span className={cn("block h-4 w-4 text-gray-500", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path d="M12 6L8 10L4 6" stroke="currentColor" />
      </svg>
    </span>
  );
};

export default ChevronDownIcon;
