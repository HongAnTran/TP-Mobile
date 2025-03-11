"use client"
import StoreListView from '@/components/feature/store/StoreListView'
import { Store } from '@/types/store'
import React, { useState } from 'react'
import GalleryGrid from './GalleryGrid'
import useGetImages from '@/hooks/useGetImages'

export default function StoreList({ stores }: { stores: Store[] }) {
    const [storeActive, setStoreActive] = useState(stores[0])
    const { data, isLoading, isSuccess } = useGetImages(storeActive.name === "TP Mobile Thủ Đức" ? 'thuduc' : 'tanphu')
    return (
        <div>
            <div className='grid grid-cols-12 gap-6 mb-6 '>
                <div className='col-span-12 md:col-span-4'>
                    <StoreListView stores={stores} onSelectStore={setStoreActive} storeActive={storeActive} />
                </div>
                <div className='md:col-span-8 col-span-12'>
                    <iframe
                        className='w-full h-64  md:h-80'
                        src={storeActive.url_map}
                        width="600"
                        height="450"
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
            <h2 className={` mb-6 text-center text-xl font-semibold relative before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-16 before:h-0.5 before:bg-primary before:rounded-md`}>Hình ảnh tại {storeActive.name}</h2>
            <GalleryGrid isLoading={isLoading} images={data || []} />
        </div>

    )
}
