import { cn } from "@/lib/utils";
import React from "react";

const ChevronDownRoundIcon = ({ className }: { className?: string }) => {
  return (
    <span className={cn("w-6 h-6 text-gray-400", className)}>
      <svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Arrow">
          <path
            id="Vector"
            d="M19.9201 8.9502L13.4001 15.4702C12.6301 16.2402 11.3701 16.2402 10.6001 15.4702L4.08008 8.9502"
            stroke="#898889"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </span>
  );
};

export default ChevronDownRoundIcon;
