"use client"
import React from 'react'
import { Button } from '../ui/button'
import { useForm } from 'react-hook-form'
import InputController from '../common/inputs/InputController'
import { z } from 'zod'
const schema =  z.object({
    email: z.string().email("Email không hợp lệ").nonempty("Email không được để trống")
})
import { zodResolver } from '@hookform/resolvers/zod'
import SubscriptionServiceApiClient from '@/services/client/SubscriptionsService'
import { useToast } from '../ui/use-toast'


type FormData = z.infer<typeof schema>

export default function PromotionRegister() {
    const {toast} = useToast()
    const [isLoading, setIsLoading] = React.useState(false)
    const {control , handleSubmit , reset} = useForm({
        defaultValues: {
            email: ''
        },
        resolver: zodResolver(schema)
    })

   async function Submit(data: FormData) {
        try {
            setIsLoading(true)
            await SubscriptionServiceApiClient.create(data)
            toast({
                title: "Đăng ký thành công",
                description: "Bạn đã đăng ký nhận thông tin khuyến mãi thành công",
                variant: "default"
            })
            reset({
                email: ''
            })
        } catch (error) {
            toast({
                title: "Đăng ký thất bại",
                description: "Có lỗi xảy ra trong quá trình đăng ký",
                variant: "destructive"
            })
        }finally{
            setIsLoading(false)
        }
    }

  return (
    <form onSubmit={handleSubmit(Submit)} className="mt-6">
    <div className=' mb-4'>
      <InputController label='Email' control={control}  name="email"
        labelProps={{
            className:"text-white"
        }}
      inputProps={{
        placeholder:"Nhập email của bạn",
        className :"text-white placeholder:text-white ",
      }} />
    </div>

    <Button disabled={isLoading} variant="destructive" type="submit" >Đăng ký</Button>
  </form>
  )
}
