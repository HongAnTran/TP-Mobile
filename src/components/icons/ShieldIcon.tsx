import { cn } from "@/lib/utils";
import React from "react";

const ShieldIcon = ({ className }: { className?: string }) => {
  return (
    <span className={cn("block w-10 h-10 text-gay-500", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={"100%"}
        height={"100%"}
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M31.1706 10.9107L20.5896 6.376C20.2123 6.21429 19.7851 6.21429 19.4078 6.376L8.82677 10.9107C8.21235 11.1741 7.84632 11.8122 7.92923 12.4755L9.20889 22.7127C9.41331 24.3481 10.2314 25.8448 11.4975 26.8999L19.0384 33.184C19.5947 33.6476 20.4027 33.6476 20.959 33.184L28.4999 26.8999C29.766 25.8448 30.5841 24.3481 30.7885 22.7127L32.0682 12.4755C32.1511 11.8122 31.785 11.1741 31.1706 10.9107Z"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          d="M15.0013 20L19.57 24.5687C19.7931 24.7918 20.1646 24.7551 20.3396 24.4925L26.668 15"
          stroke="currentColor"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
};

export default ShieldIcon;
