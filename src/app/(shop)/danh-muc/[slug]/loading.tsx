import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="my-8">
            <div className="container">
                {/* Breadcrumbs Skeleton */}
                <Skeleton className="h-6 w-1/3 mb-4" />

                {/* Title Skeleton */}
                <Skeleton className="h-8 w-1/4 mb-8" />

                <div className="grid grid-cols-12 gap-8 relative">
                    {/* Filter Skeleton */}
                    <div className="lg:col-span-2 col-span-12">
                        <Skeleton className="h-6 w-3/4 mb-4" />
                        <Skeleton className="h-4 w-full mb-2" />
                        <Skeleton className="h-4 w-5/6 mb-2" />
                        <Skeleton className="h-4 w-2/3 mb-2" />
                    </div>

                    {/* Product List Skeleton */}
                    <div className="lg:col-span-10 col-span-12">
                        <div className="items-center mb-4 flex">
                            <Skeleton className="h-6 w-1/6 mr-4" /> {/* Sort Label */}
                            <Skeleton className="h-6 w-1/4" /> {/* Sort Dropdown */}
                        </div>

                        {/* Product Items Skeleton */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {Array.from({ length: 6 }).map((_, index) => (
                                <Skeleton key={index} className="h-64 w-full" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}