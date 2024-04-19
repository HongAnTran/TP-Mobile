import React from "react";
import { cn } from "@/lib/utils";

const FeatherIcon = ({ className }: { className?: string }) => {
	return (
		<span className={cn("block w-6 h-6 text-gray-500 ", className)}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={"100%"}
				height={"100%"}
				viewBox="0 0 25 24"
				fill="none">
				<path
					d="M6.5 21L6.31092 17.9747C5.87149 10.9438 11.4554 5 18.5 5V5L17.2827 5.97387C14.8918 7.88656 13.5 10.7824 13.5 13.8442V13.8442C13.5 15.9831 11.5278 17.5774 9.43642 17.1292L6.5 16.5"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
			</svg>
		</span>
	);
};

export default FeatherIcon;
