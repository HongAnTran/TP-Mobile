
import { cn } from "@/lib/utils";
import React from "react";

const SlidePrevIcon = ({ className }: { className?: string }) => {
  return (
    <span className={cn("inline-block w-6 h-6 text-gray-500", className)}>
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.0038 19.9181L8.48375 13.3981C7.71375 12.6281 7.71375 11.3681 8.48375 10.5981L15.0038 4.07812" stroke="currentColor"
          strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    </span>
  );
};

export default SlidePrevIcon;
