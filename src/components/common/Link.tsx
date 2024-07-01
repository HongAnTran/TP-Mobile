
import { cn } from "@/lib/utils";
import LinkRoot, { LinkProps } from "next/link";
import React, { AnchorHTMLAttributes  } from 'react'
type MyLinkProps = LinkProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>;

export default function Link(props: MyLinkProps) {
  return (
    <LinkRoot
  
      {...props}
      className={cn(" hover:text-blue-500" , props.className)}
      prefetch={false}
    />
  )
}
