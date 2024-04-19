import React from "react";
import { cn } from "@/lib/utils";

const SortDownIcon = ({ className }: { className?: string }) => {
  return (
    <span className={cn("block w-6 h-6 text-gray-500 ", className)}>
      <svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5 8H13" stroke="currentColor" strokeLinecap="round" />
        <path d="M5 12H11" stroke="currentColor" strokeLinecap="round" />
        <path d="M5 16H9" stroke="currentColor" strokeLinecap="round" />
        <path d="M19 18L22 15M19 18L16 15M19 18L19 6" stroke="currentColor" />
      </svg>
    </span>
  );
};

export default SortDownIcon;
