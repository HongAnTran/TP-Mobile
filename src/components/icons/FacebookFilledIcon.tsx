import React from "react";
import { cn } from "@/lib/utils";

const FacebookFilledIcon = ({ className }: { className?: string }) => {
  return (
    <span className={cn("block w-5 h-5 text-[#1877F2]", className)}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_340_19630)">
          <path
            d="M30 15C30 6.71572 23.2843 0 15 0C6.71572 0 0 6.71572 0 15C0 22.4868 5.48525 28.6925 12.6562 29.8178V19.3359H8.84766V15H12.6562V11.6953C12.6562 7.93594 14.8957 5.85938 18.322 5.85938C19.9626 5.85938 21.6797 6.15234 21.6797 6.15234V9.84375H19.7883C17.925 9.84375 17.3438 11.0001 17.3438 12.1875V15H21.5039L20.8389 19.3359H17.3438V29.8178C24.5147 28.6925 30 22.4868 30 15Z"
            fill="currentColor"
          />
          <path
            d="M20.8389 19.3359L21.5039 15H17.3438V12.1875C17.3438 11.0013 17.925 9.84375 19.7883 9.84375H21.6797V6.15234C21.6797 6.15234 19.9632 5.85938 18.322 5.85938C14.8957 5.85938 12.6562 7.93594 12.6562 11.6953V15H8.84766V19.3359H12.6562V29.8178C14.2093 30.0607 15.7907 30.0607 17.3438 29.8178V19.3359H20.8389Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_340_19630">
            <rect width="30" height="30" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </span>
  );
};

export default FacebookFilledIcon;