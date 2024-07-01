
import { DOTS, handlerPagination } from "./handler";
import NextControlButton from "./components/NextControlButton";
import PrevControlButton from "./components/PrevControlButton";
import ItemPagination from "./components/ItemPagination";
import Link from "../Link";
import { cn } from "@/lib/utils";

interface PaginationServerProps {
	total: number;
	page: number;
	urlSrc: string;
	pageSize: number;
	siblingCount?: number;
	query?: { [x: string]: string | number | undefined | string[] };
	firstPageIndex?: number;
}

export default function PaginationServer({
	total,
	page,
	pageSize,
	siblingCount,
	urlSrc,
	query,
	firstPageIndex = 1,
}: PaginationServerProps) {
	const paginationRange = handlerPagination({
		currentPage: page,
		totalCount: total,
		siblingCount: siblingCount || 1,
		pageSize: pageSize || 10,
		firstPageIndex: firstPageIndex,
	});

	if (page === 0 || paginationRange.length < 2) {
		return null;
	}
	const lastPage = paginationRange[paginationRange.length - 1] as number;
	return (
		<div className=" flex items-center gap-2 p-2 bg-white ">
			<Link
				href={{
					pathname: `${urlSrc}`,
					query: {
						...query,
						page: page - 1
					},
				
				}}
				className={cn({
					" hidden": page === firstPageIndex,
				})}>
				<PrevControlButton />
			</Link>
			{paginationRange.map((item, index) => {
				if (item === DOTS) {
					return <ItemPagination key={index} item={item} />;
				}
				return (
					<Link
						href={{
							pathname: `${urlSrc}`,
							query: {
								...query,
								page: item
							},
						}}
						key={index}>
						<ItemPagination item={item} isActive={page === Number(item)} />
					</Link>
				);
			})}
			<Link
				href={{
					pathname: `${urlSrc}`,
					query: {
						...query,
						page: page  + 1
					},
				}}
				className={cn({
					" hidden": page === lastPage,
				})}>
				<NextControlButton />
			</Link>
		</div>
	);
}
