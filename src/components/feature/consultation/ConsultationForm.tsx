"use client"

import InputController from '@/components/common/inputs/InputController'
import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Schema, z } from 'zod'
const schemas =     z.object({
    name: z.string().min(2, { message: "Tên không được để trống" }),
    phone: z.string().min(1, { message: "Số điện thoại không được để trống" }),
    email: z.string().email({ message: "Email không hợp lệ" }).optional(),
    message: z.string().optional(),
    })

 
type ConsultationForm = z.infer<typeof schemas>
const defaultValues: ConsultationForm = {
    name: "",
    phone: "",
}
export default function ConsultationForm() {

    const {control , handleSubmit} = useForm<ConsultationForm>({
        defaultValues,
        resolver: zodResolver(schemas),
    })

    function onSubmit(data: ConsultationForm) {
        console.log(data)
    }

  return (
    <form onSubmit={handleSubmit((data) => {
        onSubmit(data)
    })}>
        <div className=' grid gap-4  mb-2'>
            <InputController
                inputProps={{ required: true }}
            control={control} name="name" label='Họ và tên' />
            <InputController control={control} name="phone"
                inputProps={{ required: true }}
            
            label='Số điện thoại' />
            <InputController control={control} name="email" label='Email' inputProps={{ type: "email" }} />
            <InputController control={control} name="message" label='Tin nhắn' inputProps={{ type: "text" }} />
        </div>
        <Button className=' w-full uppercase font-bold' type='submit'>
            Gửi thông tin
        </Button>
    </form>
  )
}
