"use client"
import fetchApi from '@/api/instances/clientInstance'
import { StoreImage } from '@/types/Store.type'
import { useQuery } from '@tanstack/react-query'

export default function useGetImages(folderName: 'feedback' | 'thuduc' | 'tanphu') {
  const { ...res } = useQuery({
    staleTime: Infinity,
    queryKey: ['useGetImages', folderName],
    queryFn: () => fetchApi.get<StoreImage[]>("/images", {
      params: {
        folderName
      }
    })
  },
  )

  return {
    ...res,
  }
}
