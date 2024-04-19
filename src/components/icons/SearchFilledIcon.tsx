import { cn } from "@/lib/utils";
import React from "react";

const SearchFilledIcon = ({ className }: { className?: string }) => {
  return (
    <span className={cn("block w-6 h-6 text-red-500", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={"100%"}
        height={"100%"}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11Z"
          fill="currentColor"
        />
        <path
          d="M20 20L18 18"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
};

export default SearchFilledIcon;
