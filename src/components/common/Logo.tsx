import Link from "@/components/common/Link";

import React from 'react'
import Image from 'next/image';
import { cn } from "@/lib/utils";
export default function Logo({ className, height = 100, width = 100, isAvtBig, href = "/" }: { href?: string, className?: string, width?: number, height?: number, isAvtBig?: boolean }) {

    if (href) {
        return (
            <Link href={href} >
                <Image unoptimized priority quality={100} className={cn(" w-[50px] h-[50px] md:w-[70px] md:h-[70px]", className)} src={isAvtBig ? "/ava_nobg.png" : "/ava_nobg.png"} alt='TP Mobile logo' width={width} height={height} />
            </Link>
        )
    }

    return <Image unoptimized priority quality={100} className={cn(" w-[50px] h-[50px] md:w-[70px] md:h-[70px]", className)} src={isAvtBig ? "/ava_nobg.png" : "/ava_nobg.png"} alt='TP Mobile logo' width={width} height={height} />
}
