import { cn } from "@/lib/utils";
import React from "react";

const VietnamFlagIcon = ({ className }: { className?: string }) => {
  return (
    <span className={cn("text-gray-500", className)}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 16.5C24 18.7781 22.7351 20.625 20.25 20.625H3.75C1.26488 20.625 0 18.7781 0 16.5V8.25C0 5.97188 1.26488 4.125 3.75 4.125H20.25C22.7351 4.125 24 5.97188 24 8.25V16.5Z"
          fill="#EC1C24"
        />
        <path
          d="M17.0361 10.8613L13.2872 10.867L12.1236 7.07422L10.9686 10.867L7.21484 10.8613L10.2546 13.1702L9.07709 16.939L12.1258 14.5986L15.181 16.939L14.0008 13.1702L17.0361 10.8613Z"
          fill="#F9CB38"
        />
      </svg>
    </span>
  );
};

export default VietnamFlagIcon;
