import React from "react";
import { cn } from "@/lib/utils";

const ChevronsDownIcon = ({ className }: { className?: string }) => {
	return (
		<span className={cn("block w-4 h-4 text-gray-500 ", className)}>
			<svg
				width="100%"
				height="100%"
				viewBox="0 0 10 15"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M8.3002 6.66933L5.58353 3.95266C5.2627 3.63183 4.7377 3.63183 4.41686 3.95266L1.7002 6.66933"
					stroke="currentColor"
					strokeOpacity="0.88"
					strokeMiterlimit={10}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M8.3002 10.6693L5.58353 7.95266C5.2627 7.63183 4.7377 7.63183 4.41686 7.95266L1.7002 10.6693"
					stroke="currentColor"
					strokeOpacity="0.88"
					strokeMiterlimit={10}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</span>
	);
};

export default ChevronsDownIcon;
