"use client"
import ConsultationForm, { ConsultationFormValues } from '@/components/feature/consultation/ConsultationForm'
import SearchInput from '@/components/feature/SearchInput'
import { CloseIcon } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import useProfile from '@/hooks/useProfile'
import ConsultationsServiceApiClient from '@/services/client/ConsultationService'
import { ProductInList } from '@/types/Product.types'
import Image from 'next/image'
import React from 'react'

export default function RegisterConsultationPage() {
    const { data: customer } = useProfile()
    const { toast } = useToast()
    const [product, setProduct] = React.useState<ProductInList | null>(null)
    const [isSubmitting, setIsSubmitting] = React.useState(false)
    async function onSubmit(data: ConsultationFormValues) {
        try {
            if (!product) {
                toast({
                    title: "Đăng ký tư vấn thất bại",
                    description: "Vui lòng chọn 1 sản phẩm",
                    variant: "destructive"
                })
                return
            }
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
        } catch (error) {
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
        <div className='max-w-3xl mt-4 w-full mx-auto'>
            {product ? <div className=' items-center flex gap-2 mb-4'>
                <Image className=' w-10 h-10 rounded-md' alt={product.title} src={product.images[0]?.url || ""} width={60} height={60} />

                <div className=' flex items-center'>
                    <p className='  flex-1 text-sm mt-2 '><b>{product.title}</b>

                    </p>
                    <Button
                        onClick={() => {
                            setProduct(null)
                        }}
                        variant="outline"
                    >
                        <CloseIcon />
                    </Button>
                </div>
            </div> : <div className=' mb-4'>
                <p className=' text-gray-700 '>Bạn đang quan tâm đến sản phẩm nào?</p>
                <SearchInput viewAll={false} onSelect={(pro) => {
                    setProduct(pro)
                }} />
            </div>}

            <ConsultationForm onSubmit={onSubmit}
                isSubmitting={isSubmitting}
                defaultValues={{
                    name: customer?.full_name || "",
                    phone: customer?.phone || "",
                    email: customer?.email || "",
                    gender: customer?.gender
                }}
            />
        </div>
    )
}
