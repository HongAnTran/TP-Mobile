import { cn } from "@/lib/utils";
import React from "react";

const TagIcon = ({ className }: { className?: string }) => {
  return (
    <span className={cn("block w-6 h-6 text-gray-500", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={"100%"}
        height={"100%"}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M3 8C3 7.05719 3 6.58579 3.29289 6.29289C3.58579 6 4.05719 6 5 6H15.9296C16.4536 6 16.7156 6 16.9367 6.11833C17.1578 6.23665 17.3031 6.45463 17.5937 6.8906L20.2604 10.8906C20.6189 11.4283 20.7981 11.6972 20.7981 12C20.7981 12.3028 20.6189 12.5717 20.2604 13.1094L17.5937 17.1094C17.3031 17.5454 17.1578 17.7633 16.9367 17.8817C16.7156 18 16.4536 18 15.9296 18H5C4.05719 18 3.58579 18 3.29289 17.7071C3 17.4142 3 16.9428 3 16V8Z"
          stroke="currentColor"
        />
        <circle
          cx={15}
          cy={12}
          r={1}
          fill="currentColor"
          stroke="currentColor"
        />
      </svg>
    </span>
  );
};

export default TagIcon;