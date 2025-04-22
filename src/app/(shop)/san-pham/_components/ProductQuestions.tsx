"use client"
import InputController from '@/components/common/inputs/InputController'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import useQuestions from '@/hooks/useQuestions'
import { Product } from '@/types/Product.types'
import { QuestionDetail } from '@/types/Questions.type'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { object, string, InferType } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import DialogUi from '@/components/common/Dialog'
import TextAreaController from '@/components/common/inputs/TextAreaController'
import QuestionsServiceApiClient from '@/services/client/QuestionsService'
import { useToast } from '@/components/ui/use-toast'
import { vietnamPhoneRegex } from '@/utils/regex'
import useProfile from '@/hooks/useProfile'
import { formatDateCompareToday } from '@/utils'

const schema = object().shape({
    full_name: string().trim().required("Vui lòng nhập họ tên của bạn"),
    content: string().trim().required("Vui lòng nhập câu hỏi của bạn").min(10, "Câu hỏi phải có ít nhất 10 ký tự"),
    email: string().trim().email("Email không hợp lệ").required("Vui lòng nhập email của bạn"),
    phone: string().trim().required("Vui lòng nhập số điện thoại của bạn").matches(vietnamPhoneRegex, "Số điện thoại không hợp lệ"),
})

type FormValues = InferType<typeof schema>;

export default function ProductQuestions({ product }: {
    product: Product
}) {
    const { data: customer } = useProfile()
    const [open, setOpen] = React.useState(false)
    const [isSubmitting, setIsSubmitting] = React.useState(false)
    const { toast } = useToast()
    const { data, isLoading, isSuccess } = useQuestions({ productSlug: product.id })
    const questions = data?.pages[0] || []


    async function handleSubmit(data: FormValues) {
        try {
            setIsSubmitting(true)
            await QuestionsServiceApiClient.create({
                ...data,
                product_id: product.id,
            })
            setOpen(false)
            toast({
                title: "Gửi câu hỏi thành công",
                description: "Câu hỏi của bạn đã được gửi đi thành công chúng tôi sẽ phản hồi trong thời gian sớm nhất",
                variant: "default",
                duration: 6000,
            })
        } catch (error) {
            toast({
                title: "Gửi câu hỏi thất bại",
                description: "Có lỗi xảy ra trong quá trình gửi câu hỏi vui lòng thử lại sau",
                variant: "destructive"
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    if (isLoading) {
        return (
            <div className=' p-4 bg-white rounded-lg shadow-lg border flex items-center flex-col justify-center overflow-hidden'>
                <p className=' text-center'>Đang tải...</p>
            </div>
        )
    }

    if (!isSuccess) {
        return <div className=' p-4 bg-white rounded-lg shadow-lg border flex items-center flex-col justify-center overflow-hidden'>
            <Image src="/empty_ques.png" alt='' width={100} height={100} />
            <p className=' text-center'>Chưa có câu hỏi nào về sản phẩm này</p>
        </div>
    }

    return (
        <>
            <div className='p-2 pb-4 lg:p-4 bg-white rounded-lg shadow-lg border overflow-hidden'>
                <h3 className=' text-lg lg:text-2xl font-semibold text-center'>Hỏi và Đáp ({questions.length})</h3>
                <div className=' flex  flex-col gap-2 mt-4'>
                    <Textarea placeholder='TP Mobile sẽ trả lời trong 1 giờ (sau 22h, phản hồi vào sáng hôm sau)' rows={3} />
                    <Button variant="outline" onClick={() => {
                        setOpen(true)
                    }}>Gửi câu hỏi</Button>
                </div>
                <hr className=' my-3 border-0' />
                <div className='flex flex-col gap-4'>
                    <ProductQuestionsList list={questions} />
                </div>
            </div>

            <DialogUi open={open} onClose={() => {
                setOpen(false)
            }} title="Gửi câu hỏi" className=' max-w-2xl'>
                <ProductQuestionsForm onSubmit={handleSubmit} isSubmitting={isSubmitting} value={{
                    full_name: customer?.full_name,
                    email: customer?.email,
                    phone: customer?.phone || undefined,
                }} />
            </DialogUi>
        </>
    )
}

function ProductQuestionsList({ list }: { list: QuestionDetail[] }) {
    if (list.length === 0) {
        return (
            <div className=' p-4 bg-white rounded-lg shadow-lg border flex items-center flex-col justify-center overflow-hidden'>
                <Image src="/empty_ques.png" alt='' width={100} height={100} />
                <p className=' text-center'>Chưa có câu hỏi nào về sản phẩm này</p>
            </div>
        )
    }

    return (
        <div className=' p-4 bg-white rounded-lg shadow-lg border overflow-hidden'>
            <div className=' flex flex-col gap-3'>
                {list.map(item => {
                    return (
                        <div key={item.id} className=' p-4 bg-white rounded-lg shadow-lg border overflow-hidden'>
                            <p>{item.content}</p>
                            <p className=' text-sm text-gray-500'>Người hỏi: {item.full_name}</p>
                            <p className=' text-sm text-gray-500'>Ngày hỏi: {new Date(item.created_at).toLocaleDateString()}</p>
                            <div className=' mt-2 mr-2 flex flex-col gap-2'>
                                {item.answers.map((answer, index) => {
                                    return (
                                        <div key={index} className=' p-4 bg-gray-100 rounded-lg shadow-lg border overflow-hidden'>
                                            <p>{answer.content}</p>
                                            <p className=' text-sm text-gray-500'>Người trả lời: Quản trị viên</p>
                                            <p className=' text-sm text-gray-500'>Ngày trả lời: {formatDateCompareToday(answer.created_at)}</p>
                                        </div>
                                    )
                                })
                                }
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

function ProductQuestionsForm({ onSubmit, isSubmitting, value }: {
    onSubmit: (data: FormValues) => void, isSubmitting: boolean,
    value?: Partial<FormValues>

}) {
    const { control, handleSubmit, setValue } = useForm({
        resolver: yupResolver(schema),
    })

    useEffect(() => {
        if (value) {
            setValue("full_name", value.full_name || "")
            setValue("email", value.email || "")
            setValue("phone", value.phone || "")
        }
    }, [value])
    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <div className=' flex flex-col gap-2'>
                <InputController inputProps={{
                    required: true,
                }} label="Họ và tên" control={control} name="full_name" />
                <InputController inputProps={{
                    required: true,
                }} label='Số điện thoai' control={control} name="phone" />
                <InputController inputProps={{
                    required: true,
                }} label='Email' control={control} name="email" />
                <div className=' flex flex-col gap-2'>
                    <TextAreaController control={control} name="content" label='Câu hỏi'
                        textAreaProps={{
                            rows: 4,
                            placeholder: 'TP Mobile sẽ trả lời trong 1 giờ (sau 22h, phản hồi vào sáng hôm sau)',
                            required: true,
                        }}
                    />
                </div>
                <Button disabled={isSubmitting} className=' mt-4' type="submit" >Gửi câu hỏi</Button>
            </div>
        </form>
    )
}   