import React from "react";
import { cn } from "@/lib/utils";

const TrophyIcon = ({ className }: { className?: string }) => {
	return (
		<span className={cn("block w-6 h-6 text-gray-500", className)}>
			<svg
				width={"100%"}
				height={"100%"}
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M17 20.5H8"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
				<path
					d="M13.25 18.5C13.25 18.9142 12.9142 19.25 12.5 19.25C12.0858 19.25 11.75 18.9142 11.75 18.5H13.25ZM11.75 18.5V16H13.25V18.5H11.75Z"
					fill="currentColor"
				/>
				<path
					d="M11 9.5H14"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
				<path
					d="M6 14.5C6 14.5 4 13 4 10.5C4 9.73465 4 9.06302 4 8.49945C4 7.39488 4.89543 6.5 6 6.5V6.5C7.10457 6.5 8 7.39543 8 8.5V9.5"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
				<path
					d="M19 14.5C19 14.5 21 13 21 10.5C21 9.73465 21 9.06302 21 8.49945C21 7.39488 20.1046 6.5 19 6.5V6.5C17.8954 6.5 17 7.39543 17 8.5V9.5"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
				<path
					d="M17 11.3593V7.5C17 6.39543 16.1046 5.5 15 5.5H10C8.89543 5.5 8 6.39543 8 7.5V11.3593C8 12.6967 8.66841 13.9456 9.7812 14.6875L11.9453 16.1302C12.2812 16.3541 12.7188 16.3541 13.0547 16.1302L15.2188 14.6875C16.3316 13.9456 17 12.6967 17 11.3593Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
			</svg>
		</span>
	);
};

export default TrophyIcon;
