import React from "react";
import { cn } from "@/lib/utils";

const CheckSquareIcon = ({ className }: { className?: string }) => {
	return (
		<span className={cn("block w-4 h-4 text-gray-500 ", className)}>
			<svg
				width={"100%"}
				height={"100%"}
				viewBox="0 0 14 15"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M5.2513 13.2311H8.7513C11.668 13.2311 12.8346 12.0645 12.8346 9.14779V5.64779C12.8346 2.73112 11.668 1.56445 8.7513 1.56445H5.2513C2.33464 1.56445 1.16797 2.73112 1.16797 5.64779V9.14779C1.16797 12.0645 2.33464 13.2311 5.2513 13.2311Z"
					stroke="currentColor"
					strokeOpacity="0.88"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M4.51953 7.39888L6.17036 9.04971L9.47786 5.74805"
					stroke="currentColor"
					strokeOpacity="0.88"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</span>
	);
};

export default CheckSquareIcon;
