"use client"
import RatingssServiceClientApi from '@/services/client/RatingsService'
import { useInfiniteQuery } from '@tanstack/react-query'

export default function useRatings({productSlug ,page = 1}:{productSlug:number , page?:number}) {
    const query = useInfiniteQuery({
        queryKey: ['ratings' , productSlug , page],
        initialPageParam: page,
        queryFn: async () => {
           return RatingssServiceClientApi.getRatings(productSlug)
        },
        getNextPageParam: (lastPage, pages) => {
            return 1
        },
    })
  return query
}
