import { cn } from "@/lib/utils";
import React from "react";

const CheckTagIcon = ({ className }: { className?: string }) => {
  return (
    <span className={cn("block w-6 h-6 text-gray-500 ", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={"100%"}
        height={"100%"}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path d="M5 14L9 17L18 6" stroke="currentColor" />
      </svg>
    </span>
  );
};

export default CheckTagIcon;
