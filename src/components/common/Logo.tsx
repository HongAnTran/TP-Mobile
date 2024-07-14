import Link from "@/components/common/Link";

import React from 'react'
import Image from 'next/image';
import logo from '../../../public/TÔMBILE.png'
import { cn } from "@/lib/utils";
export default function Logo({ className, height = 70, width = 200 }: { className?: string, width?: number, height?: number }) {
    return (
        <Link href="/" >
            <Image className={cn(" w-[180px] h-[60px]", className)} src={logo} alt='logo' width={width} height={height} />
        </Link>
    )
}
