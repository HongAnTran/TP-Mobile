import { cn } from "@/lib/utils";
import React from "react";

const InstagramOutlineIcon = ({ className }: { className?: string }) => {
  return (
    <span className={cn("block w-4 h-4 text-gray-500 ", className)}>
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z"
          stroke="currentColor"
        />
        <circle cx="16.5" cy="7.5" r="1.5" fill="currentColor" />
        <circle cx={12} cy={12} r="3.5" stroke="currentColor" />
      </svg>
    </span>
  );
};

export default InstagramOutlineIcon;