import { cn } from "@/lib/utils";
import React from "react";

const NotedIcon = ({ className }: { className?: string }) => {
  return (
    <span className={cn("block w-[50px] h-[50px] text-gray-500 ", className)}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 51 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.4998 45.8332C36.9582 45.8332 46.3332 36.4582 46.3332 24.9998C46.3332 13.5415 36.9582 4.1665 25.4998 4.1665C14.0415 4.1665 4.6665 13.5415 4.6665 24.9998C4.6665 36.4582 14.0415 45.8332 25.4998 45.8332Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.5 16.6665V27.0832"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.4888 33.3335H25.5075"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};

export default NotedIcon;
