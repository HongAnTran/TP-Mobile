import { cn } from "@/lib/utils";
import React from "react";

const TickIcon = ({ className }: { className?: string }) => {
  return (
    <span className={cn("block w-6 h-6 text-red-500", className)}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.5" y="0.5" width="23" height="23" rx="3" stroke="#D8D7D8" />
        <rect width="24" height="24" rx="4" fill="currentColor" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.9058 7.22502C19.1984 7.51817 19.198 7.99305 18.9049 8.28568L10.3999 16.7757C10.1069 17.0681 9.63238 17.0679 9.33967 16.7752L5.09467 12.5302C4.80178 12.2373 4.80178 11.7624 5.09467 11.4696C5.38756 11.1767 5.86244 11.1767 6.15533 11.4696L9.87047 15.1847L17.8451 7.22408C18.1383 6.93145 18.6132 6.93187 18.9058 7.22502Z"
          fill="white"
        />
      </svg>
    </span>
  );
};

export default TickIcon;
