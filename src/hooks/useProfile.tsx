import AuthServiceApi from '@/services/authService'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

export default function useProfile() {
    return useQuery({
        queryKey: ['profile'],
        queryFn: () => AuthServiceApi.profile()
    })
}
