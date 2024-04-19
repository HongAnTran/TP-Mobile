import { cn } from "@/lib/utils";
import React from "react";

const NoTickIcon = ({ className }: { className?: string }) => {
  return (
    <span className={cn("block w-6 h-6 text-gray-300 ", className)}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.5"
          width="23"
          height="23"
          rx="3"
          stroke="currentColor"
        />
      </svg>
    </span>
  );
};

export default NoTickIcon;
