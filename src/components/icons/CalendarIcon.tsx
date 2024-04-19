import { cn } from "@/lib/utils";
import React from "react";

const CalendarIcon = ({ className }: { className?: string }) => {
  return (
    <span className={cn("block w-6 h-6 text-gray-400 opacity-50", className)}>
      <svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Frame 1000003279">
          <rect
            id="Rectangle 25"
            x={1}
            y={4}
            width={18}
            height={15}
            rx={2}
            stroke="currentColor"
          />
          <path
            id="Vector 3"
            d="M1 9L19 9"
            stroke="currentColor"
            strokeLinecap="round"
          />
          <path
            id="Vector 4"
            d="M7 14H13"
            stroke="currentColor"
            strokeLinecap="round"
          />
          <path
            id="Line 1"
            d="M6 1L6 5"
            stroke="currentColor"
            strokeLinecap="round"
          />
          <path
            id="Line 2"
            d="M14 1L14 5"
            stroke="currentColor"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </span>
  );
};

export default CalendarIcon;
