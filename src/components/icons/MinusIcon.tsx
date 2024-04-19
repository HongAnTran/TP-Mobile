import { cn } from "@/lib/utils";
import React from "react";

const MinusIcon = ({ className }: { className?: string }) => {
  return (
    <span className={cn("block w-6 h-6 text-gray-500 ", className)}>
      <svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 12L6 12"
          stroke="currentColor"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};

export default MinusIcon;
