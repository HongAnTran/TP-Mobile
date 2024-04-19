import { cn } from "@/lib/utils";
import React from "react";

const ShieldAboutIcon = ({ className }: { className?: string }) => {
  return (
    <span className={cn("block w-[72px] h-[72px] text-gray-500", className)}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 73 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.5" width="72" height="72" rx="36" fill="white" />
        <path
          d="M47.6706 26.911L37.0896 22.3762C36.7123 22.2145 36.2851 22.2145 35.9078 22.3762L25.3268 26.911C24.7123 27.1743 24.3463 27.8124 24.4292 28.4757L25.7089 38.713C25.9133 40.3484 26.7314 41.8451 27.9975 42.9002L35.5384 49.1843C36.0947 49.6478 36.9027 49.6478 37.459 49.1843L44.9999 42.9002C46.266 41.8451 47.0841 40.3484 47.2885 38.713L48.5682 28.4757C48.6511 27.8124 48.285 27.1743 47.6706 26.911Z"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          d="M31.4994 36L36.0681 40.5687C36.2912 40.7918 36.6626 40.7551 36.8377 40.4925L43.166 31"
          stroke="currentColor"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
};

export default ShieldAboutIcon;
