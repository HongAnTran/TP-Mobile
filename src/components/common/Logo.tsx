import Link from "@/components/common/Link";

import React from 'react'
import Image from 'next/image';
import logo from '../../../public/avanew.png'
import { cn } from "@/lib/utils";
export default function Logo({ className, height = 100, width = 100, isAvtBig }: { className?: string, width?: number, height?: number, isAvtBig?: boolean }) {
    return (
        <Link href="/" >
            <Image unoptimized quality={100} className={cn(" w-[70px] h-[70px]", className)} src={isAvtBig ? "/avtBig.jpg" : "/avavav.png"} alt='TP Mobile logo' width={width} height={height} />

        </Link>
    )
}
