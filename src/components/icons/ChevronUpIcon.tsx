import { cn } from "@/lib/utils";
import React from "react";

const ChevronUpIcon = ({ className }: { className?: string }) => {
  return (
    <span className={cn("block w-8 h-8 text-gray-500 ", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={"100%"}
        height={"100%"}
        viewBox="0 0 32 32"
        fill="none"
      >
        <path d="M24 20L16 12L8 20" stroke="currentColor" />
      </svg>
    </span>
  );
};
export default ChevronUpIcon;
