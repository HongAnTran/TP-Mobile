"use client"

import { MapPinFilledIcon } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { TypographyH2, TypographyP } from '@/components/ui/typography'
import StoreServiceApi from '@/services/StoreService'
import { Store } from '@/types/store'
import { CaretSortIcon } from '@radix-ui/react-icons'
import React, { useState } from 'react'

export default function StoreListView({ stores, storeActive, onSelectStore }: { stores: Store[], storeActive?: Store, onSelectStore?: (store: Store) => void }) {

    const [storeList, setStoreList] = useState<Store[]>(stores)

    async function sortStoreNearLocationUser() {
        try {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    const datas = await StoreServiceApi.getList({
                        latitude: `${latitude}`,
                        longitude: `${longitude}`
                    });

                    setStoreList(datas);
                    if (datas.length > 0) {
                        onSelectStore?.(datas[0]);
                    }
                },
                (error) => {
                    console.error("Không thể lấy tọa độ người dùng:", error);
                },
                { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
            );
        } catch (error) {
            console.error("Đã xảy ra lỗi:", error);
        }
    }


    return (
        <div className='border rounded-lg border-gray-300 p-4 h-full max-h-[300px] md:max-h-[200px] bg-white overflow-y-auto'>
            <TypographyH2 className='text-center text-xl font-medium'>
                Cửa hàng của TP Mobile
            </TypographyH2>
            <TypographyP className='text-center text-base   text-gray-500'>
                {storeList.length} cửa hàng trên toàn quốc

            </TypographyP>
            <div className=' flex justify-center'>
            <Button  className=' text-xs' onClick={sortStoreNearLocationUser}> <CaretSortIcon /> Sắp xếp theo cửa hàng gần bạn </Button>

            </div>
            <div className='mt-4  flex flex-col gap-2'>
                {storeList.map((store) => (
                    <div
                        key={store.id}
                        className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer 
                    ${storeActive?.id === store.id ? 'bg-primary text-white' : 'hover:bg-gray-200'}`}
                        onClick={() => onSelectStore?.(store)}
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
    )
}
