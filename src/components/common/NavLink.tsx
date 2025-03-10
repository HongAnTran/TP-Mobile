"use client";

import { cn } from "@/lib/utils";
import Link from "@/components/common/Link";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";


type Props = {
  children: React.ReactNode;
  href: string;
  className?: string;
  activeClassName?: string
  absolute?: boolean

  scroll?: boolean
  prefetch?: boolean
  replace?: boolean
};
export default function NavLink({ children, href, className, activeClassName, absolute, ...props }: Props) {
  const pathname = usePathname();
  const isActive = useMemo(() => {
    if (absolute) {
      if (pathname === href) {
        return true;
      }
    } else {
      if (pathname.startsWith(href)) {
        return true;
      }
    }
    return false;
  }, [absolute, pathname, href]);
  return (
    <Link
      {...props}
      className={cn(className, isActive ? activeClassName ? activeClassName : "text-blue-500 " : "")}
      href={href}>
      {children}
    </Link>
  );
};


