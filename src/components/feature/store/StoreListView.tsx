"use client"

import { LoadingIcon, MapPinFilledIcon } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { TypographyH2, TypographyH3, TypographyP } from '@/components/ui/typography'
import useCheckLocationPermission from '@/hooks/useCheckLocationPermission'
import StoreServiceClientApi from '@/services/client/StoreService'
import { Store } from '@/types/Store.type'
import { convertHotlineToTel } from '@/utils'
import { CaretSortIcon } from '@radix-ui/react-icons'
import React, { useEffect, useState } from 'react'

export default function StoreListView({ stores, storeActive, onSelectStore  , title = "Cửa hàng TP Mobile Store"}: { title?: string,stores: Store[], storeActive?: Store, onSelectStore?: (store: Store) => void }) {

    const [storeList, setStoreList] = useState<Store[]>(stores)
    const [isSorted, setIsSorted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const { isPermission } = useCheckLocationPermission()



    async function sortStoreNearLocationUser() {
        try {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    try {
                        setIsLoading(true)

                        const latitude = position.coords.latitude;
                        const longitude = position.coords.longitude;
                        const datas = await StoreServiceClientApi.getList({
                            latitude: `${latitude}`,
                            longitude: `${longitude}`
                        });
                        setStoreList(datas);
                        setIsSorted(true)
                        setIsLoading(false)
                        if (datas.length > 0) {
                            onSelectStore?.(datas[0]);
                        }
                    } catch (error) {
                        setIsLoading(false)

                    } finally {
                        setIsLoading(false)

                    }
                },
                (error) => {
                    console.error("Không thể lấy tọa độ người dùng:", error);
                    setIsLoading(false)
                },
                { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
            );
        } catch (error) {
            setIsSorted(false)
            console.error("Đã xảy ra lỗi:", error);
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (isPermission) {
            sortStoreNearLocationUser()
        }
    }, [isPermission])


    return (
        <div className='border relative rounded-lg border-gray-300 p-2 h-full bg-white overflow-y-auto'>
         {title && <TypographyH3 className='text-center text-lg font-semibold'>{title}</TypographyH3>}
            {/* <TypographyP className='text-center text-base   text-gray-500'>
                {storeList.length} cửa hàng trên toàn quốc

            </TypographyP> */}
            <div className=' flex justify-center'>
                {isSorted ? "Cửa hàng gần bạn" : <Button variant="outline" className=' py-1 px-2 text-xs' onClick={sortStoreNearLocationUser}> <CaretSortIcon /> Sắp xếp theo cửa hàng gần bạn </Button>}
            </div>
            <div className='mt-2  flex flex-col gap-2  '>
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
                            <TypographyP>Hotline: <a href={`tel:${convertHotlineToTel(store.phone)}`} className=' text-sm hover:text-blue-500'><b>{store.phone}</b></a></TypographyP>
                            <TypographyP>Phản ánh: <a href={`tel:0347907042`} className='text-sm hover:text-blue-500'><b>0347.90.70.42</b></a></TypographyP>
                        </div>
                    </div>
                ))}

            </div>
            {isLoading && <div className=' absolute inset-0 flex items-center justify-center bg-black/30'>
                <LoadingIcon />
            </div>}

        </div>
    )
}
