"use client"
import AddressServiceClientApi from '@/services/client/AddressService'
import { Address } from '@/types/Address.type'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

export default function useCustomerAddress(customerEmail : string ,options?: Omit<UseQueryOptions<Address[]> , "queryKey" | "queryFn">) {
    const res = useQuery({
        queryKey: ['customer-address',customerEmail],
        queryFn: async () => {
           try {
            const res =await AddressServiceClientApi.getList()
            return res
           } catch (error) {
            throw error
           }
        },
        ...options,
    })
  return res
}
