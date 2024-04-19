import React from "react";
import { cn } from "@/lib/utils";

const UserIcon = ({ className }: { className?: string }) => {
  return (
    <span className={cn("w-6 h-6 text-gray-500  inline-block", className)}>
      <svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 19 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.16406 9C11.2351 9 12.9141 7.32107 12.9141 5.25C12.9141 3.17893 11.2351 1.5 9.16406 1.5C7.09299 1.5 5.41406 3.17893 5.41406 5.25C5.41406 7.32107 7.09299 9 9.16406 9Z"
          stroke="currentColor"
          strokeOpacity="0.88"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.6067 16.5C15.6067 13.5975 12.7192 11.25 9.16418 11.25C5.60918 11.25 2.72168 13.5975 2.72168 16.5"
          stroke="currentColor"
          strokeOpacity="0.88"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};

export default UserIcon;
