import ChevronLeftIcon from "@/components/icons/ChevronLeftIcon";
import { cn } from "@/lib/utils";
import React from "react";

function PrevControlButton({ className }: { className?: string }) {
	return (
		<div
			className={cn(
				" w-7 h-7 flex items-center justify-center bg-white rounded cursor-pointer",
				className
			)}>
			<ChevronLeftIcon />
		</div>
	);
}

export default PrevControlButton;
