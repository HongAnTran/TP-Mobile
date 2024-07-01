import { DOTS, handlerPagination } from "./handler";
import { useMemo } from "react";
import PrevControlButton from "./components/PrevControlButton";
import NextControlButton from "./components/NextControlButton";
import ItemPagination from "./components/ItemPagination";
interface PaginationClientProps {
  total: number;
  page: number;
  onChange: (page: number) => void;
  pageSize?: number;
  siblingCount?: number;
  firstPageIndex?: number;
}
export default function PaginationClient({
  total,
  page,
  onChange,
  pageSize,
  siblingCount,
  firstPageIndex,
}: PaginationClientProps) {
  const paginationRange = useMemo(() => {
    return handlerPagination({
      currentPage: page,
      totalCount: total,
      siblingCount: siblingCount || 1,
      pageSize: pageSize || 10,
      firstPageIndex: firstPageIndex || 1,
    });
  }, [page, total, siblingCount, pageSize, firstPageIndex]);
  if (page === 0 || paginationRange.length < 2) {
    return null;
  }
  const lastPage = paginationRange[paginationRange.length - 1] as number;

  const onNext = () => {
    if (page < lastPage) {
      onChange(page + 1);
    }
  };

  const onPrevious = () => {
    if (page > 1) {
      onChange(page - 1);
    }
  };
  return (
    <div className=" flex items-center gap-2 p-1 bg-white ">
      <div className=" inline-block" onClick={onPrevious}>
        <PrevControlButton />
      </div>
      {paginationRange.map((item, index) => {
        if (item === DOTS) {
          return <ItemPagination key={index} item={item} />;
        }
        if (typeof item === "number") {
          return (
            <div
              key={index}
              className="inline-block"
              onClick={() => {
                onChange?.(item);
              }}
            >
              <ItemPagination item={item} isActive={page === item} />
            </div>
          );
        }
      })}
      <div className="inline-block" onClick={onNext}>
        <NextControlButton />
      </div>
    </div>
  );
}
