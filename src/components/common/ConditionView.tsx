import React from 'react'

export default function ConditionView({ isFallback, children, fallBack }: { isFallback: boolean, children: React.ReactNode, fallBack?: React.ReactNode }) {
    if (isFallback) {
        return <>{fallBack}</>
    }
    return <>{children}</>
}
