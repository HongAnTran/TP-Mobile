import Link from "@/components/common/Link";

import React from 'react'
import Image from 'next/image';
import logo from '../../../public/logo.jpg'
export default function Logo({ height = 80, width = 200 }: { width?: number, height?: number }) {
    return (
            <Link href="/">
                <Image  className="  max-h-[80px]" src={logo} alt='logo' width={width} height={height}  />
            </Link>
    )
}
