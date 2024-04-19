import { cn } from "@/lib/utils";
import React from "react";

const ArrowLeftIcon = ({ className }: { className?: string }) => {
  return (
    <span className={cn("block w-5 h-5 text-gray-500", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={"100%"}
        height={"100%"}
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M4.16797 9.99935L3.81442 9.6458L3.46086 9.99935L3.81442 10.3529L4.16797 9.99935ZM14.168 10.4993C14.4441 10.4993 14.668 10.2755 14.668 9.99935C14.668 9.72321 14.4441 9.49935 14.168 9.49935V10.4993ZM7.14775 6.31246L3.81442 9.6458L4.52152 10.3529L7.85486 7.01957L7.14775 6.31246ZM3.81442 10.3529L7.14775 13.6862L7.85486 12.9791L4.52152 9.6458L3.81442 10.3529ZM4.16797 10.4993H14.168V9.49935H4.16797V10.4993Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
};

export default ArrowLeftIcon;
