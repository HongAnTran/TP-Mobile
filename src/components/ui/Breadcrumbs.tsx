
import { cn } from "@/lib/utils";
import Link from "@/components/common/Link";
import React, { ReactNode } from "react";
import { ChevronRightIcon, HomeIcon } from "@radix-ui/react-icons";


interface BreadcrumbsItemType {
  slug?: string;
  label: ReactNode;
  isActive?: boolean;
}

interface BreadcrumbsProps {
  breadcrumbsList: BreadcrumbsItemType[];
  defaultBreadcrumb?: BreadcrumbsItemType;
}


export default function Breadcrumbs({ breadcrumbsList = [], defaultBreadcrumb }: BreadcrumbsProps) {
  const defaultBreadcrumbs: BreadcrumbsItemType = defaultBreadcrumb ? defaultBreadcrumb : {
    slug: "/",
    label: <span className=" flex items-center gap-1"><HomeIcon /> Trang chủ</span>,
  };
  return (

    <ul className=" flex gap-1   bg-white rounded-lg p-2  border">
      {[defaultBreadcrumbs, ...breadcrumbsList].map((item, index, arr) => {
        if (!item.label) return null
        return (
          <>
            <li key={index} className="flex-shrink-0">
              {item.slug ? (
                <Link href={item.slug}>
                  <BreadcrumbsText {...item} />
                </Link>
              ) : (
                <BreadcrumbsText {...item} />
              )}
            </li>
            {/* remove driver last item or  */}
            {arr.length - 1 === index ? null : (
              <li className=" flex items-center justify-center flex-shrink-0">
                <ChevronRightIcon />
                {/* <BreadcrumbsText label="/" /> */}
              </li>
            )}
          </>
        );
      })}
    </ul>

  );
}


function BreadcrumbsText({ label, isActive }: BreadcrumbsItemType) {
  return (
    <span
      className={cn("text-sm text-gray-800 line-clamp-1  max-w-[120px] sm:max-w-[160px] md:max-w-full", {
        " text-gray-800 font-bold": isActive,
      })}>
      {label}
    </span>
  );
}