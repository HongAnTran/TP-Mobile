import { cn } from "@/lib/utils";
import React from "react";

const ShopAboutIcon = ({ className }: { className?: string }) => {
  return (
    <span className={cn("block w-6 h-6 text-gray-500", className)}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 41 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.6666 35V26C24.6666 25.4477 24.2189 25 23.6666 25H17.3333C16.781 25 16.3333 25.4477 16.3333 26V35"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.83325 18.3333V31C8.83325 32.8856 8.83325 33.8284 9.41904 34.4142C10.0048 35 10.9476 35 12.8333 35H28.1666C30.0522 35 30.995 35 31.5808 34.4142C32.1666 33.8284 32.1666 32.8856 32.1666 31V18.3333"
          stroke="currentColor"
        />
        <path
          d="M8.4546 6.51493C8.63649 5.78737 8.72744 5.42359 8.9987 5.21179C9.26996 5 9.64493 5 10.3949 5H30.6051C31.3551 5 31.73 5 32.0013 5.21179C32.2726 5.42359 32.3635 5.78737 32.5454 6.51493L34.8787 15.8483C35.1647 16.9922 35.3077 17.5642 35.0074 17.9487C34.7072 18.3333 34.1176 18.3333 32.9384 18.3333H32.2218C30.6035 18.3333 29.7943 18.3333 29.2348 17.8594C28.6753 17.3854 28.5423 16.5873 28.2763 14.9909L28.1973 14.517C28.1222 14.0667 28.0847 13.8416 28 13.8416C27.9153 13.8416 27.8778 14.0667 27.8027 14.517L27.6462 15.4564C27.4554 16.601 27.36 17.1733 27.0373 17.5788C26.8742 17.7837 26.6726 17.9545 26.4437 18.0817C25.9907 18.3333 25.4104 18.3333 24.25 18.3333V18.3333C23.0896 18.3333 22.5093 18.3333 22.0563 18.0817C21.8274 17.9545 21.6258 17.7837 21.4627 17.5788C21.14 17.1733 21.0446 16.601 20.8538 15.4564L20.6973 14.517C20.6222 14.0667 20.5847 13.8416 20.5 13.8416C20.4153 13.8416 20.3778 14.0667 20.3027 14.517L20.1462 15.4564C19.9554 16.601 19.86 17.1733 19.5373 17.5788C19.3742 17.7837 19.1726 17.9545 18.9437 18.0817C18.4907 18.3333 17.9104 18.3333 16.75 18.3333V18.3333C15.5896 18.3333 15.0093 18.3333 14.5563 18.0817C14.3274 17.9545 14.1258 17.7837 13.9627 17.5788C13.64 17.1733 13.5446 16.601 13.3538 15.4564L13.1973 14.517C13.1222 14.0667 13.0847 13.8416 13 13.8416C12.9153 13.8416 12.8778 14.0667 12.8027 14.517L12.7237 14.9909C12.4577 16.5873 12.3247 17.3854 11.7652 17.8594C11.2057 18.3333 10.3965 18.3333 8.77816 18.3333H8.06155C6.88242 18.3333 6.29285 18.3333 5.99257 17.9487C5.69229 17.5642 5.83529 16.9922 6.12127 15.8483L8.4546 6.51493Z"
          stroke="currentColor"
        />
      </svg>
    </span>
  );
};

export default ShopAboutIcon;