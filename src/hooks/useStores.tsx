import StoreServiceClientApi from '@/services/client/StoreService'
import { StoreParams } from '@/types/Store.type'
import { useQuery } from '@tanstack/react-query'

export default function useStores(params?:StoreParams) {
  return useQuery({
    queryKey: ['stores',JSON.stringify(params)],
    queryFn: () => StoreServiceClientApi.getList(params),
    staleTime : Infinity,
  })
}
