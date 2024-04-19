import { cn } from "@/lib/utils";
import React from "react";

const NamperfumeIcon = ({ className }: { className?: string }) => {
  return (
    <span className={cn("block w-[18px] h-[18px] text-gray-500", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={"100%"}
        height={"100%"}
        viewBox="0 0 18 18"
        fill="none"
      >
        <path
          d="M14.6781 17.5H3.32194C1.76355 17.5 0.5 16.2364 0.5 14.6781V3.32194C0.5 1.76355 1.76355 0.5 3.32194 0.5H14.6781C16.2364 0.5 17.5 1.76355 17.5 3.32194V14.6781C17.5 16.2364 16.2364 17.5 14.6781 17.5Z"
          stroke="currentColor"
        />
        <path
          d="M5.17969 13.4991V3.92719H6.44767C6.93868 3.92719 7.08257 4.07107 7.08257 4.5405V5.60345H7.14372C8.02321 4.37683 9.04659 3.76172 10.1293 3.76172C11.847 3.76172 12.829 4.84625 12.829 7.05488V14.2347H11.5196C11.0898 14.2347 10.9261 14.0513 10.9261 13.4991V7.50632C10.9261 6.09445 10.4153 5.52251 9.55559 5.52251C8.88113 5.52251 7.89911 6.21855 7.08077 7.58906V14.2365H5.77141C5.34336 14.2365 5.17969 14.0513 5.17969 13.4991Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
};

export default NamperfumeIcon;
