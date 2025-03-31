"use client"

import React from 'react'

export default function SessionProvider({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>{children}
        </div>
    )
}
