import { cn } from "@/lib/utils";
import React from "react";

const TruckAbout = ({ className }: { className?: string }) => {
  return (
    <span className={cn("block w-[72px] h-[72px] text-gray-500", className)}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="72" height="72" rx="36" fill="white" />
        <path
          d="M45.166 26.144H40.1085V23.2992C40.1085 22.9515 39.8241 22.667 39.4764 22.667H18.2982C17.9505 22.667 17.666 22.9515 17.666 23.2992V44.4773C17.666 44.825 17.9505 45.1095 18.2982 45.1095H21.5065C21.8068 46.9903 23.4426 48.4285 25.4103 48.4285C27.3779 48.4285 29.0058 46.9903 29.314 45.1095H39.4764H42.6847C42.985 46.9903 44.6208 48.4285 46.5884 48.4285C48.5561 48.4285 50.184 46.9903 50.4922 45.1095H53.7005C54.0482 45.1095 54.3327 44.825 54.3327 44.4773V35.3107C54.3327 30.2532 50.2235 26.144 45.166 26.144ZM53.0525 34.7575H46.8966C45.5848 34.7575 44.5101 33.6907 44.5101 32.371V27.4084H45.166C49.3384 27.4084 52.7601 30.6562 53.0525 34.7575ZM38.8442 23.9314V38.0765H18.9304V23.9314H38.8442ZM21.5065 43.8452H18.9304V39.3408H38.8442V43.8452H29.314C29.0137 41.9644 27.3779 40.5262 25.4103 40.5262C23.4426 40.5262 21.8147 41.9644 21.5065 43.8452ZM25.4103 47.1641C23.9325 47.1641 22.7235 45.9551 22.7235 44.4773C22.7235 42.9996 23.9325 41.7906 25.4103 41.7906C26.888 41.7906 28.097 42.9996 28.097 44.4773C28.097 45.9551 26.888 47.1641 25.4103 47.1641ZM46.5884 47.1641C45.1107 47.1641 43.9016 45.9551 43.9016 44.4773C43.9016 42.9996 45.1107 41.7906 46.5884 41.7906C48.0662 41.7906 49.2752 42.9996 49.2752 44.4773C49.2752 45.9551 48.0662 47.1641 46.5884 47.1641ZM50.4922 43.8452C50.1919 41.9644 48.5561 40.5262 46.5884 40.5262C44.6208 40.5262 42.9929 41.9644 42.6847 43.8452H40.1085V27.4084H43.2458V32.371C43.2458 34.3861 44.8815 36.0219 46.8966 36.0219H53.0683V43.8452H50.4922Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
};

export default TruckAbout;