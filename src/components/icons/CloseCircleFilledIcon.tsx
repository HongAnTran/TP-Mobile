import { cn } from "@/lib/utils";
import React from "react";

export default function CloseCircleFilledIcon({
  className,
}: {
  className?: string;
}) {
  return (
    <span className={cn("block w-6 h-6 text-red-500", className)}>
      <svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 33 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="16.5"
          cy={16}
          r={12}
          fill="currentColor"
          stroke="currentColor"
        />
        <path d="M12.5 19.999L20.5 11.999" stroke="white" />
        <path d="M20.5 20L12.5 12" stroke="white" />
      </svg>
    </span>
  );
}
