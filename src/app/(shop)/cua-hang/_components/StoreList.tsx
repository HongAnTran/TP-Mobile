"use client"
import { MapPinFilledIcon } from '@/components/icons'
import { TypographyH2, TypographyP } from '@/components/ui/typography'
import { Store } from '@/types/store'
import React, { useState } from 'react'

export default function StoreList({ stores }: { stores: Store[] }) {
    const [storeActive, setStoreActive] = useState(stores[0])

    return (
        <div className='grid grid-cols-12 gap-6'>
            {/* Store List */}
            <div className='col-span-12 md:col-span-4'>
                <div className='border rounded-lg border-primary p-4 h-full'>
                    <TypographyH2 className='text-center text-xl font-medium'>
                        Cửa hàng của TP Mobile
                    </TypographyH2>
                    <TypographyP className='text-center text-base  text-gray-500'>
                        {stores.length} cửa hàng trên toàn quốc
                    </TypographyP>

                    <div className='mt-4  flex flex-col gap-2'>
                        {stores.map((store) => (
                            <div
                                key={store.id}
                                className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer 
                                    ${storeActive.id === store.id ? 'bg-primary text-white' : 'hover:bg-gray-200'}`}
                                onClick={() => setStoreActive(store)}
                            >
                                <div className='flex-shrink-0'>
                                    <MapPinFilledIcon />
                                </div>
                                <div>
                                    <TypographyP>{store.detail_address}</TypographyP>
                                    <TypographyP>Hotline: <a href={`tel:${store.phone}`}><b>{store.phone}</b></a></TypographyP>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Active Store Map */}
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
