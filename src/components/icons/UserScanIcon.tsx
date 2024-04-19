import React from "react";
import { cn } from "@/lib/utils";

const UserScanIcon = ({ className }: { className?: string }) => {
	return (
		<span className={cn("block w-6 h-6 text-gray-500 ", className)}>
			<svg
				width="100%"
				height="100%"
				viewBox="0 0 25 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M17.5 4H18.002C19.2134 4 19.819 4 20.2834 4.232C20.7095 4.44495 21.0551 4.79048 21.268 5.21665C21.5 5.68096 21.5 6.28664 21.5 7.498V8M17.5 20H18.002C19.2134 20 19.819 20 20.2834 19.768C20.7095 19.5551 21.0551 19.2095 21.268 18.7834C21.5 18.319 21.5 17.7134 21.5 16.502V16M7.5 4H6.998C5.78664 4 5.18096 4 4.71665 4.232C4.29048 4.44495 3.94495 4.79048 3.732 5.21665C3.5 5.68096 3.5 6.28664 3.5 7.498V8M7.5 20H6.998C5.78664 20 5.18096 20 4.71665 19.768C4.29048 19.5551 3.94495 19.2095 3.732 18.7834C3.5 18.319 3.5 17.7134 3.5 16.502V16"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
				<path
					d="M7.92034 16.9271C8.36614 16.2837 9.01868 15.7337 9.82517 15.3457C10.6317 14.9577 11.5547 14.75 12.5 14.75C13.4453 14.75 14.3683 14.9577 15.1748 15.3457C15.9813 15.7337 16.6339 16.2837 17.0797 16.9271"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
				<circle
					cx="12.5"
					cy="9"
					r="3"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
			</svg>
		</span>
	);
};

export default UserScanIcon;
