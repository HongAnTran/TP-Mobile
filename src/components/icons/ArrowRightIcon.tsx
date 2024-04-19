import { cn } from "@/lib/utils";
import React from "react";

const ArrowRightIcon = ({ className }: { className?: string }) => {
  return (
    <span className={cn("block w-4 h-4 text-gray-500", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={"100%"}
        height={"100%"}
        viewBox="0 0 17 17"
        fill="none"
      >
        <path
          d="M12.5 8.83464L12.8536 8.48108L13.2071 8.83464L12.8536 9.18819L12.5 8.83464ZM4.5 9.33464C4.22386 9.33464 4 9.11078 4 8.83464C4 8.55849 4.22386 8.33464 4.5 8.33464V9.33464ZM10.1869 5.81442L12.8536 8.48108L12.1464 9.18819L9.47978 6.52152L10.1869 5.81442ZM12.8536 9.18819L10.1869 11.8549L9.47978 11.1477L12.1464 8.48108L12.8536 9.18819ZM12.5 9.33464H4.5V8.33464H12.5V9.33464Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
};

export default ArrowRightIcon;
