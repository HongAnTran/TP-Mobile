import { cn } from "@/lib/utils";
import React from "react";

const LiveIcon = ({ className }: { className?: string }) => {
  return (
    <span className={cn("block w-[60px] h-[60px] text-red-500 ", className)}>
      <svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="60" height="60" rx="30" fill="#F6E9E9" />
        <rect
          x="8.5"
          y="19.25"
          width="32.8158"
          height="21.5"
          rx="4"
          fill="currentColor"
        />
        <path
          d="M51.5003 19.25L31.1318 30.5658L51.5003 40.75V19.25Z"
          fill="currentColor"
        />
        <path
          d="M13.4085 35V26.2727H14.9895V33.6747H18.8332V35H13.4085ZM21.7863 26.2727V35H20.2054V26.2727H21.7863ZM24.6659 26.2727L26.9373 33.142H27.0267L29.2938 26.2727H31.0324L27.9557 35H26.004L22.9316 26.2727H24.6659ZM32.1819 35V26.2727H37.8581V27.598H33.7629V29.9673H37.564V31.2926H33.7629V33.6747H37.8922V35H32.1819Z"
          fill="white"
        />
      </svg>
    </span>
  );
};

export default LiveIcon;
