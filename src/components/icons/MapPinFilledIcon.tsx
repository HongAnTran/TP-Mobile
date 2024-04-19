import React from "react";
import { cn } from "@/lib/utils";

const MapPinFilledIcon = ({ className }: { className?: string }) => {
	return (
		<span className={cn("block w-5 h-11 text-red-500 ", className)}>
			<svg
				width="100%"
				height="100%"
				viewBox="0 0 20 44"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<line
					x1="10"
					y1="27"
					x2="10"
					y2="44"
					stroke="currentColor"
					strokeDasharray="2 2"
				/>
				<path
					d="M0.20524 7.58552C2.50778 -2.53629 17.5035 -2.52461 19.7943 7.59721C21.1385 13.5347 15.5762 20.267 12.3386 23.376C9.98932 25.6435 10.0244 25.6435 7.66341 23.376C4.43752 20.267 -1.13888 13.523 0.20524 7.58552Z"
					fill="currentColor"
				/>
				<ellipse
					cx="9.93622"
					cy="9.93622"
					rx="6.4284"
					ry="6.4284"
					fill="white"
				/>
			</svg>
		</span>
	);
};

export default MapPinFilledIcon;
