
import { cn } from "@/lib/utils";
import React from "react";

function ItemPagination({
	item,
	className,
	isActive,
}: {
	item: number | string;
	isActive?: boolean;
	className?: string;
}) {
	console.log(isActive)
	return (
		<div
			className={cn(
				" px-1  border  rounded-full w-8 h-8 text-base  font-bold  flex items-center justify-center cursor-pointer   transition  hover:text-red-500 text-gray-500  ",
				{ " text-white border-red-500 bg-red-500 hover:text-white": isActive },
				className
			)}>
			<span className="text-inherit ">{item}</span>
		</div>
	);
}

export default ItemPagination;
