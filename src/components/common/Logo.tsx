import Link from "@/components/common/Link";

import React from 'react'
import Image from 'next/image';
import logo from '../../../public/avanew.png'
import { cn } from "@/lib/utils";
export default function Logo({ className, height = 100, width = 100 }: { className?: string, width?: number, height?: number }) {
    return (
        <Link href="/" >
            <Image unoptimized quality={100} className={cn(" w-[70px] h-[70px]", className)} src={"/avavav.png"} alt='TP Mobile logo' width={width} height={height} />

        </Link>
    )
}
