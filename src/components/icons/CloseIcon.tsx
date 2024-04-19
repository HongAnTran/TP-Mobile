import { cn } from "@/lib/utils";
import React from "react";

const CloseIcon = ({ className }: { className?: string }) => {
  return (
    <span className={cn("block w-6 h-6 text-gray-500 ", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={"100%"}
        height={"100%"}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M18 6L6 18"
          stroke="currentColor"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <path
          d="M6 6L18 18"
          stroke="currentColor"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};

export default CloseIcon;
