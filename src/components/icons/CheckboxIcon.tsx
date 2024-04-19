import { cn } from "@/lib/utils";
import React from "react";

const CheckboxIcon = ({ className }: { className?: string }) => {
  return (
    <span className={cn("block w-[18px] h-[18px] text-gray-500", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={"100%"}
        height={"100%"}
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle cx="12" cy="12" r="9" stroke="currentColor" />
      </svg>
    </span>
  );
};

export default CheckboxIcon;
