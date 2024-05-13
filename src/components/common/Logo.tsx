import { cn } from '@/lib/utils'
import Link from "@/components/common/Link";

import React from 'react'

export default function Logo({ className }: { className?: string }) {
    return (
        <div>
            <Link href="/">
                <h4 className={cn('  text-white   text-3xl font-bold ', className)}>TP MOBILE</h4>
            </Link>
        </div>
    )
}
