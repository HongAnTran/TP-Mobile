import { cn } from "@/lib/utils";
import React from "react";

const ChevronRightIcon = ({ className }: { className?: string }) => {
  return (
    <>
      <span className={cn("block w-6 h-6 text-gray-500", className)}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.90625 19.9181L15.4263 13.3981C16.1963 12.6281 16.1963 11.3681 15.4263 10.5981L8.90625 4.07812"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </>
  );
};

export default ChevronRightIcon;
