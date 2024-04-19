import { cn } from "@/lib/utils";
import React from "react";

const MessageIcon = ({ className }: { className?: string }) => {
  return (
    <span className={cn("block w-10 h-10 text-gray-500 ", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={"100%"}
        height={"100%"}
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M33.3346 14.6665C33.3346 10.8953 33.3346 9.00965 32.1631 7.83808C30.9915 6.6665 29.1059 6.6665 25.3346 6.6665H14.668C10.8967 6.6665 9.01111 6.6665 7.83954 7.83808C6.66797 9.00965 6.66797 10.8953 6.66797 14.6665V31.3332C6.66797 32.276 6.66797 32.7474 6.96086 33.0403C7.25376 33.3332 7.72516 33.3332 8.66797 33.3332H25.3346C29.1059 33.3332 30.9915 33.3332 32.1631 32.1616C33.3346 30.99 33.3346 29.1044 33.3346 25.3332V14.6665Z"
          stroke="currentColor"
        />
        <path
          d="M15 16.6665L25 16.6665"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 23.3335H20"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};

export default MessageIcon;
