import { cn } from "@/lib/utils";
import React from "react";

const HomeAddressIcon = ({ className }: { className?: string }) => {
  return (
    <span className={cn("block w-6 h-6 text-gray-500 ", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={"100%"}
        height={"100%"}
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M6.01203 1.89312L2.4187 4.69312C1.8187 5.15978 1.33203 6.15312 1.33203 6.90645V11.8464C1.33203 13.3931 2.59203 14.6598 4.1387 14.6598H11.8587C13.4054 14.6598 14.6654 13.3931 14.6654 11.8531V6.99978C14.6654 6.19312 14.1254 5.15978 13.4654 4.69978L9.34536 1.81312C8.41203 1.15978 6.91203 1.19312 6.01203 1.89312Z"
          stroke="#3A393A"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 11.9932V9.99316"
          stroke="#3A393A"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};

export default HomeAddressIcon;
