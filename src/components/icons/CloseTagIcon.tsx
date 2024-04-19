import { cn } from "@/lib/utils";
import React from "react";

const CloseTagIcon = ({ className }: { className?: string }) => {
  return (
    <span className={cn("block w-4 h-4 text-gray-500 ", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={"100%"}
        height={"100%"}
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M12 4L4 12"
          stroke="currentColor"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <path
          d="M4 4L12 12"
          stroke="currentColor"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};

export default CloseTagIcon;
