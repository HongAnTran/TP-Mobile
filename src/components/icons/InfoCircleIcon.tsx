import React from "react";
import { cn } from "@/lib/utils";

const InfoCircleIcon = ({ className }: { className?: string }) => {
  return (
    <span className={cn("block w-5 h-5 text-yellow-500 ", className)}>
      <svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M10 6.25C10.4142 6.25 10.75 5.91421 10.75 5.5C10.75 5.08579 10.4142 4.75 10 4.75C9.58579 4.75 9.25 5.08579 9.25 5.5C9.25 5.91421 9.58579 6.25 10 6.25Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="0.5"
        />
        <path d="M10 15V8" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </span>
  );
};

export default InfoCircleIcon;
