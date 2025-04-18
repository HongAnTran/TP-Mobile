
"use client"
import DialogUi from '@/components/common/Dialog'
import React from 'react'
import ConsultationForm, { ConsultationFormValues } from './ConsultationForm'
import { Product } from '@/types/Product.types'
import Image from 'next/image'
import { useToast } from '@/components/ui/use-toast'
import ConsultationsServiceApiClient from '@/services/client/ConsultationService'
import ErrorRespone from '@/api/error'
import useProfile from '@/hooks/useProfile'
import { Button } from '@/components/ui/button'
import { MessageIcon, MessengerIcon, PhoneFilledIcon, PhoneIcon, ZaloIcon } from '@/components/icons'
import CONFIG from '@/consts/config'
import { convertHotlineToTel } from '@/utils'
import Link from '@/components/common/Link'

export default function ConsultationDialog({
    isOpen = false, onClose = () => { },
    product
}: {
    isOpen?: boolean
    onClose?: () => void
    product: Product
}) {
    const { toast } = useToast()
    const { data: customer } = useProfile()


    const [isSubmitting, setIsSubmitting] = React.useState(false)
    async function onSubmit(data: ConsultationFormValues) {
        try {
            setIsSubmitting(true)
            await ConsultationsServiceApiClient.create({
                ...data,
                product_id: product.id
            })
            toast({
                title: "Đăng ký tư vấn thành công",
                description: "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất",
                variant: "default"
            })
            onClose()
        } catch (error) {
            if (error instanceof ErrorRespone) {
                toast({
                    title: "Đăng ký tư vấn thất bại",
                    description: error.message,
                    variant: "destructive"
                })
                return
            }
            toast({
                title: "Đăng ký tư vấn thất bại",
                description: "Có lỗi xảy ra, vui lòng thử lại sau",
                variant: "destructive"
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <DialogUi title={`Đăng ký nhận tư vấn sản phẩm`}
            open={isOpen}
            onClose={onClose}
            closeOnMask={false}
            className=' lg:max-w-xl'
        // closeButton={null}
        >
            <div className=' mb-4 mt-2'>
                <p className=' text-sm text-center text-muted-foreground'>Để lại thông tin, nhân viên sẽ liên hệ tư vấn cho bạn trong thời gian sớm nhất (trả lời trong 1 giờ sau 22h, phản hồi vào sáng hôm sau)</p>
                <p className=' text-center mb-3 font-bold text-sm text-muted-foreground'>Hoặc liên hệ ngay qua</p>
                <ul className=' flex justify-center gap-8 lg:gap-6'>
                    <li>
                        <Link aria-label="link" href={`tel:${convertHotlineToTel(CONFIG.HOTLINE)}`} target="_blank">
                            <PhoneIcon className=' hover:scale-105 transition lg:w-12 lg:h-12 w-10 h-10' />
                        </Link>
                    </li>
                    <li>
                        <Link aria-label="link" href={CONFIG.ZALO} target="_blank">
                            <ZaloIcon className=' hover:scale-105 transition lg:w-12 lg:h-12 w-10 h-10' />
                        </Link>
                    </li>
                    <li>
                        <Link aria-label="link" href={CONFIG.MESSENGER} target="_blank">

                            <MessengerIcon className=' hover:scale-105 transition lg:w-12 lg:h-12 w-10 h-10' />
                        </Link>
                    </li>
                </ul>
                <div className=' flex gap-2 mt-4'>
                    <Image className=' w-10 h-10 rounded-md' alt={product.title} src={product.images[0]?.url || ""} width={60} height={60} />

                    <p className='  text-sm mt-2 '><b>{product.title}</b></p>
                </div>
            </div>
            <ConsultationForm onSubmit={onSubmit}
                isSubmitting={isSubmitting}
                defaultValues={{
                    name: customer?.full_name || "",
                    phone: customer?.phone || "",
                    email: customer?.email || "",
                    gender: customer?.gender
                }}
            />
        </DialogUi>
    )
}
