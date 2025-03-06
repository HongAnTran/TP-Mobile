"use client"
import DialogUi from '@/components/common/Dialog'
import Link from '@/components/common/Link'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Dialog, DialogFooter } from '@/components/ui/dialog'
import LocalStorageService from '@/utils/localStorage'
import Image from 'next/image'
import React, { useState } from 'react'
const KEY = "EVENT_8_3"
export default function EventPopup() {
    const event = {
        image: "/popupEvents/8-3.png",
        link: "https://tpmobile.com.vn/tin-tuc/tam-thang-ba-qua-tp-mobile-hai-hoa-chua-nguoi-dep-83-qua-iu-cho-nang-uu-dai-xin-cho-ban"
    }
    const [open, setOpen] = useState(() => {
        const isOff = LocalStorageService.getItem(KEY, false)
        if (isOff) {
            return false
        }
        return true
    })
    const [isCheck, setIsCheck] = useState(false)

    function handleClose() {
        setOpen(false)
        if (isCheck) {
            LocalStorageService.setItem(KEY, true)
        }
    }
    return (
        <DialogUi open={open} onClose={handleClose}
            closeOnMask={false} closeButton={null}
            className=' p-0 lg:max-w-[500px]'
        >
            <Link href={event.link} target="_blank" title='8/3 - Quà iu cho nàng, ưu đãi xịn cho bạn'>
                <Image className='' src={event.image} alt='8-3 tp mobile' width={500} height={500} />
            </Link>
            <DialogFooter className=' p-2  bg-pink-300 items-center flex-row justify-between'>
                <div className="flex items-center space-x-2">
                    <Checkbox id="terms" onCheckedChange={(data) => {
                        setIsCheck(!!data.valueOf())
                    }} className=' border-white outline-none' />
                    <label
                        htmlFor="terms"
                        className="text-base font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Không hiển thị lại thông báo
                    </label>
                </div>

                <Button onClick={handleClose} variant="ghost" className=' text-white'>Đóng</Button>
            </DialogFooter>
        </DialogUi>
    )
}
