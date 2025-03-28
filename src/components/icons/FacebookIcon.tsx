import { cn } from "@/lib/utils";
import React from "react";

const FacebookIcon = ({ className }: { className?: string }) => {
  return (
    <span className={cn(" inline-block w-12 h-12 text-[#1877F2]", className)}>
      <svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_348_7243)">
          <path
            d="M48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 35.9789 8.77641 45.908 20.25 47.7084V30.9375H14.1562V24H20.25V18.7125C20.25 12.6975 23.8331 9.375 29.3152 9.375C31.9402 9.375 34.6875 9.84375 34.6875 9.84375V15.75H31.6613C28.68 15.75 27.75 17.6002 27.75 19.5V24H34.4062L33.3422 30.9375H27.75V47.7084C39.2236 45.908 48 35.9789 48 24Z"
            fill="currentColor"
          />
          <path
            d="M33.3422 30.9375L34.4062 24H27.75V19.5C27.75 17.602 28.68 15.75 31.6613 15.75H34.6875V9.84375C34.6875 9.84375 31.9411 9.375 29.3152 9.375C23.8331 9.375 20.25 12.6975 20.25 18.7125V24H14.1562V30.9375H20.25V47.7084C22.7349 48.0972 25.2651 48.0972 27.75 47.7084V30.9375H33.3422Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_348_7243">
            <rect width="48" height="48" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </span>
  );
};

export default FacebookIcon;
