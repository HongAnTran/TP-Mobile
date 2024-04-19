import { cn } from "@/lib/utils";
import React from "react";

const UserFilledIcon = ({ className }: { className?: string }) => {
  return (
    <span className={cn("block w-4 h-4 text-red-500 ", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={"100%"}
        height={"100%"}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M19.6496 19.4054C20.2024 19.2902 20.5316 18.7117 20.2569 18.2183C19.6513 17.1307 18.6973 16.1749 17.4769 15.4465C15.9051 14.5085 13.9792 14 11.998 14C10.0168 14 8.09097 14.5085 6.51917 15.4465C5.29873 16.1749 4.34471 17.1307 3.73913 18.2183C3.46443 18.7117 3.79367 19.2902 4.34648 19.4054C9.39329 20.4572 14.6027 20.4572 19.6496 19.4054Z"
          fill="currentColor"
        />
        <circle cx={12} cy={8} r={4} fill="currentColor" />
      </svg>
    </span>
  );
};

export default UserFilledIcon;
