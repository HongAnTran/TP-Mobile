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
        <div>
            <h2 className=' text-2xl font-semibold'>Câu hỏi về sản phẩm</h2>
            <p className=' text-sm text-gray-500'>Có {questions.length} câu hỏi về sản phẩm này</p>
            <div className=' flex items-center gap-2'>
                <p className=' text-sm text-gray-500'>Bạn có câu hỏi nào về sản phẩm này?</p>
                <button className=' bg-primary text-white px-4 py-2 rounded-md'>Hỏi ngay</button>
            </div>
            <hr className=' my-3 border-0' />
            <div className='flex flex-col gap-4'>
                <ProductQuestionsList list={questions} />
            </div>
        </div>
    )
}

function ProductQuestionsList({ list }: { list: QuestionDetail[] }) {
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