
"use client"
import DialogUi from '@/components/common/Dialog'
import React from 'react'
import ConsultationForm from './ConsultationForm'
import { Product } from '@/types/Product.types'
import Image from 'next/image'

export default function ConsultationDialog({
      isOpen = false, onClose = () => { },
      product
}:{
    isOpen?: boolean
    onClose?: () => void
    product:Product
}) {
  return (
    <DialogUi title={`Đăng ký nhận tư vấn sản phẩm`} 
        open={isOpen}
        onClose={onClose}
        closeOnMask={false}
        // closeButton={null}
    >
        <div className=' mb-4 mt-2'>
            <p className=' text-sm text-muted-foreground'>Để lại thông tin, nhân viên sẽ liên hệ tư vấn cho bạn trong thời gian sớm nhất</p>
            <div className=' flex gap-2 mt-4'>
                <Image className=' w-10 h-10 rounded-md' alt={product.title} src={product.images[0]?.url || ""} width={60} height={60} />

                <p className='  text-sm mt-2 '><b>{product.title}</b></p>
            </div>
        </div>
        <ConsultationForm />
    </DialogUi>
  )
}
