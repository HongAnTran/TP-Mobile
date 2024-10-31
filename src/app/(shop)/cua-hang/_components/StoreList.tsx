"use client"
import StoreListView from '@/components/feature/store/StoreListView'
import { Store } from '@/types/store'
import React, { useState } from 'react'
export default function StoreList({ stores }: { stores: Store[] }) {
    const [storeActive, setStoreActive] = useState(stores[0])
    return (
        <div className='grid grid-cols-12 gap-6'>
            <div className='col-span-12 md:col-span-4'>
                <StoreListView stores={stores} onSelectStore={setStoreActive} storeActive={storeActive} />
            </div>
            <div className='md:col-span-8 col-span-12'>
                <iframe
                    className='w-full h-64 md:h-96'
                    src={storeActive.url_map}
                    width="600"
                    height="450"
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    )
}
