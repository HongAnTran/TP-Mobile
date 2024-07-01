
import { cn } from "@/lib/utils";
import LinkRoot, { LinkProps } from "next/link";
import React, { AnchorHTMLAttributes  } from 'react'

export default function Link(props: AnchorHTMLAttributes<HTMLAnchorElement> &  LinkProps ) {
  return (
    <LinkRoot
      {...props}
      className={cn(" hover:text-blue-500" , props.className)}
      prefetch={false}
    />
  )
}
