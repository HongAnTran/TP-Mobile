import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="bg-white container p-4">
            {/* Product Image Skeleton */}
            <div className="flex flex-col md:flex-row gap-4">
                <Skeleton className="w-full md:w-1/2 h-64" />

                {/* Product Details Skeleton */}
                <div className="flex flex-col gap-4 w-full md:w-1/2">
                    <Skeleton className="h-8 w-3/4" /> {/* Product Title */}
                    <Skeleton className="h-6 w-1/2" /> {/* Price */}
                    <Skeleton className="h-4 w-full" /> {/* Short Description */}
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-2/3" />
                    <Skeleton className="h-10 w-1/3" /> {/* Add to Cart Button */}
                </div>
            </div>

            {/* Additional Information Skeleton */}
            <div className="mt-8">
                <Skeleton className="h-6 w-1/4 mb-4" /> {/* Section Title */}
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-5/6 mb-2" />
                <Skeleton className="h-4 w-2/3" />
            </div>
        </div>
    );
}