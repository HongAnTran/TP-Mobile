
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";


interface BreadcrumbsItemType {
  slug?: string;
  label: string;
  isActive?: boolean;
}

interface BreadcrumbsProps {
  breadcrumbsList: BreadcrumbsItemType[];
  defaultBreadcrumb?: BreadcrumbsItemType;
}


export default function Breadcrumbs({ breadcrumbsList = [], defaultBreadcrumb }: BreadcrumbsProps) {
  const defaultBreadcrumbs: BreadcrumbsItemType = defaultBreadcrumb ? defaultBreadcrumb : {
    slug: "/",
    label: "Trang chủ",
  };
  return (
    <div className="">
      <ul className=" flex gap-1">
        {[defaultBreadcrumbs, ...breadcrumbsList].map((item, index, arr) => {
          if (!item.label) return null
          return (
            <>
              <li key={index}>
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
                <li>
                  <BreadcrumbsText label="/" />
                </li>
              )}
            </>
          );
        })}
      </ul>
    </div>
  );
}


function BreadcrumbsText({ label, isActive }: BreadcrumbsItemType) {
  return (
    <span
      className={cn("text-sm text-gray-800 line-clamp-1", {
        " text-gray-800 font-bold": isActive,
      })}>
      {label}
    </span>
  );
}