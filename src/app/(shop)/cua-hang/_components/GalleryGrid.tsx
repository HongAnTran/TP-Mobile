import { StoreImage } from "@/types/store";
import Image from "next/image";
import React from "react";
const GalleryGrid = ({ images, isLoading }: { images: StoreImage[], isLoading: boolean }) => {


    if (isLoading) {
        return <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-4 p-4">
            <div className="overflow-hidden rounded-lg shadow-lg animate-pulse h-[250px] border"> </div>
            <div className="overflow-hidden rounded-lg shadow-lg animate-pulse h-[250px] border"> </div>
            <div className="overflow-hidden rounded-lg shadow-lg animate-pulse h-[250px] border"> </div>
            <div className="overflow-hidden rounded-lg shadow-lg animate-pulse h-[250px] border"> </div>
            <div className="overflow-hidden rounded-lg shadow-lg animate-pulse h-[250px] border"> </div>
        </div>
    }

    if (!images.length) {

        return <p className=" text-center">chưa có hình ảnh nào!</p>
    }
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-3 p-4">
            {images.map((src, index) => (
                <div key={index} className="overflow-hidden rounded-md shadow-md">
                    <Image
                        src={src.url}
                        width={src.width}
                        height={src.height}
                        alt={`Image ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}
        </div>
    );
};

export default GalleryGrid;
