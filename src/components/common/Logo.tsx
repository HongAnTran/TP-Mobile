import { cn } from '@/lib/utils'
import Link from "@/components/common/Link";

import React from 'react'
import Image from 'next/image';
import logo from '../../../public/logo.jpg'
export default function Logo({ className }: { className?: string }) {
    return (
        <div className=' '>
            <Link href="/">
                <h4 className={cn('  text-white   text-3xl font-bold ', className)}>TP MOBILE</h4>
                {/* <Image src={logo} className=' w-[300px] h-[80px]' alt='logo' width={300} height={100} /> */}
            </Link>
        </div>
    )
}
