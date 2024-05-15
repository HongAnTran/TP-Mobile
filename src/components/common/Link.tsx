
import { cn } from "@/lib/utils";
import LinkRoot, { LinkProps } from "next/link";
import React, { AnchorHTMLAttributes, ReactNode } from 'react'

export default function Link(props: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <LinkRoot
      {...props}
      className={cn(" hover:text-blue-500" , props.className)}
      prefetch={false}
    />
  )
}
