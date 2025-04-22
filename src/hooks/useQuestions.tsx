"use client"
import QuestionsServiceClientApi from '@/services/client/QuestionsService'
import { useInfiniteQuery } from '@tanstack/react-query'

export default function useQuestions({ productSlug, page = 1 }: { productSlug: number, page?: number }) {
    const query = useInfiniteQuery({
        queryKey: ['useQuestions', productSlug, page],
        initialPageParam: page,
        queryFn: async () => {
            return QuestionsServiceClientApi.getList({
                product_id: productSlug,
            })
        },
        getNextPageParam: (lastPage, pages) => {
            return 1
        },
    })
    return query
}
