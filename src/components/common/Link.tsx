
import LinkRoot, { LinkProps } from "next/link";
import React, { AnchorHTMLAttributes, ReactNode } from 'react'

export default function Link(props: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <LinkRoot
      {...props}
      prefetch={false}
    />
  )
}
