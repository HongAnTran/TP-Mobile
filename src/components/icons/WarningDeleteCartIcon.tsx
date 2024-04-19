import React from "react";
import { cn } from "@/lib/utils";

const WarningDeleteCartIcon = ({ className }: { className?: string }) => {
  return (
    <span className={cn("w-6 h-6 text-gray-500", className)}>
      <svg
        width="41"
        height="40"
        viewBox="0 0 41 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20.5" cy="20" r="13" fill="#FFF50F" stroke="#FFF50F" />
        <path
          d="M21.2218 13.4996C21.2218 13.8984 20.8984 14.2218 20.4996 14.2218C20.1007 14.2218 19.7773 13.8984 19.7773 13.4996C19.7773 13.1007 20.1007 12.7773 20.4996 12.7773C20.8984 12.7773 21.2218 13.1007 21.2218 13.4996Z"
          fill="white"
          stroke="white"
        />
        <path
          d="M20.5 27.2224V17.1113"
          stroke="white"
          stroke-width="3"
          stroke-linecap="round"
        />
      </svg>
    </span>
  );
};

export default WarningDeleteCartIcon;
