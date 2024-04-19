import { cn } from "@/lib/utils";
import React from "react";

const OfficeIcon = ({ className }: { className?: string }) => {
  return (
    <span className={cn("block w-6 h-6 text-gray-500 ", className)}>
      <svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Essential ">
          <path
            id="Vector"
            d="M8.66536 14.6663H3.33203C1.9987 14.6663 1.33203 13.9997 1.33203 12.6663V7.33301C1.33203 5.99967 1.9987 5.33301 3.33203 5.33301H6.66536V12.6663C6.66536 13.9997 7.33203 14.6663 8.66536 14.6663Z"
            stroke="#3A393A"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_2"
            d="M6.73869 2.66699C6.68535 2.86699 6.66536 3.08699 6.66536 3.33366V5.33366H3.33203V4.00033C3.33203 3.26699 3.93203 2.66699 4.66536 2.66699H6.73869Z"
            stroke="#3A393A"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_3"
            d="M9.33203 5.33301V8.66634"
            stroke="#3A393A"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_4"
            d="M12 5.33301V8.66634"
            stroke="#3A393A"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_5"
            d="M11.332 11.333H9.9987C9.63203 11.333 9.33203 11.633 9.33203 11.9997V14.6663H11.9987V11.9997C11.9987 11.633 11.6987 11.333 11.332 11.333Z"
            stroke="#3A393A"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_6"
            d="M4 8.66699V11.3337"
            stroke="#3A393A"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_7"
            d="M6.66797 12.6663V3.33301C6.66797 1.99967 7.33464 1.33301 8.66797 1.33301H12.668C14.0013 1.33301 14.668 1.99967 14.668 3.33301V12.6663C14.668 13.9997 14.0013 14.6663 12.668 14.6663H8.66797C7.33464 14.6663 6.66797 13.9997 6.66797 12.6663Z"
            stroke="#3A393A"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </span>
  );
};

export default OfficeIcon;
