import Link from "@/components/common/Link";

import React from 'react'
import Image from 'next/image';
import logo from '../../../public/TÔMBILE.png'
export default function Logo({ height = 70, width = 200 }: { width?: number, height?: number }) {
    return (
            <Link href="/">
                <Image  className="  max-h-[70px]" src={logo} alt='logo' width={width} height={height}  />
            </Link>
    )
}
