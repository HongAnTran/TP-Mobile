import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import QuestionsServiceApi from '@/services/QuestionsService'
import { Product } from '@/types/Product.types'
import { QuestionDetail } from '@/types/Questions.type'
import React from 'react'

export default async function ProductQuestions({ product }: {
    product: Product
}) {
    const questions = await QuestionsServiceApi.getList({
        product_id: product.id,
    })

    return (
        <div className='p-2 lg:p-4 bg-white rounded-lg shadow-lg border overflow-hidden'>
            <h3 className=' text-lg lg:text-2xl font-semibold text-center'>Câu hỏi về sản phẩm ({questions.length})</h3>
            <div className=' flex  gap-2'>
                <Textarea rows={3} />
                <Button >Đặt câu hỏi</Button>
            </div>
            <hr className=' my-3 border-0' />
            <div className='flex flex-col gap-4'>
                <ProductQuestionsList list={questions} />
            </div>
        </div>
    )
}

function ProductQuestionsList({ list }: { list: QuestionDetail[] }) {
    if (list.length === 0) {
        return (
            <div className=' p-4 bg-white rounded-lg shadow-lg border overflow-hidden'>
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
                        </div>
                    )
                })}
            </div>
        </div>
    )
}