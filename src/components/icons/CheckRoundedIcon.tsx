import { cn } from "@/lib/utils";
import React from "react";
function CheckRoundedIcon({ className }: { className?: string }) {
  return (
    <span className={cn("block w-[40px] h-[40px] text-red-500", className)}>
      <svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx={20}
          cy={20}
          r={15}
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M13.3333 20L18.3333 25L26.6666 15"
          stroke="white"
          strokeWidth="1.2"
        />
      </svg>
    </span>
  );
}

export default CheckRoundedIcon;
