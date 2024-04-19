import React from "react";
import { cn } from "@/lib/utils";

const ExchangeIcon = ({ className }: { className?: string }) => {
	return (
		<span className={cn("block w-6 h-6 text-gray-500 ", className)}>
			<svg
				width="100%"
				height="100%"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path d="M14 11L10 15L14 19" stroke="currentColor" strokeWidth="1.5" />
				<path
					d="M3.87821 13.128C2.79315 12.1883 2.27133 11.0079 2.59324 9.78532C2.90444 8.60342 3.95221 7.6008 5.4122 6.87081C6.8858 6.13401 8.77799 5.67217 10.7922 5.53958C12.8084 5.40686 14.8616 5.60957 16.6384 6.1225C18.4051 6.6325 19.8528 7.43657 20.6997 8.45895C21.5716 9.51145 21.7539 10.7438 21.1338 11.9009C20.5403 13.0083 19.2827 13.9135 17.6577 14.5369C16.0196 15.1654 12.8242 15 10.7924 15"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
			</svg>
		</span>
	);
};

export default ExchangeIcon;
