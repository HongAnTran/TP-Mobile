"use client"

import InputController from '@/components/common/inputs/InputController'
import { Button } from '@/components/ui/button'
import { vietnamPhoneRegex } from '@/utils/regex'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import SelectController from '@/components/common/inputs/SelectController'
import TextAreaController from '@/components/common/inputs/TextAreaController'

const schemas = z.object({
    name: z.string().min(2, { message: "Tên không được để trống" }),
    phone: z.string().min(1, { message: "Số điện thoại không được để trống" }).regex(vietnamPhoneRegex, { message: "Số điện thoại không hợp lệ" }),
    email: z.string().email({ message: "Email không hợp lệ" }).optional(),
    message: z.string().optional(),
    gender: z.string().optional(),
})


export type ConsultationFormValues = z.infer<typeof schemas>
const init: ConsultationFormValues = {
    name: "",
    phone: "",
}
export default function ConsultationForm({
    onSubmit,
    isSubmitting,
    defaultValues = init
}: {
    onSubmit: (data: ConsultationFormValues) => void
    isSubmitting?: boolean
    defaultValues?: ConsultationFormValues
}) {

    const { control, handleSubmit } = useForm<ConsultationFormValues>({
        defaultValues,
        resolver: zodResolver(schemas),
    })



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
                <div className='grid lg:grid-cols-2 gap-4 grid-cols-1'>
                    <InputController
                        control={control} name="email" label='Email' inputProps={{ type: "email", required: true }} />
                    <SelectController control={control} name="gender"
                        label='Xưng hô'
                        items={[
                            {
                                value: "Anh",
                                label: "Anh"

                            },
                            {
                                value: "Chị",
                                label: "Chị"

                            }
                        ]}
                    />

                </div>
                <TextAreaController textAreaProps={{
                    rows: 2, placeholder: "Nội dung tin nhắn"

                }} control={control} name="message" label='Tin nhắn' />
            </div>
            <Button className=' w-full uppercase font-bold' type='submit'
                disabled={isSubmitting}
            >
                {isSubmitting ? "Đang gửi..." : "Gửi thông tin"}
            </Button>
        </form>
    )
}
