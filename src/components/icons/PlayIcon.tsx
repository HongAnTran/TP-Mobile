import React from "react";
import { cn } from "@/lib/utils";

export default function PlayIcon({ className }: { className?: string }) {
  return (
    <span className={cn("block w-[88px] h-[88px]", className)}>
      <svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 84 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          opacity="0.8"
          clipPath="url(#clip0_7849_92518)"
          filter="url(#filter0_d_7849_92518)"
        >
          <path
            d="M21.8197 59.7722C22.1093 59.9244 22.4293 60.0001 22.7491 60.0001C23.1022 60.0001 23.4548 59.9076 23.7651 59.7237L54.4378 41.542C54.9984 41.2098 55.3388 40.6271 55.3388 40.0002C55.3388 39.3733 54.9984 38.7906 54.4378 38.4584L23.7651 20.2764C23.174 19.926 22.4292 19.9076 21.8197 20.2279C21.2102 20.5484 20.832 21.1573 20.832 21.8182V58.1819C20.832 58.8428 21.2102 59.4517 21.8197 59.7722Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_7849_92518"
            x={-3}
            y={0}
            width="90.1758"
            height={88}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx={4} dy={4} />
            <feGaussianBlur stdDeviation={12} />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_7849_92518"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_7849_92518"
              result="shape"
            />
          </filter>
          <clipPath id="clip0_7849_92518">
            <rect
              width="42.175"
              height={40}
              fill="currentColor"
              transform="translate(17 20)"
            />
          </clipPath>
        </defs>
      </svg>
    </span>
  );
}
