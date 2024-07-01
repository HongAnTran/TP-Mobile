
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
	return (
		<div
			className={cn(
				" px-1  w-7 h-7 text-base  font-bold  flex items-center justify-center cursor-pointer rounded  transition  hover:text-red-500 text-gray-500  ",
				{ "text-red-500": isActive },
				className
			)}>
			<span className="text-inherit ">{item}</span>
		</div>
	);
}

export default ItemPagination;
