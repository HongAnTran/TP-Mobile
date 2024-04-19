import React from "react";
import { cn } from "@/lib/utils";

const LockIcon = ({ className }: { className?: string }) => {
	return (
		<span className={cn("block w-5 h-5 text-gray-500 ", className)}>
			<svg
				width="100%"
				height="100%"
				viewBox="0 0 25 25"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M6.5 10.3984V8.39844C6.5 5.08844 7.5 2.39844 12.5 2.39844C17.5 2.39844 18.5 5.08844 18.5 8.39844V10.3984"
					stroke="currentColor"
					strokeOpacity="0.88"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M12.5 18.8984C13.8807 18.8984 15 17.7791 15 16.3984C15 15.0177 13.8807 13.8984 12.5 13.8984C11.1193 13.8984 10 15.0177 10 16.3984C10 17.7791 11.1193 18.8984 12.5 18.8984Z"
					stroke="currentColor"
					strokeOpacity="0.88"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M17.5 22.3984H7.5C3.5 22.3984 2.5 21.3984 2.5 17.3984V15.3984C2.5 11.3984 3.5 10.3984 7.5 10.3984H17.5C21.5 10.3984 22.5 11.3984 22.5 15.3984V17.3984C22.5 21.3984 21.5 22.3984 17.5 22.3984Z"
					stroke="currentColor"
					strokeOpacity="0.88"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</span>
	);
};

export default LockIcon;
