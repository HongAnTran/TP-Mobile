import { cn } from "@/lib/utils";
import React from "react";

const InstagramIcon = ({ className }: { className?: string }) => {
  return (
    <span className={cn("block w-4 h-4 text-gray-200 ", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={"100%"}
        height={"100%"}
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M2 8C2 6.13623 2 5.20435 2.30448 4.46927C2.71046 3.48915 3.48915 2.71046 4.46927 2.30448C5.20435 2 6.13623 2 8 2V2C9.86377 2 10.7956 2 11.5307 2.30448C12.5108 2.71046 13.2895 3.48915 13.6955 4.46927C14 5.20435 14 6.13623 14 8V8C14 9.86377 14 10.7956 13.6955 11.5307C13.2895 12.5108 12.5108 13.2895 11.5307 13.6955C10.7956 14 9.86377 14 8 14V14C6.13623 14 5.20435 14 4.46927 13.6955C3.48915 13.2895 2.71046 12.5108 2.30448 11.5307C2 10.7956 2 9.86377 2 8V8Z"
          stroke="currentColor"
        />
        <circle cx={11} cy={5} r={1} fill="currentColor" />
        <circle cx="8.0026" cy="7.99992" r="2.16667" stroke="currentColor" />
      </svg>
    </span>
  );
};

export default InstagramIcon;
