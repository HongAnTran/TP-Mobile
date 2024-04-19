import { cn } from "@/lib/utils";
import React from "react";

const MessageAbout = ({ className }: { className?: string }) => {
  return (
    <span className={cn("block w-[72px] h-[72px] text-gray-500", className)}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 73 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.5" width="100%" height="100%" rx="36" fill="white" />
        <path
          d="M49.8327 30.667C49.8327 26.8958 49.8327 25.0101 48.6611 23.8386C47.4895 22.667 45.6039 22.667 41.8327 22.667H31.166C27.3948 22.667 25.5092 22.667 24.3376 23.8386C23.166 25.0101 23.166 26.8958 23.166 30.667V47.3337C23.166 48.2765 23.166 48.7479 23.4589 49.0408C23.7518 49.3337 24.2232 49.3337 25.166 49.3337H41.8327C45.6039 49.3337 47.4895 49.3337 48.6611 48.1621C49.8327 46.9905 49.8327 45.1049 49.8327 41.3337V30.667Z"
          stroke="currentColor"
        />
        <path
          d="M31.5 32.667L41.5 32.667"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M31.5 39.333H36.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};

export default MessageAbout;
