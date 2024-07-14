import Link from "@/components/common/Link";

import React from 'react'
import Image from 'next/image';
import logo from '../../../public/avanew.png'
import { cn } from "@/lib/utils";
export default function Logo({ className, height = 100, width = 100 }: { className?: string, width?: number, height?: number }) {
    return (
        <Link href="/" >
            <Image unoptimized   quality={100} className={cn(" w-[100px] h-[100px]", className)} src={"https://firebasestorage.googleapis.com/v0/b/tpmobile-9e980.appspot.com/o/avanew.png?alt=media&token=4b17f53b-c06b-42ec-892e-9d5f53e9b173"} alt='logo' width={width} height={height} />
            {/* // eslint-disable-next-line @next/next/no-img-element */}
            {/* <img className={cn(" w-[100px] h-[100px]", className)} src={"https://firebasestorage.googleapis.com/v0/b/tpmobile-9e980.appspot.com/o/avanew.png?alt=media&token=4b17f53b-c06b-42ec-892e-9d5f53e9b173"} alt='logo' width={width} height={height} /> */}
        </Link>
    )
}
