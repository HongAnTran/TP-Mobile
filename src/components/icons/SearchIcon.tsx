import { cn } from "@/lib/utils";
import React from "react";

const SearchIcon = ({ className }: { className?: string }) => {
  return (
    <span className={cn("block w-6 h-6 text-gray-500 ", className)}>
      <svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx={11} cy={11} r={6} stroke="currentColor" />
        <path d="M20 20L17 17" stroke="currentColor" strokeLinecap="round" />
      </svg>
    </span>
  );
};

export default SearchIcon;
